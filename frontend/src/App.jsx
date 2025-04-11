import { useState } from 'react'
import './App.css'
import { Signup } from './components/signup'
import { Login } from './components/login'
import {Routes,Route} from "react-router"
import { Dashboard } from './components/dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>   
      <Route path='/login' element={<Login/>}/> 
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
      
    </>
  )
}

export default App
