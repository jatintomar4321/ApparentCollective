import React from 'react'

export default function Home() {
  return (
    <section id="home" className="py-16 md:py-20 w-full flex justify-center flex-col  overflow-x-hidden min-h-max bg-gray-50 dark:bg-[#151515ff]">
      <div className="container ">
        <div className="max-w-3xl pl-36 mx-auto text-center">
        <div className="flex flex-col p-7 md:flex-row items-center justify-center gap-3 md:gap-3">
        <div className="relative pl-7 h-8 w-48">
          <img
            src="/hero-logo-1.svg"
            alt="Shopify Experts"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative pl-1 h-8 w-48">
          <img
            src="/hero-logo-2.svg"
            alt="Shopify Partners"
            fill
            className="object-contain"
          />
        </div>
      </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white text-center max-w-4xl leading-tight">
        Premium Shopify
        <br />
        Themes Redefined
        </h1>
          
        <div className="flex p-8  flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <button 
          className="bg-white text-black hover:bg-gray-100 rounded-full px-7 py-5 text-sm font-thin transition-all duration-300 ease-in-out group"
        >
          <span className="flex items-center">
            DISCOVER THEMES
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:scale-125" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </button>
        <button 
          className="text-white border-1 border-white hover:bg-white/10 rounded-full px-7 py-5 text-sm font-thin transition-all duration-300 ease-in-out group"
        >
          <span className="flex items-center">
            LEARN MORE
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:scale-125" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </button>
      </div>
        </div>
      </div>
      <div className="w-full  bg-cover ">
        <img 
          src="/hero1.webp" 
          alt="Decorative bottom image" 
          className=" object-contain"
          
        />
      </div>
      
    
      
      
    </section>
  )
}