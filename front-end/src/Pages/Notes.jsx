import React from 'react'
import { useState,useEffect } from 'react'
import '../Styles/AddNotes.css'
const Notes = () => {
    const [notes, setNotes] = useState([]);
    console.log(notes)
    const getNotes=()=>{
        fetch('http://localhost:8080/notes',{
            headers:{
                "Authorization":`${localStorage.getItem('token')}`
            }
        }).then(res=>res.json())
        .then((res)=>{
          setNotes(res)
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
       getNotes()
    },[])
  return (
    <div className="notes-container">
        <div className="notes-list">
    {notes.map((note, index) => (
      <div key={index} className="note">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p className="timestamp">Created on: {note.timestamp}</p>
      </div>
    ))}
  </div>
    </div>
    
  )
}

export default Notes