import React from "react";
import { Link } from "react-router-dom";
function AdminHome() {
  return (
    <div style={homeContainerStyle}>
      <h2 style={titleStyle}>Welcome to the Admin Dashboard</h2>
      <p style={descriptionStyle}>
        Use the navigation bar above to manage the dashboard features.
      </p>
      <div style={featureCardsContainer}>
        <div style={featureCardStyle}>
          <h3>Upload Files</h3>
          <p>Upload and manage your files with ease.</p>
        </div>
        <div style={featureCardStyle}>
          <h3>Manage Content</h3>
          <p>Organize and control your website's content.</p>
        </div>
        <div style={featureCardStyle}>
          <h3>Future Features</h3>
          <p>Stay tuned for more admin capabilities!</p>
        </div>
      </div>

      {/* Add a property button for testing purpose only remove it in future */}
      <div className="flex flex-wrap bg-gray-100 mt-6 gap-12">
        <Link
          className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md"
          to="/addproperty"
        >
          Add Property
        </Link>
        <Link
          className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md"
          to="/hostreservation"
        >
          Host Reservation
        </Link>
        <Link
          className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md"
          to="/hosttransactions"
        >
          Host Transactions
        </Link>
      </div>
    </div>
  );
}

const homeContainerStyle = {
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const descriptionStyle = {
  fontSize: "16px",
  color: "#6c757d",
  marginBottom: "20px",
};

const featureCardsContainer = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const featureCardStyle = {
  flex: "1 1 calc(33% - 20px)", // Responsive sizing
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

export default AdminHome;
