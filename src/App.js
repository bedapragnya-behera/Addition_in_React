import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Addition from './component/Addition/Addition'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/career' element={<Career/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     <Addition/>
     </BrowserRouter>
    </>
  )
}

export default App
