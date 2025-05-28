import HeroSection from './Components/HeroSection';
import LatestJobs from './Components/LatestJobs';
import BlogSection from './Components/BlogSection';
import LatestUpdates from './Components/LatestUpdates';
import CurrentJobs from './Components/CurrentJobs';

const Home = () => {
  return (
    // Apply global background and min-height here
    <div className=" min-h-screen"> 

      {/* Hero Section */}
      {/* Increased padding here: pt-12 (48px top) and pb-12 (48px bottom) */}
      <section className="pt-2 pb-4 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto"> 
        <HeroSection />
      </section>

      {/* Latest Jobs (Full-width Carousel) */}
      {/* Increased top margin: mt-20 (80px) */}
      <section className="mt-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> 
         <div className="border-b border-slate-200 pb-6"></div>
        <LatestJobs />
      </section>

      {/* Current Jobs & Latest Updates (Side-by-side layout) */}
      {/* Increased top margin: mt-24 (96px) */}
      <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> 
        <div className="border-b border-slate-200 pb-6"></div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12"> {/* Increased gap between columns */}
          
          {/* Main Content (Current Job Openings) */}
          <div className="w-full lg:w-[70%] space-y-8"> {/* Increased internal space-y */}
             {/* Increased padding bottom */}
              <h2 className="text-2xl font-bold text-white">Current Job Openings</h2>
           
            <CurrentJobs /> 
          </div>

          {/* Sidebar Updates (Latest Updates) */}
          <div className="w-full lg:w-[30%] space-y-8"> {/* Increased internal space-y */}
            {/* Increased padding bottom */}
              <h2 className="text-2xl font-bold text-white">Latest Updates</h2>
          
            <LatestUpdates /> 
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* Increased top margin: mt-24 (96px) */}
      <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> 
        <div className="border-b border-slate-200 pb-6"> {/* Increased padding bottom */}
          <h2 className="text-2xl font-bold text-white">Career Resources & Blogs</h2>
        </div>
        <BlogSection />
      </section>
    </div>
  );
};

export default Home;