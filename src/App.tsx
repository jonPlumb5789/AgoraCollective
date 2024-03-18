import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar/NavBar'
import SignIn from './components/SignIn/SignIn'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'
import BrainSpace from './components/BrainSpace/BrainSpace'
import Butler from './components/AiAssisstant/Butler'

function App() {

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/butler" element={<Butler />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/brainspace" element={<BrainSpace />} />

        </Routes>
      </div>
    </>
  )
}

export default App
