import React from 'react'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import ContactSection from './pages/ContactSection'
import { Routes, Route } from 'react-router-dom'
import HelpCenter from './pages/HelpCenter'
import Footer from './components/Footer'
import Themes from './pages/Themes'

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">

  <Nav />
  <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path="/contact" element={<ContactSection />}/>
        <Route path="/Help" element={<HelpCenter />}/>
        <Route path="/themes" element={<Themes />}/>


        {/* Add other routes here */}
      </Routes>
  
  <Footer></Footer>

</div>
  )
}