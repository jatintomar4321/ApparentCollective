import React from 'react';

function SupportPage() {
  return (
    <div className="w-full h-full bg-[#151515ff] pt-32 text-white flex items-center justify-center pb-32 px-10 ">
      <div className="max-w-screen px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-32">
        
        {/* Left Section */}
        <div className=" flex flex-col justify-between ">
          <div className='space-y-3'>
          <h2 className="uppercase text-gray-400">Support</h2>
          <h1 className="text-3xl md:text-[2.5rem]  font-semibold">
            Collective Efforts Bring <br></br> Out the Best
          </h1>
          </div>
          <div className='space-y-5'>
          <p className="text-gray-300 leading-relaxed text-[#FFFFFF99] text-[1.1rem]">
            With a collective commitment to providing a high-quality user experience, you can trust us to be there whenever you need us. Our dedicated support team works around the clock to ensure that your Shopify store runs smoothly and any issues are resolved quickly.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-200 w-fit">
            VISIT HELP CENTER
          </button>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="rounded-lg overflow-hidden flex justify-center items-center">
          <img 
            src="/help1.webp" 
            alt="Help Center Screenshot" 
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </div>
  );
}

export default SupportPage;