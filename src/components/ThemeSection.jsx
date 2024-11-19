import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const themesData = [
  {
    id: 1,
    name: "Modern",
    brand: "Madrid",
    category: "Clothing",
    description: "Inspire your customers by illustrating a sophisticated lifestyle made possible through their purchases on your website.",
    image: "/10.webp",
    categoryTag: "Clothing",
    date: "2024-01-15",
    popularity: 95,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 2,
    name: "Heritage",
    brand: "Madrid",
    category: "Jewelry & Accessories",
    description: "Showcase heritage-rich craftsmanship and dedication to quality with a visually rich layout.",
    image: "/11.webp",
    categoryTag: "Jewelry & Accessories",
    date: "2024-01-20",
    popularity: 88,
     learnMoreLink: "/themes/heritage",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 3,
    name: "Organic",
    brand: "Barcelona",
    category: "Health & Beauty",
    description: "Highlight natural and eco-friendly products with a clean, fresh design that emphasizes sustainability.",
    image: "/12.webp",
    categoryTag: "Health & Beauty",
    date: "2024-02-01",
    popularity: 92,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 4,
    name: "Gourmet",
    brand: "Paris",
    category: "Food & Drinks",
    description: "Entice food enthusiasts with a luxurious design that showcases culinary delights and fine dining experiences.",
    image: "/11.webp",
    categoryTag: "Food & Drinks",
    date: "2024-02-10",
    popularity: 87,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 5,
    name: "Vinyl",
    brand: "London",
    category: "Books, Music & Video",
    description: "Create a nostalgic atmosphere for music lovers with a retro-inspired design perfect for vinyl collections.",
    image: "/12.webp",
    categoryTag: "Books, Music & Video",
    date: "2024-02-15",
    popularity: 85,
    learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 6,
    name: "Active",
    brand: "Sydney",
    category: "Sports & Recreation",
    description: "Motivate customers with a dynamic design that showcases sports equipment and activewear for all lifestyles.",
    image: "/12.webp",
    categoryTag: "Sports & Recreation",
    date: "2024-02-20",
    popularity: 89,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 7,
    name: "Zen",
    brand: "Kyoto",
    category: "Home & Décor",
    description: "Create a serene online space for home accessories and décor with this tranquil and minimalist design.",
    image: "/13.webp",
    categoryTag: "Home & Décor",
    date: "2024-02-25",
    popularity: 91,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 8,
    name: "Tech",
    brand: "Silicon Valley",
    category: "Electronics",
    description: "Showcase cutting-edge electronics with a sleek, modern design that emphasizes innovation and functionality.",
    image: "/10.webp",
    categoryTag: "Electronics",
    date: "2024-03-01",
    popularity: 94,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 9,
    name: "Nordic",
    brand: "Copenhagen",
    category: "Interior",
    description: "Bring Scandinavian simplicity to life with this clean, functional design perfect for interior products.",
    image: "/10.webp",
    categoryTag: "Interior",
    date: "2024-03-05",
    popularity: 90,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 10,
    name: "Canvas",
    brand: "New York",
    category: "Art",
    description: "Provide artists and art enthusiasts with a minimalist backdrop to showcase creative works and collections.",
    image: "/11.webp",
    mobileImage: "/placeholder.svg?height=400&width=200",
    categoryTag: "Art",
    date: "2024-03-10",
    popularity: 86,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 11,
    name: "Vintage",
    brand: "Milan",
    category: "Clothing",
    description: "Transport customers to a bygone era with a design that celebrates classic fashion and timeless style.",
    image: "/11.webp",
    mobileImage: "/placeholder.svg?height=400&width=200",
    categoryTag: "Clothing",
    date: "2024-03-15",
    popularity: 88,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 12,
    name: "Luxe",
    brand: "Dubai",
    category: "Jewelry & Accessories",
    description: "Exude opulence and exclusivity with a lavish design tailored for high-end jewelry and luxury accessories.",
    image: "/11.webp",
    mobileImage: "/placeholder.svg?height=400&width=200",
    categoryTag: "Jewelry & Accessories",
    date: "2024-03-20",
    popularity: 93,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 13,
    name: "Wellness",
    brand: "Bali",
    category: "Health & Beauty",
    description: "Promote a holistic lifestyle with a calming design that showcases wellness products and self-care essentials.",
    image: "/11.webp",
    mobileImage: "/placeholder.svg?height=400&width=200",
    categoryTag: "Health & Beauty",
    date: "2024-03-25",
    popularity: 87,
    learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 14,
    name: "Artisanal",
    brand: "Marrakech",
    category: "Food & Drinks",
    description: "Celebrate handcrafted delicacies and unique flavors with a design that brings artisanal foods to the forefront.",
    image: "/11.webp",
    mobileImage: "/placeholder.svg?height=400&width=200",
    categoryTag: "Food & Drinks",
    date: "2024-04-01",
    popularity: 89,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  },
  {
    id: 15,
    name: "Smart Home",
    brand: "Tokyo",
    category: "Electronics",
    description: "Showcase the future of living with a cutting-edge design for smart home devices and IoT products.",
    image: "/11.webp",
    mobileImage: "/placeholder.svg?height=400&width=200",
    categoryTag: "Electronics",
    date: "2024-04-05",
    popularity: 92,
     learnMoreLink: "/themes/modern",
    previewLink: "/themes/modern/preview"
  }
];

