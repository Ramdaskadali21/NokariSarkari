import React from 'react';

const HeroSection = () => {
  return (
    <div className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Find Your Dream Government Job
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8">
          Latest Sarkari Naukri Updates – Stay Ahead in Your Career
        </p>

        {/* Search Bar */}
        <form className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-2 px-2">
          <input
            type="text"
            name="search"
            placeholder="Search jobs, exams, or sectors"
            className="w-full px-4 py-3 rounded-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300"
          >
            Search
          </button>
        </form>

        {/* Category Buttons */}
        <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 px-2">
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
              className="bg-white text-blue-800 text-sm sm:text-base font-medium px-4 py-2 rounded-full hover:bg-blue-100 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
