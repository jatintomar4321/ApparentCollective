import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Features from './components/Features'
import Advantages from './components/Advantages'
export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
  <Nav />
  <main className="w-full overflow-x-hidden">
    <Home />
    {/* Add other sections here */}
    <Features />
    <Advantages />
  </main>
</div>
  )
}