const categories = [
  "All Categories",
  "Health & Beauty",
  "Jewelry & Accessories",
  "Clothing",
  "Food & Drinks",
  "Books, Music & Video",
  "Sports & Recreation",
  "Home & Décor",
  "Electronics",
  "Interior",
  "Art",
];

export default function ThemeGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredAndSortedThemes = themesData
    .filter((theme) => {
      const matchesCategory = selectedCategory === "All Categories" || theme.category === selectedCategory;
      const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            theme.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "popularity":
        default:
          return b.popularity - a.popularity;
      }
    });

  return (
    <section className="bg-[#151515] min-h-screen">
      <div className="max-w-full mx-12 px-6 py-8">
        <div className="flex flex-col space-y-1">
          {/* Top Bar */}
          <div className="flex justify-between items-center">
            {/* Categories */}
            <div className="flex flex-wrap gap-[0.40rem]">
              {categories.slice(0, 5).map((category) => (
                <button
                  key={category}
                  className={`px-3 py-[0.38rem] rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "bg-[#1e1e1e] text-gray-300 hover:bg-[#2a2a2a]"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF99] h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search themes..."
                  className="pl-10 bg-[#1e1e1e] border-none text-white w-[200px] rounded-md py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-sm">Order by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-white"
                >
                  <option value="popularity">Popularity</option>
                  <option value="name">Name</option>
                  <option value="latest">Latest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Secondary Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.slice(5).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-[#1e1e1e] text-gray-300 hover:bg-[#2a2a2a]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {filteredAndSortedThemes.map((theme) => (
              <div
                key={theme.id}
                className="bg-[#272727] rounded-xl overflow-hidden p-6"
              >
                <div className="relative mb-6">
                  <img
                    src={theme.image}
                    alt={`${theme.name} Desktop Preview`}
                    className="w-full h-auto rounded-lg"
                  />
                
                </div>
                <div>
                  <div className="flex justify-between items-start mb-3 pb-2 border-b border-[#FFFFFF1A]">
                    <div>
                      <p className="text-[#FFFFFF99] text-sm mb-1">{theme.brand}</p>
                      <h3 className="text-2xl font-medium text-white">{theme.name}</h3>
                    </div>
                    <span className="px-3 py-1 bg-[#151515] text-gray-300 text-xs rounded-full">
                      {theme.categoryTag}
                    </span>
                  </div>
                  <p className="text-[#FFFFFF99] text-base mb-6 mr-16 leading-relaxed">{theme.description}</p>
                  <div className="flex gap-4">
              <Link
                to={theme.learnMoreLink}
                className="bg-white text-black px-10 py-4 rounded-3xl text-sm font-medium hover:bg-gray-100 transition-colors uppercase tracking-wide"
              >
                Learn More
              </Link>
              <Link
                to={theme.previewLink}
                className="border border-[#151515] bg-[#151515] text-white px-10 py-4 rounded-3xl text-sm font-medium hover:bg-[#252525] transition-colors uppercase tracking-wide"
              >
                Preview
              </Link>
            </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}