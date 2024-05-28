import React from "react";

function AdminNavBar({ PageChange }) {
  return (
    <nav>
      <button onClick={() => PageChange("Form")}>New Question</button>
      <button onClick={() => PageChange("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;