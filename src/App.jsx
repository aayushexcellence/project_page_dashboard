import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";       
import TopNav from "./components/layout/TopNav";       
import Header from "./components/layout/Header";      

import NotesPage from "./pages/NotesPage";
import TaskPage from "./pages/TaskPage";

function LayoutWrapper() {
  const location = useLocation();
  const tabs = ["Overview", "Details", "Task", "Milestones", "Notes"];

  const activeTab =
    location.pathname.includes("tasks") ? "Task" :
    location.pathname.includes("notes") ? "Notes" :
    "Overview";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <TopNav />
      <div className="flex-1">
        <Header tabs={tabs} activeTab={activeTab} />
        <Routes>
          <Route path="/" element={<Navigate to="/projects/notes" />} />
          <Route path="/projects/notes" element={<NotesPage />} />
          <Route path="/projects/tasks" element={<TaskPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
