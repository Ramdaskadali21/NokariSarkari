import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/" },
  { name: "Contact", path: "/" },
  { name: "About", path: "/" },
];

// Accept onMenuClick and isMenuOpen as props
const Navbar = ({ onMenuClick, isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Remove local isMenuOpen state
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "py-6"
        }`}
        style={{
          background: isScrolled
            ? "white"
            : "linear-gradient(90deg, #5B2C6F 0%, #8E44AD 100%)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"
              alt="logo"
              className={`h-9 transition-all duration-300 ${
                isScrolled ? "invert" : ""
              }`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-semibold">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className={`relative transition-colors duration-300 ${
                  isScrolled
                    ? "text-purple-700 hover:text-purple-900"
                    : "text-gray-200 hover:text-pink-300"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <button
              className={`px-5 py-1 rounded-full font-light border-2 transition-colors duration-300 ${
                isScrolled
                  ? "border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white"
                  : "border-gray-200 text-gray-200 hover:bg-pink-300 hover:text-purple-900"
              }`}
            >
              New Launch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={onMenuClick}  // Use passed handler instead of local setState
              aria-label="Toggle menu"
              className={`focus:outline-none ${
                isScrolled ? "text-purple-700" : "text-gray-200"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-purple-700 flex flex-col items-center justify-center gap-6 font-semibold text-lg transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-5 right-5 text-purple-700"
            onClick={() => setIsMenuOpen(false)}  // Use passed setter
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}  // Close menu on link click
              className="hover:text-pink-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="border border-purple-700 px-6 py-1 rounded-full font-light cursor-pointer hover:bg-purple-700 hover:text-white transition-colors duration-300">
            New Launch
          </button>
        </div>
      </nav>

      {/* Padding so content doesn't go under navbar */}
      <div className={`${isScrolled ? "pt-16" : "pt-24"}`} />
    </>
  );
};

export default Navbar;
