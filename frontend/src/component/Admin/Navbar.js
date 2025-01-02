import React from "react";

function Navbar({ onSectionChange }) {
  return (
    <nav
      style={{
        backgroundColor: "#343a40",
        padding: "10px 20px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Admin Dashboard</h1>
      <div>
        <button
          onClick={() => onSectionChange("home")}
          style={navButtonStyles}
        >
          Home
        </button>
        <button
          onClick={() => onSectionChange("upload")}
          style={navButtonStyles}
        >
          Upload File
        </button>
        <button
          onClick={() => onSectionChange("manage")}
          style={navButtonStyles}
        >
          Manage Content
        </button>
      </div>
    </nav>
  );
}

const navButtonStyles = {
  backgroundColor: "transparent",
  border: "none",
  color: "#fff",
  margin: "0 10px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Navbar;
