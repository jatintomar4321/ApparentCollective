import React from 'react';

const Footer = () => {
  return (
    <footer className="dark:bg-[#151515] bg-[#F1F4F3]">
      <div className="w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 border-t-[1px] border-[#E4E4E4] dark:border-[#FFFFFF1A]  md:grid-cols-3 gap-8 px-6 sm:px-14 text-center">
          {/* Column 1 */}
          <div className="flex flex-col py-10 space-y-3 items-center ml-28 justify-center">
            <img
              src="/segment-logo.svg"
              alt="Segment Logo"
              className="w-28 sm:w-32"
            />
            <p className="text-[#1E1E1E99] text-xs sm:text-sm">
              High-end Shopify themes with advanced feature sets.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3 pb-10 pt-14 px-16 items-center justify-center border-t border-b border-[#E4E4E4] dark:border-[#FFFFFF1A]  md:border-l md:border-r md:border-t-0 md:border-b-0">
            <img
              src="/Image.svg"
              alt="Apparent Collective Logo"
              className="w-32 sm:w-[8rem]"
            />
            <p className="text-[#1E1E1E99] text-xs sm:text-sm px-4 sm:px-8">
              Premium Shopify themes with broader functionality.
            </p>
            <p className="mt-2 dark:text-gray-50 text-black italic text-sm">YOU ARE HERE</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col py-10 space-y-3 items-center mr-28 justify-center">
            <img
              src="/noord-logo.svg"
              alt="Noord Logo"
              className="w-28 sm:w-32"
            />
            <p className="text-[#1E1E1E99] text-xs sm:text-sm">
              Budget-friendly Shopify themes with all primary features for your store.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E4E4E4] dark:border-[#FFFFFF1A]  pt-6 pb-4 px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm">
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
            <span className="text-[#1E1E1E99]">|</span>{' '}
            <span>Copyright © All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
