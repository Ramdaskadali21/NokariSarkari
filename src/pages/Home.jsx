import HeroSection from './Components/HeroSection'; 
import LatestJobs from './Components/LatestJobs';
import BlogSection from './Components/BlogSection';
import LatestUpades from './Components/LatestUpades';
import CurrentJobs from './Components/CurrentJobs';

const Home = () => {
  return (
    <div className=""> {/* You can add some global spacing here if needed */}
      
      {/* Hero Section */}
      <section className="pt-2 pb-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroSection />
      </section>

      {/* Latest Jobs */}
      <section className="pt-2 pb-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <LatestJobs />
      </section>

      {/* Current Jobs & Latest Updates */}
      <section className="pt-2 pb-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Main Content */}
          <div className="w-full lg:w-[70%] space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-white">Current Job Openings</h2>
            </div>
            <CurrentJobs />
          </div>

          {/* Sidebar Updates */}
          <div className="w-full lg:w-[30%] space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-white">Latest Updates</h2>
            </div>
            <LatestUpades />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pt-2 pb-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-white">Career Resources & Blogs</h2>
        </div>
        <BlogSection />
      </section>
    </div>
  );
};

export default Home;
