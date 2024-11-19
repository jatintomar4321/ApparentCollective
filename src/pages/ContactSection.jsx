'use client';

import React, { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    siteUrl: '',
    request: ''
  });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 20 * 1024 * 1024) { // 20MB limit
      setFile(file);
    } else {
      alert('File size must be less than 20MB');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData, file);
  };

  return (
    <section className="bg: white dark:bg-[#151515ff] text-white py-20 md:py-24 px-4 md:px-6 lg:px-10">
      <div className="flex pb-6 mx-auto md:pl-6 px-16 lg:pl-10 text-sm">
        <a href="#" className="text-[#a1a0a0] underline underline-offset-2">Home</a>
        <IoMdArrowDropright className="text-white w-5 h-5" />
        <a className="text-[#a1a0a0]">Services</a>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Column */}
          <div className=''>
            <h2 className="text-3xl md:text-4xl lg:text-[3.3rem] leading-snug md:leading-[3.3rem] font-normal mb-4 md:mb-6">
              Get Shopify Theme Customization Services
            </h2>
            <p className="text-[#FFFFFF99] text-base md:text-lg lg:text-[1.3rem] mb-6 md:mb-8">
              Need something customized with your Shopify theme? Custom pages and templates, custom checkout and cart, custom payment gateway integration, custom navigation, or search; simply reach out to us via email.
            </p>
            <div className="mt-6 md:mt-10 ">
              <img
                src="/service.png"
                alt="Shopify Theme Customization"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className='px-4 md:px-6 lg:px-8'>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-normal mb-4 md:mb-6">
              Let's Create Great <br /> Collaboration
            </h2>
            <p className="text-[#FFFFFF99] mb-6 md:mb-8 text-base md:text-lg">
              From minor customizations to building a full customized theme exclusive for your brand, we'll be happy to help. Fill in the form, and simply send us a message now.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#FFFFFF99] px-0 py-2 placeholder-[#FFFFFF99] focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#FFFFFF99] px-0 py-2 placeholder-[#FFFFFF99] focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#FFFFFF99] px-0 py-2 placeholder-[#FFFFFF99] focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="url"
                    name="siteUrl"
                    placeholder="Site URL"
                    value={formData.siteUrl}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#FFFFFF99] px-0 py-2 placeholder-[#FFFFFF99] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="request"
                  placeholder="Your Request"
                  value={formData.request}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg: white dark:bg-[#151515ff] rounded-lg border border-[#FFFFFF99] px-4 py-3 placeholder-[#FFFFFF99] focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FFFFFF99]">Add File</span>
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpeg,.png,.jpg,.pdf,.zip"
                  />
                </label>
                <p className="text-sm text-[#FFFFFF99]">
                  Allowed file formats: jpeg, png, jpg, pdf, and zip.
                  <br />
                  Maximum upload file size: 20MB
                </p>
              </div>

              <button
                type="submit"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
