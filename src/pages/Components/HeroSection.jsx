import React from 'react';
import bgVideo from '../../assets/Abc.mp4';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-slate-900 overflow-hidden rounded-xl border border-blue-900/10 hover:border-blue-400/20 py-12 px-4 min-h-[55vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
          src={bgVideo}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Find Your Dream Government Job
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
            Latest Sarkari Naukri Updates – Stay Ahead in Your Career
          </p>

          {/* Search Bar */}
          <form className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-2 px-2">
            <input
              type="text"
              name="search"
              placeholder="Search jobs, exams, or sectors"
              className="flex-1 w-full px-4 py-2.5 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors duration-300 text-sm sm:text-base"
            >
              Search
            </button>
          </form>

          {/* Category Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 px-2">
            {[
              'Govt Jobs',
              'Defence',
              'Banking',
              'Teaching',
              'PSU',
              'Railway',
              'Police',
              'SSC',
              'UPSC',
            ].map((category) => (
              <button
                key={category}
                className="bg-white/90 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;