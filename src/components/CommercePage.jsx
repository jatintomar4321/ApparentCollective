import React from 'react';

function CommercePage() {
  return (
    <div className=" dark:bg-[#272727] bg-white text:  dark:text-white flex items-center justify-center pt-24 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 g">
        
        {/* Left Section */}
        <div className="flex flex-col justify-between px-16">
         <div className='space-y-8'>
         <h1 className="text-3xl md:text-6xl font-medium  leading-tighter">
            Create the Ultimate <br></br> Commerce Experience <br></br> for Your Shopify Store
          </h1>
          <p className="dark:text-[#FFFFFF99] text-[#1E1E1E99] text-[1.1rem] leading-relaxed">
            Immerse in a transformative e-commerce journey and drive <br></br> unparalleled growth - secure your powerful Shopify theme <br></br> today.
          </p>
         </div>
          <div className='py-20'>
          <button className="dark:bg-white bg-[#1E1E1E] text-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-200 w-fit">
            VIEW THEMES
          </button>
        </div>
          </div>
        
        {/* Right Section */}
        <div className="rounded-lg overflow-hidden flex justify-end ">
          <img 
            src="/commerce.webp" 
            alt="Shopify Theme Preview" 
            className="w-full h-full object-contain"
          />
        </div>
        
      </div>
    </div>
  );
}

export default CommercePage;
