import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const Help = () => {
  return (
    <section className="bg-[#151515] border-b-[0.01rem] border-gray-500  text-white py-20 px-5 sm:px-24 md:px-16 ">
      <div className="max-w-7xl mx-auto">
      <div className="flex pb-6 text-sm">
        <a href="#" className="text-[#a1a0a0] underline underline-offset-2">Home</a>
        <IoMdArrowDropright className="text-white w-5 h-5" />
        <a className="text-[#a1a0a0]">Services</a>
      </div>
       <div className='w-full '>
       <h1 className="text-5xl md:text-5xl font-md mb-6">Help Center</h1>
        <p className="text-[1.35rem] text-gray-300">
          Welcome to the Help center. Find the detailed documentation for <br></br> every theme below. 
          If you still can’t find it or have additional queries, <br></br>our support team got your back.
        </p>
       </div>
      </div>
    </section>
  );
};

export default Help;
