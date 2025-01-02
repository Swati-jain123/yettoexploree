import React, { useEffect, useState } from "react";

const EightFirst = () => {
  const [uploads, setUploads] = useState([]); // State to store the fetched uploads
  const [error, setError] = useState(null); // State to handle errors
  const [isDeleting, setIsDeleting] = useState(false); // State to indicate deletion progress
  const [selectedUploads, setSelectedUploads] = useState([]); // State to track selected uploads
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode
  const [editUpload, setEditUpload] = useState(null); // Upload being edited
  const [selectedTab, setSelectedTab] = useState(null); // State to track selected tab
  const [selectedTabCount, setSelectedTabCount] = useState(0); // State to store count of selected tabs

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/uploads"); // Ensure your server is running
      if (!response.ok) {
        throw new Error("Failed to fetch uploads");
      }
      const data = await response.json(); // Parse the JSON response
      setUploads(data); // Set the uploads in state
    } catch (error) {
      setError(error.message); // Handle errors
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this upload?"
    );
    if (!confirmDelete) return;

    setIsDeleting(true);

    try {
      const response = await fetch(`http://localhost:3001/api/uploads/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the upload");
      }

      // Remove the deleted item from the state
      setUploads((prevUploads) => prevUploads.filter((upload) => upload._id !== id));
    } catch (error) {
      alert(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle select
  const handleSelect = (id) => {
    setSelectedUploads((prevSelected) => {
      // Prevent selection if the limit of 8 is reached
      if (prevSelected.length >= 8 && !prevSelected.includes(id)) {
        alert("You can only select up to 8 uploads.");
        return prevSelected; // Don't update the selection
      }

      const newSelected = prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id) // Deselect if already selected
        : [...prevSelected, id]; // Add to selected list

      // Update the selectedTabCount based on the length of selected uploads
      setSelectedTabCount(newSelected.length);

      return newSelected;
    });
  };

  // Handle tab selection
  const handleTabSelect = (tabIndex) => {
    setSelectedTab(tabIndex);
    // Optionally, you could track the selected tab and update the count here as needed
  };

  // Handle edit
  const handleEdit = (upload) => {
    setIsEditing(true);
    setEditUpload({ ...upload });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUpload((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditImageChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setEditUpload((prev) => ({ ...prev, [name]: fileUrl }));
    }
  };

  const handleEditSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/uploads/${editUpload._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUpload),
      });

      if (!response.ok) {
        throw new Error("Failed to update the upload");
      }

      // Update the uploads list with the edited data
      setUploads((prevUploads) =>
        prevUploads.map((upload) =>
          upload._id === editUpload._id ? editUpload : upload
        )
      );

      setIsEditing(false);
      setEditUpload(null);
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle form submission to the first endpoint
  const handleSubmit = async () => {
    if (selectedUploads.length === 8) {
      try {
        const response = await fetch('http://localhost:3001/api/uploads/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedUploads }), // Send the selected upload IDs
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert(errorData.message || 'Failed to submit the uploads');
          return;
        }

        const result = await response.json();
        alert(result.message); // Show success message
      } catch (error) {
        alert('Error submitting uploads: ' + error.message);
      }
    } else {
      alert('Please select exactly 8 uploads before submitting.');
    }
  };

  // Handle form submission to the second endpoint
  const handleAlternativeSubmit = async () => {
    if (selectedUploads.length === 8) {
      try {
        const response = await fetch('http://localhost:3001/api/uploads/submitnext', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedUploads }), // Send the selected upload IDs
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert(errorData.message || 'Failed to submit to the alternative endpoint');
          return;
        }

        const result = await response.json();
        alert(result.message); // Show success message
      } catch (error) {
        alert('Error submitting to alternative endpoint: ' + error.message);
      }
    } else {
      alert('Please select exactly 8 uploads before submitting.');
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {error && <p className="text-red-500">{error}</p>} {/* Display error if any */}
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Uploaded Files
      </h2>

      {/* Display the selected tab count */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
        {selectedTabCount} Tabs Selected
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {uploads.length > 0 ? (
          uploads.map((upload) => (
            <div
              key={upload._id} // Ensure unique key for each item
              className={`relative bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 ${
                selectedUploads.includes(upload._id) ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Profile Picture (Small Icon) */}
              <div className="absolute -top-6 right-4">
                <img
                  src={upload.profilePictureUrl}
                  alt={`${upload.title} - Profile`}
                  className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-semibold mt-8 text-gray-800">{upload.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{upload.description}</p>

              {/* Uploaded File Preview */}
              <div className="mt-4">
                <img
                  src={upload.fileUrl}
                  alt={`${upload.title} - File`}
                  className="w-full h-40 object-contain rounded-lg bg-gray-50"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {/* Select Button */}
                <button
                  onClick={() => handleSelect(upload._id)}
                  className={`flex-1 py-2 px-4 rounded-lg ${
                    selectedUploads.includes(upload._id)
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  } transition-colors`}
                >
                  {selectedUploads.includes(upload._id) ? "Deselect" : "Select"}
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(upload._id)}
                  disabled={isDeleting}
                  className={`flex-1 py-2 px-4 rounded-lg ${
                    isDeleting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 text-white hover:bg-red-600"
                  } transition-colors`}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>

                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(upload)}
                  className="flex-1 py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No uploads found.</p>
        )}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Edit Upload</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={editUpload.title}
                onChange={handleEditChange}
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <textarea
                name="description"
                value={editUpload.description}
                onChange={handleEditChange}
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="file"
                name="fileUrl"
                onChange={handleEditImageChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={handleEditSubmit}
                className="flex-1 py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 py-2 px-4 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Buttons */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSubmit}
          disabled={selectedUploads.length !== 8}
          className={`py-2 px-6 rounded-lg text-white transition-colors ${
            selectedUploads.length === 8
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit to First Endpoint
        </button>

        <button
          onClick={handleAlternativeSubmit}
          disabled={selectedUploads.length !== 8}
          className={`ml-4 py-2 px-6 rounded-lg text-white transition-colors ${
            selectedUploads.length === 8
              ? "bg-purple-500 hover:bg-purple-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit to Second Endpoint
        </button>
      </div>
    </div>
  );
};

export default EightFirst;