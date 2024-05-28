import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [currentPage, setCurrentPage] = useState("List");

  return (
    <main>
      <AdminNavBar PageChange={setCurrentPage} />
      {currentPage === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;