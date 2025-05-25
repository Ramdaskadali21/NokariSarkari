import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Latest Jobs", path: "/latest-jobs" },
  { name: "Admit Cards", path: "/admit-cards" },
  { name: "Results", path: "/results" },
  { name: "Exam Calendar", path: "/exam-calendar" },
  { name: "Preparation Tips", path: "/preparation-tips" },
  { name: "About Us", path: "/about" },
];

const logoUrl =
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg";
const logoUrlScrolled =
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoDark.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredLinks([]);
    } else {
      const filtered = navLinks.filter((link) =>
        link.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLinks(filtered);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredLinks([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setSidebarOpen(false);
    setSearchTerm("");
  };

  const handleSearchSelect = () => {
    setSearchTerm("");
    setFilteredLinks([]);
  };

  const iPadLinks = navLinks.filter(link =>
    ["Home", "Latest Jobs", "Admit Cards", "Results"].includes(link.name)
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            scrolled
  ?             "bg-gradient-to-r from-[#10d8df] to-[#03183b] text-white"
  :              "bg-gradient-to-r from-[#03183b] to-[#10d8df] text-white"

 


        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a href="/" className="flex-shrink-0">
            <img
              src={scrolled ? logoUrlScrolled : logoUrl}
              alt="Logo"
              className="h-8 sm:h-10"
            />
          </a>

          <div className="hidden md:flex lg:hidden items-center gap-4">
            <ul className="flex space-x-4">
              {iPadLinks.map(({ name, path }) => (
                <li key={name}>
                  <a
                    href={path}
                    onClick={handleNavClick}
                    className={`text-sm font-medium ${
                      scrolled ? "text-white" : "text-white"
                    } hover:text-yellow-500 transition`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative w-40">
              <input
                ref={searchRef}
                type="text"
                className={`w-full pl-8 pr-2 py-1.5 rounded-md border text-sm ${
                  scrolled
                    ? "border-gray-300 bg-white text-gray-900"
                    : "border-gray-600 bg-gray-800 text-white"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-sm ${
                  scrolled ? "text-gray-400" : "text-gray-300"
                }`}
              />
              {filteredLinks.length > 0 && (
                <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {filteredLinks.map(({ name, path }) => (
                    <li key={name}>
                      <a
                        href={path}
                        onClick={handleSearchSelect}
                        className="block px-4 py-2 hover:bg-blue-100 text-gray-800"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex space-x-6">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <a
                    href={path}
                    onClick={handleNavClick}
                    className={`text-sm font-medium ${
                      scrolled ? "text-white" : "text-white"
                    } hover:text-yellow-500 transition`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative w-64">
              <input
                ref={searchRef}
                type="text"
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${
                  scrolled
                    ? "border-gray-300 bg-white text-gray-900"
                    : "border-gray-600 bg-gray-800 text-white"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  scrolled ? "text-gray-400" : "text-gray-300"
                }`}
              />
              {filteredLinks.length > 0 && (
                <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {filteredLinks.map(({ name, path }) => (
                    <li key={name}>
                      <a
                        href={path}
                        onClick={handleSearchSelect}
                        className="block px-4 py-2 hover:bg-blue-100 text-gray-800"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="focus:outline-none text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {filteredLinks.length > 0 && (
                  <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-50">
                    {filteredLinks.map(({ name, path }) => (
                      <li key={name}>
                        <a
                          href={path}
                          onClick={() => {
                            handleNavClick();
                            handleSearchSelect();
                          }}
                          className="block px-4 py-2 hover:bg-blue-100 text-gray-800"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <nav>
                <ul className="space-y-4">
                  {navLinks.map(({ name, path }) => (
                    <li key={name}>
                      <a
                        href={path}
                        onClick={handleNavClick}
                        className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to offset fixed navbar height */}
      <div className="h-16 md:h-16"></div>
    </>
  );
};

export default Navbar;
