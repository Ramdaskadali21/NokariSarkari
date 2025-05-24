import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Latest Jobs", path: "/latest-jobs" },
  { name: "Admit Cards", path: "/admit-cards" },
  { name: "Results", path: "/results" },
  { name: "Exam Calendar", path: "/exam-calendar" },
  { name: "Preparation Tips", path: "/preparation-tips" },
  { name: "About Us", path: "/about" },
];

// White logo for dark background
const logoUrl =
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg";

// Dark logo for light background (on scroll)
const logoUrlScrolled =
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoBlack.svg";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => (
  <>
    <div
      className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      aria-label="Sidebar"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <a href="/">
          <img src={logoUrlScrolled} alt="logo" className="h-8" />
        </a>
        <button
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
          className="text-gray-700 hover:text-purple-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-3 text-gray-700">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="block py-2 px-3 rounded hover:bg-purple-100 text-purple-800 font-semibold"
            onClick={() => setSidebarOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
    {sidebarOpen && (
      <div
        onClick={() => setSidebarOpen(false)}
        className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
        aria-hidden="true"
      />
    )}
  </>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-gradient-to-r from-purple-800 to-purple-600 py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left: Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src={isScrolled ? logoUrlScrolled : logoUrl}
              alt="logo"
              className="h-8"
            />
            <span
              className={`font-bold text-lg ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Home
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`font-semibold ${
                  isScrolled ? "text-gray-800 hover:text-purple-700" : "text-white hover:text-purple-300"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search box with icon inside input */}
          <form onSubmit={handleSearchSubmit} className="relative w-64 hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                isScrolled ? "text-gray-800 bg-white placeholder-gray-500" : "text-white bg-purple-700 placeholder-purple-300"
              }`}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-800 focus:outline-none"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </form>

          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className={`lg:hidden focus:outline-none ml-4 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            aria-label="Open sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
