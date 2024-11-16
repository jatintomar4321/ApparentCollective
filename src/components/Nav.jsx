import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    return savedDarkMode;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-background pt-10 px-12 text-text dark:bg-[#151515ff] Background dark:text-darkText shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to='/' className="text-xl leading-tight uppercase font-bold">
              Apparent <br /> collective
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            {/* Mobile Menu Button */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 dark:text-gray-300 focus:outline-none"
                aria-label="Open mobile menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Dark Mode Toggle Button (Desktop) */}
            <div className="hidden lg:flex border-r-[0.01rem] border-gray-500 items-center">
              <button
                onClick={toggleDarkMode}
                className="pr-4 rounded-md text-text dark:text-darkText hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex gap-6 px-7">
              <a href="#" className="relative text-sm hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:underline-link">Theme</a>
              <Link to='/contact' className="relative text-sm hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:underline-link">Services</Link>
              <Link to='/help' className="relative text-sm hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:underline-link">Help Center</Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col space-y-4 mt-4">
            <a href="#" className="text-lg hover:text-gray-900 dark:hover:text-white">Theme</a>
            <a href="#" className="text-lg hover:text-gray-900 dark:hover:text-white">Services</a>
            <a href="#" className="text-lg hover:text-gray-900 dark:hover:text-white">Help Center</a>
            
            {/* Dark Mode Toggle Button (Mobile) */}
            <button
              onClick={toggleDarkMode}
              className="mt-4 flex items-center justify-center text-text dark:text-darkText hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
