const BlogSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="space-y-8">
        {/* Blog Card 1 */}
        <a className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40" href="#">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img 
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" 
                alt="Blog Image"
              />
            </div>

            <div className="grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400 text-sm font-medium">Career Tips</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-sm">5 min read</span>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                Studio by Preline
              </h3>
              <p className="mt-3 text-slate-400">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <div className="mt-6 flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-medium">Read more</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Divider */}
        <div className="border-b border-slate-700/60"></div>

        {/* Blog Card 2 */}
        <a className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40" href="#">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img 
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" 
                alt="Blog Image"
              />
            </div>

            <div className="grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400 text-sm font-medium">Job Search</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-sm">8 min read</span>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                Onsite Interview Mastery
              </h3>
              <p className="mt-3 text-slate-400">
                Optimize your in-person experience with best-in-class capabilities like technical assessments
              </p>
              <div className="mt-6 flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-medium">Read more</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Divider */}
        <div className="border-b border-slate-700/60"></div>

        {/* Blog Card 3 */}
        <a className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40" href="#">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img 
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" 
                alt="Blog Image"
              />
            </div>

            <div className="grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400 text-sm font-medium">Career Growth</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-sm">6 min read</span>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                The Complete Guide to Career OKRs
              </h3>
              <p className="mt-3 text-slate-400">
                How to make objectives and key results work for your professional development
              </p>
              <div className="mt-6 flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-medium">Read more</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </a>
          {/* Divider */}
        <div className="border-b border-slate-700/60"></div>

        {/* View All Blog Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/blogs" // Update this to your actual blog route
            className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 text-center w-full sm:w-auto max-w-xs"
          >
            <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">
              View All Blog
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default BlogSection; // Added export statement