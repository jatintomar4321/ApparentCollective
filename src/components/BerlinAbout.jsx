import React from "react";

const BerlinAbout = () => {
  return (
    <div className="min-h-screen bg-[#F1F4F3]  dark:bg-[#151515ff] text-black dark:text-white px-6 py-40">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-gray-400 mb-4">ABOUT BERLIN</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h1 className="text-[1.87rem] md:text-[1.87rem] font-medium leading-tight">
              Introducing Berlin, a powerful Shopify theme{" "}
              <span className="text-gray-400 text-[1.87rem]">
                that combines a sleek dark mode option, an extensive range of
                sections, and an array of features designed to craft a visually
                stunning and functional shopping experience like never before.
              </span>
            </h1>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-800 ">
                <span className="text-gray-400">Ideal Catalog-Size</span>
                <span className="text-white">Small / Medium</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 ">
                <span className="text-gray-400">Ideal Merchant</span>
                <span className="text-white">New Merchants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="p-4">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Collection Sections Preview"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h2 className="text-2xl font-medium leading-tight">
                Huge Collection of
                <br />
                Exceptional Sections
              </h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="p-4">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Features Preview"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h2 className="text-2xl font-medium leading-tight">
                Supercharged with
                <br />
                Ultimate Features
              </h2>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="p-4">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Setup Preview"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h2 className="text-2xl font-medium leading-tight">
                Simple
                <br />
                & Quick Setup
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerlinAbout;
