import React from 'react'
import Home from '../components/Home'
import Features from '../components/Features'
import Advantages from '../components/Advantages'
import SupportPage from '../components/SupportPage'
import CommercePage from '../components/CommercePage'

const Landing = () => {
  return (
    <div>
         <main className="w-full overflow-x-hidden">
    <Home />
    <Features />
    <Advantages />
    <SupportPage/>
    <CommercePage/>
  </main>
    </div>
  )
}

export default Landing