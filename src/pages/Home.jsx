import HeroSection from './Components/HeroSection'; 
import LatestJobs from './Components/LatestJobs';
import BlogSection from './Components/BlogSection';
import LatestUpdates from './Components/LatestUpdates';
import CurrentJobs from './Components/CurrentJobs';
import CardCarousel from './Components/CardCarousel';

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      
      {/* Hero Section */}
      <section className="pt-6 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroSection />
      </section>
    
      {/* Latest Jobs */}
      <section className="pt-6 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div>
          <CardCarousel />
        </div>
      </section>

      {/* Current Jobs & Latest Updates */}
      <section className="pt-6 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="w-full lg:w-7/12 space-y-6">
            <div className="border-b border-slate-700 pb-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Current Job Openings
              </h2>
            </div>
            <CurrentJobs />
          </div>

          {/* Sidebar Updates */}
          <aside className="w-full lg:w-5/12 space-y-6">
            <div className="border-b border-slate-700 pb-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Latest Updates
              </h2>
            </div>
            <LatestUpdates />
          </aside>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pt-6 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-slate-700 pb-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Career Resources & Blogs
          </h2>
        </div>
        <BlogSection />
      </section>
    </div>
  );
};

export default Home;
