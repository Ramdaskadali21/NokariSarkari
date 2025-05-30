export default function HeroSection() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 pb-6">
      <section className="mt-6 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto">
       <div className="">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Find Your Dream Government Job
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-8">
          Latest Sarkari Naukri Updates – Stay Ahead in Your Career
        </p>

        {/* Search Bar */}
        <form className="max-w-xl mx-auto flex gap-2">
          <input
            type="text"
            name="search"
            placeholder="Search jobs, exams, or sectors"
            className="w-full px-4 py-3 rounded-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300"
          >
            Search
          </button>
        </form>

        {/* Category Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
              className="bg-white text-blue-800 font-medium px-4 py-2 rounded-full hover:bg-blue-100 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
      </section>
      
    </main>
  );
}
