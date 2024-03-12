import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar/NavBar'
import SignIn from './components/SignIn/SignIn'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> // Add the 'Home' component
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
