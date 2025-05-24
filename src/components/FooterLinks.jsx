import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const linkSections = [
    {
      title: "Explore Jobs",
      links: [
        { name: "Latest Sarkari Jobs", href: "/latest-jobs" },
        { name: "Upcoming Exams", href: "/upcoming-exams" },
        { name: "Admit Cards", href: "/admit-cards" },
        { name: "Results", href: "/results" },
        { name: "Notifications", href: "/notifications" },
      ],
    },
    {
      title: "Exam Resources",
      links: [
        { name: "Syllabus", href: "/syllabus" },
        { name: "Previous Year Papers", href: "/previous-papers" },
        { name: "Preparation Tips", href: "/preparation-tips" },
        { name: "Interview Tips", href: "/interview-tips" },
        { name: "How to Apply", href: "/how-to-apply" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Refund Policy", href: "/refund-policy" },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-200 px-6 md:px-16 lg:px-24 xl:px-32 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-yellow-400">
            NokariSarkari
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted source for latest government jobs, exam alerts, admit cards, and results across India.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+911234567890" className="hover:text-yellow-400">
                +91 12345 67890
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@sarkarijobportal.com" className="hover:text-yellow-400">
                info@NokariSarkari.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> 123 Govt Jobs Street, New Delhi, India
            </p>
          </div>
        </div>

        {/* Link Sections */}
        {linkSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-5 text-gray-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-600 transition"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-600 transition"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="mt-10 text-center">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition"
        >
          <FaArrowUp />
          Top
        </button>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NokariSarkari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
