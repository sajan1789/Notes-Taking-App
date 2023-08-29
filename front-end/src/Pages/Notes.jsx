import React from "react";
import { useState, useEffect } from "react";
import "../Styles/AddNotes.css";
import NoNotes from "./NoNotes";
import { useToast } from "@chakra-ui/react";
const Notes = () => {
  const toast=useToast()
  const [notes, setNotes] = useState([]);
  console.log(notes);
  const getNotes = () => {
    fetch("http://localhost:8080/notes", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setNotes(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getNotes();
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    }).then((res )=> res.json())
     .then((res)=>{
      console.log(res)
      getNotes()
      toast({
        position: 'top',
        title: 'Notes deleted successfull',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      
     })
     .catch((err)=>{
      console.log(err)
     })
  };

  return (
    <div className="notes-container">
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div key={index} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <p className="timestamp">Created on: {note.timestamp}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <NoNotes />
        )}
      </div>
    </div>
  );
};

export default Notes;
