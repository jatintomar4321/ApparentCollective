import React from 'react';

const ExploreThemes = () => {
  return (
    <section
      className="bg-[#151515] text-white pt-24 pb-8 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-gray-400 text-sm mb-4">
          <a href="/" className="hover:text-white">Home</a> <span>›</span>{' '}
          <span>Themes</span>
        </nav>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-md mb-4">
          Explore Themes
        </h1>

        {/* Subtitle */}
        <p className="text-white text-[1.37rem] leading-normal">
          Feature-enriched, fast, action-packed, minimalistic, and aesthetic.
          <br />
          Truly a powerhouse with exclusive features that focus on helping
          <br />
          you sell more, achieve more, and everything-more.
        </p>
      </div>
    </section>
  );
};

export default ExploreThemes;
