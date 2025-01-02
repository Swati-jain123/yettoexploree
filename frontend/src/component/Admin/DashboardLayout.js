import React from "react";
import UploadForm from "./UploadFile";

function DashboardLayout() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Upload Content</h2>
        <UploadForm />
      </section>
      {/* Add more sections for other admin features */}
    </div>
  );
}

export default DashboardLayout;
