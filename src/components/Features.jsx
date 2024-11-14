import React from 'react';

const FeaturedThemes = () => {
  return (
    <section className="bg-white border-b-[0.02rem] border-gray-500 dark:bg-[#151515ff] text-black dark:text-white py-32  md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-lg font-semibold text-gray-400 mb-4 sm:mb-0">FEATURED THEMES</h2>
          <a href="#" className="text-sm text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 flex items-center">
            Explore All Themes
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Content Section */}
        
        <div className="flex flex-col md:flex-row gap-5   items-start md:items-center">
          {/* Text Content */}
          <div className="md:w-1/2 lg:w-2/5 pt-10 md:pt-0">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">Barcelona</h3>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-6">
              Premium Shopify theme that includes unique customizable icons, lively slideshow sections, diverse hover effects, and other features.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm md:text-base font-medium rounded-full shadow-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
            >
              EXPLORE BARCELONA
              <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Image Content */}
          <div className="relative w-full md:w-1/2 lg:w-3/5">
            <img
              src="/hero-barcelona@2x.webp?height=600&width=700"
              alt="Barcelona Theme Desktop View"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            
          </div>
          
        </div>
        
        
      </div>
      
    </section>
  );
};

export default FeaturedThemes;
