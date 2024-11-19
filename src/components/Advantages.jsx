import React from 'react';
import { FiDollarSign, FiLayers, FiGlobe, FiPhone } from 'react-icons/fi'; // Replace with your preferred icons

const WhatSetsUsApart = () => {
  return (
    <section className="dark:bg-[#151515] bg-[#F1F4F3]    border-b-[0.02rem] border-gray-500 w-full min-h-screen flex flex-col justify-center text-white py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl  ">
        <h2 className="text-sm font-semibold text-gray-500  uppercase mb-4">Advantages</h2>
        <h3 className="text-5xl text-[#292929] dark:text-white font-medium mb-12">What Sets Us Apart?</h3>
        
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <FiDollarSign className="text-5xl text-[#292929] dark:text-gray-300" />
            <div>
              <h4 className="text-[1.5rem] font-semibold text-[#292929] dark:text-gray-300 mb-1">Design That Sells Anything</h4>
              <p className="dark:text-[#FFFFFF99] text-[#1E1E1E99] font-normal  text-lg">
                Elevate your brand with our intuitive and powerful Shopify themes catering to businesses of all sizes and niches.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <FiGlobe className="text-6xl text-[#292929] dark:text-gray-300 " />
            <div>
              <h4 className="text-[1.5rem] font-semibold text-[#292929] dark:text-gray-300 mb-1">Cross-Browser Compatible</h4>
              <p className="dark:text-[#FFFFFF99] text-[#1E1E1E99] font-normal text-lg">
                Designed to work flawlessly on all modern browsers, our themes ensure your website looks stunning and functions smoothly on any screen.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <FiLayers className="text-6xl text-[#292929] dark:text-gray-300" />
            <div>
              <h4 className="text-[1.5rem] font-semibold text-[#292929] dark:text-gray-300 mb-1">Boundless Customization</h4>
              <p className="dark:text-[#FFFFFF99] text-[#1E1E1E99] font-normal text-lg">
                Shopify themes designed with flexible options and intuitive controls to allow you to build a unique and personalized online store that truly represents your brand.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <FiPhone className="text-5xl text-[#292929] dark:text-gray-300" />
            <div>
              <h4 className="text-[1.5rem] font-semibold text-[#292929] dark:text-gray-300 mb-1">Round-the-Clock Support</h4>
              <p className="dark:text-[#FFFFFF99] text-[#1E1E1E99] font-normal text-lg">
                Enjoy peace of mind knowing you have expert support just a phone call or message away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
