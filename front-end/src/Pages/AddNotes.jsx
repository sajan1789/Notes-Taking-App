import React, { useState } from 'react';
import '../Styles/AddNotes.css'
const AddNotes = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
      timestamp: new Date().toLocaleString() // Get the current timestamp
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="notes-container">
      <form className="notes-form" onSubmit={handleAddNote}>
        <h2>Create a Note</h2>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Add Note
        </button>
      </form>

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
  );
};

export default AddNotes;
