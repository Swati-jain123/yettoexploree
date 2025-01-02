import React, { useState } from "react";
import { getAuth, getIdToken } from 'firebase/auth'; // Import only the necessary functions

function UploadFile() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("profilePicture", profilePicture); // Add profile picture to form data

    try {
      const auth = getAuth();  // Initialize auth
      const user = auth.currentUser;  // Get the current user

      if (!user) {
        alert("You need to be logged in to upload files!");
        return;
      }

      // Get the user's ID token
      const token = await getIdToken(user);  // Fetch the ID token

      // Send the file and ID token to your backend with Authorization header
      const response = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
         headers: { Authorization: token } ,
        body: formData,
      });

      if (response.ok) {
        alert("File and profile picture uploaded successfully!");
      } else {
        alert("Error uploading file or profile picture!");
      }
    } catch (error) {
      console.error("Upload failed", error);
      alert("Error uploading file or profile picture!");
    }
  };

  return (
    <div style={sectionStyle}>
      <h2>Upload File with Profile Picture</h2>
      <form onSubmit={handleUpload} style={formStyle}>
        <div style={formFieldStyle}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formFieldStyle}>
          <label>Description</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formFieldStyle}>
          <label>File</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={inputStyle}
          />
        </div>
        <div style={formFieldStyle}>
          <label>Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Upload
        </button>
      </form>
    </div>
  );
}

const sectionStyle = {
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  marginTop: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const formFieldStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#343a40",
  color: "#fff",
  padding: "10px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
};

export default UploadFile;
