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
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoDark.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between py-4">
        <img
          src={scrolled ? logoUrlScrolled : logoUrl}
          alt="Logo"
          className="h-8 sm:h-10"
        />
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="text-gray-800 hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden">
          <FaSearch className="text-xl text-gray-800" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
