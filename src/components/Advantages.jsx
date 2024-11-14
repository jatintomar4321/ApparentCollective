import React from 'react';
import { FiDollarSign, FiLayers, FiGlobe, FiPhone } from 'react-icons/fi'; // Replace with your preferred icons

const WhatSetsUsApart = () => {
  return (
    <section className="bg-[#151515]  text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl  ">
        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Advantages</h2>
        <h3 className="text-4xl font-bold mb-12">What Sets Us Apart?</h3>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <FiDollarSign className="text-5xl text-gray-300" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Design That Sells Anything</h4>
              <p className="text-gray-400">
                Elevate your brand with our intuitive and powerful Shopify themes catering to businesses of all sizes and niches.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <FiGlobe className="text-6xl text-gray-300" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Cross-Browser Compatible</h4>
              <p className="text-gray-400">
                Designed to work flawlessly on all modern browsers, our themes ensure your website looks stunning and functions smoothly on any screen.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <FiLayers className="text-6xl text-gray-300" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Boundless Customization</h4>
              <p className="text-gray-400">
                Shopify themes designed with flexible options and intuitive controls to allow you to build a unique and personalized online store that truly represents your brand.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <FiPhone className="text-5xl text-gray-300" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Round-the-Clock Support</h4>
              <p className="text-gray-400">
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
