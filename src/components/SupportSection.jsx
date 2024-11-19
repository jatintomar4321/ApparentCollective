import { useState } from 'react';

export default function SupportSection() {
  const [showForm, setShowForm] = useState(false)
  const [theme, setTheme] = useState("")
    return (
      <div className="min-h-screen bg-white dark:bg-[#151515ff] text-white box-border pb-36 pt-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-medium tracking-tight">Support</h1>
            <p className="text-lg text-gray-400 max-w-md">
              Our friendly support team is always here to answer your questions. Available 24/7 – during working days only.
            </p>
          </div>
  
          <div className="bg-[#272727] rounded-xl py-10 px-24 space-y-8">
            
            <h2 className="text-2xl font-medium">Item Support Includes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 mr-28">
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300 text-lg">Answering questions about how to use the item</p>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300 text-lg">Answering technical questions about the item</p>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-300 text-lg">Help with defects in the item</p>
                </div>
              </div>
  
              <div className="space-y-6 mr-40">
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-300 text-lg">Theme customization and requests that require or involve custom coding</p>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-300 text-lg">Installation of the item</p>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-300 text-lg">Hosting, server environment, or software</p>
                </div>
              </div>
            </div>
  
            <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 font-medium transition-colors duration-200"
          >
            SUBMIT TICKET
          </button>
          {showForm && (
            <div className="space-y-8 pt-8 border-t mr-36 border-zinc-800">
              <div className="space-y-4">
                <h2 className="text-3xl font-medium">Submit Ticket</h2>
                <p className="text-gray-400">Estimated wait time <span className="text-white">2+ business days</span></p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-zinc-700 pb-2 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full bg-transparent border-b border-zinc-700 pb-2 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-transparent border-b border-zinc-700 pb-2 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="relative">
                      <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="w-full bg-transparent border-b border-zinc-700 pb-2 focus:outline-none focus:border-white transition-colors appearance-none"
                      >
                        <option value="" disabled>Theme</option>
                        <option value="theme1">Theme 1</option>
                        <option value="theme2">Theme 2</option>
                      </select>
                      <svg 
                        className="absolute right-2 top-2 w-4 h-4 pointer-events-none"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <input
                      type="url"
                      placeholder="Site URL"
                      className="w-full bg-transparent border-b border-zinc-700 pb-2 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <textarea
                    placeholder="Your Request"
                    rows={6}
                    className="w-full bg-transparent border rounded-lg border-zinc-700 p-4 focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <button type="button" className="text-white underline">Add File</button>
                  <p className="text-sm text-gray-400">
                    Allowed file formats: jpeg, png, jpg, pdf and zip.<br />
                    Maximum upload file size: 20MB
                  </p>
                </div>

                <button 
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 font-medium transition-colors duration-200"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }