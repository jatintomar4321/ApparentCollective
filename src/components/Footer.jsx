import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#151515' }} className="text-white">
      <div className="w-full ">
    <div className="grid grid-cols-1 border-t border-[#FFFFFF1A] md:grid-cols-3 gap-8  px-14 text-center">
        {/* Column 1 */}
        <div className="flex flex-col py-16 mx-20 space-y-3 items-center justify-center">
            <img
            src="/segment-logo.svg"
            alt="Segment Logo"
            className=" w-32"
            />
            <p className="text-gray-400 text-sm">
            High-end Shopify themes with advanced feature sets.
            </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col border-l border-[#FFFFFF1A] border-r  space-y-3  py-10 items-center justify-center">
            <img
            src="/Image.svg"
            alt="Apparent Collective Logo"
            className=" w-40"
            />
            <p className="text-gray-400 mx-24 text-sm">
            Premium Shopify themes with broader functionality.
            </p>
            <p className="mt-2 text-gray-300 italic">YOU ARE HERE</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col mx-20 space-y-3  items-center py-16 justify-center">
            <img
            src="/noord-logo.svg"
            alt="Noord Logo"
            className=" w-32"
            />
            <p className="text-gray-400 text-sm">
            Budget-friendly Shopify themes with all primary features for your store.
            </p>
        </div>
        </div>


        <div className=" border-t px-10 border-[#FFFFFF1A] pt-3 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Left Section */}
          <div className="text-gray-500 flex relative space-x-2 text-center md:text-left">
          <img
              src="/Image.svg"
              alt="Apparent Collective Logo"
              className="mx-auto mb-4 w-40"
            />
            <span className="text-gray-400 text-[0.7rem] mt-[1.9rem]">A part of </span>
            <span className="font-bold text-white text-[0.7rem] mt-[1.9rem]">Ashstone Studios</span>
          </div>

          {/* Center Links */}
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:underline">
              Themes
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contacts
            </a>
          </div>

          {/* Right Section */}
          <div className="mt-6 md:mt-0 text-gray-500 text-center md:text-right">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>{' '}
            <span className="text-gray-400">|</span>{' '}
            <span>Copyright © All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
