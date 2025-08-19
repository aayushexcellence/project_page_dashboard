import { useState } from "react";
import NoteInput from "../components/projects/Notes/Notesinput";
import NoteCard from "../components/projects/Notes/Notescard";
import PageContainer from "../components/layout/PageContainer";

const NotesPage = () => {
  const [notes, setNotes] = useState([
    {
      title: "Digital Marketing",
      author: "John Clever",
      role: "Project Manager",
      company: "Mesh Square",
      content: "Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately"
    },
    {
      title: "Digital Marketing",
      author: "John Clever",
      role: "Project Manager",
      company: "Mesh Square",
      content: "Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately"
    },
    {
      title: "Digital Marketing",
      author: "John Clever",
      role: "Project Manager",
      company: "Mesh Square",
      content: "Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately"
    }
  ]);

  const handleAddNote = (text) => {
    setNotes([...notes, {
      title: "Digital Marketing",
      author: "John Clever",
      role: "Project Manager",
      company: "Mesh Square",
      content: text
    }]);
  };

  return (
    <PageContainer>
      <div className="flex gap-6">
        {/* Left side - Notes Input */}
        <div className="w-1/2">
          <NoteInput onSubmit={handleAddNote} />
        </div>
        
        {/* Right side - Notes Cards */}
        <div className="w-1/2 space-y-4">
          {notes.map((note, i) => (
            <NoteCard key={i} {...note} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default NotesPage;