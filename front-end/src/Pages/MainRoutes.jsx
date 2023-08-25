
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import Login from './Login'
import AddNotes from './AddNotes'
import Signup from './SignUp'
const MainRoutes = () => {
  return (
      <Routes>
           <Route path="/"  element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/addnotes' element={<AddNotes/>}/>
            <Route path='/signup' element={<Signup/>}/>
      </Routes>
  )
}

export default MainRoutes