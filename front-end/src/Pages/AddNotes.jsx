import React, { useState } from 'react';
import '../Styles/AddNotes.css'
import { useToast } from '@chakra-ui/react'
const AddNotes = () => {
  const toast = useToast()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
      timestamp: new Date().toLocaleString() 
    };
     fetch('http://localhost:8080/notes/add',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        "Authorization":`${localStorage.getItem('token')}`
      },
      body:JSON.stringify(newNote)
     }).then(res=>res.json())
     .then((res)=>{
      console.log(res)
      toast({
        position: 'top',
        title: 'Notes added',
        description: "Notes has been added Successfull",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setContent('');
      setTitle('');
     })
     .catch((err)=>console.log(err))
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
    </div>
  );
};

export default AddNotes;
