import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 border-t border-[#FFFFFF1A] md:grid-cols-3 gap-8 px-6 sm:px-14 text-center">
          {/* Column 1 */}
          <div className="flex flex-col py-10 space-y-3 items-center justify-center">
            <img
              src="/segment-logo.svg"
              alt="Segment Logo"
              className="w-28 sm:w-32"
            />
            <p className="text-gray-400 text-xs sm:text-sm">
              High-end Shopify themes with advanced feature sets.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3 py-10 items-center justify-center border-t border-b border-[#FFFFFF1A] md:border-l md:border-r md:border-t-0 md:border-b-0">
            <img
              src="/Image.svg"
              alt="Apparent Collective Logo"
              className="w-32 sm:w-40"
            />
            <p className="text-gray-400 text-xs sm:text-sm px-4 sm:px-8">
              Premium Shopify themes with broader functionality.
            </p>
            <p className="mt-2 text-gray-300 italic text-sm">YOU ARE HERE</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col py-10 space-y-3 items-center justify-center">
            <img
              src="/noord-logo.svg"
              alt="Noord Logo"
              className="w-28 sm:w-32"
            />
            <p className="text-gray-400 text-xs sm:text-sm">
              Budget-friendly Shopify themes with all primary features for your store.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFFFFF1A] pt-6 pb-4 px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm">
          {/* Left Section (Hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-2">
            <img
              src="/Image.svg"
              alt="Apparent Collective Logo"
              className="w-24 sm:w-28"
            />
            <div className="text-gray-400 text-left">
              <p>
                <span className="text-gray-400">A part of </span>
                <span className="font-bold text-white">Ashstone Studios</span>
              </p>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex space-x-4 sm:space-x-8 mt-4 md:mt-0">
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

          {/* Right Section (Takes full space on small screens) */}
          <div className="mt-4 md:mt-0 text-gray-500 text-center md:text-right w-full md:w-auto">
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
