import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setVisible(false);
    // Optionally store preference in localStorage
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleReject = () => {
    setVisible(false);
    localStorage.setItem('cookiesAccepted', 'false');
  };

  if (!visible || localStorage.getItem('cookiesAccepted')) return null;

  return (
    <div className="fixed bottom-0 end-0 z-50 sm:max-w-sm w-full mx-auto p-4">
      <div className="p-4 rounded-xl bg-gradient-to-br from-violet-700 to-sky-500 shadow-lg text-white">
        <p className="text-sm">
          This website uses cookies to enhance your browsing experience.
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-white/80 hover:text-white"
        >
          Learn more
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
        <div className="mt-4 flex justify-between gap-x-2">
          <button
            onClick={handleAccept}
            className="py-2 px-4 text-sm font-medium rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/80"
          >
            Accept all
          </button>
          <button
            onClick={handleReject}
            className="py-2 px-4 text-sm font-medium rounded-full bg-transparent border border-transparent text-white hover:text-white/70"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
