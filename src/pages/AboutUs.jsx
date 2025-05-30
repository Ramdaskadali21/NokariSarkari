import React from 'react';

const AboutUs = () => {
  return (
    <div className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 shadow-lg max-w-2xl mx-auto mt-10">
      {/* Profile */}
      <div className="flex items-center gap-x-4">
        <div className="shrink-0">
          <img
            className="size-20 rounded-full border-2 border-blue-500"
            src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
            alt="Ramdas"
          />
        </div>

        <div className="grow">
          <h1 className="text-xl font-semibold text-white">Ramdas (Admin)</h1>
          <p className="text-sm text-gray-400">Managing NokariSarkari Portal</p>
        </div>
      </div>

      {/* About */}
      <div className="mt-6 space-y-3 text-sm text-gray-300">
        <p>
          I’m Ramdas, the admin of NokariSarkari — responsible for posting the latest government job updates, admit cards, results, and notifications. I aim to make government job info accessible, accurate, and fast for all job seekers in India.
        </p>
        <p>
          This portal is crafted using MERN Stack to provide a robust backend and responsive frontend.
        </p>

        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <svg className="size-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a href="mailto:admin@nokarisarkari.in" className="text-blue-400 hover:underline">
              admin@nokarisarkari.in
            </a>
          </li>

          <li className="flex items-center gap-2">
            <svg className="size-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.188 10.162L22.75 0h-2.03L13.287 8.824 7.35 0H.5l8.98 13.343L.5 24h2.03l7.85-9.318L16.65 24H23.5l-9.312-13.838Zm-2.779 3.299L3.26 1.56h3.117l14.346 20.951h-3.116l-6.197-9.05Z" />
            </svg>
            <a href="https://twitter.com/nokarisarkari" className="text-blue-400 hover:underline">
              @nokarisarkari
            </a>
          </li>

          <li className="flex items-center gap-2">
            <svg className="size-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
            <a href="https://nokarisarkari.in" className="text-blue-400 hover:underline">
              www.nokarisarkari.in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
