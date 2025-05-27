import { useState } from 'react';

const MobileJobSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Sample job data (30 jobs for pagination demo)
  const jobs = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Government Job ${i + 1}`,
    department: `Department ${String.fromCharCode(65 + (i % 5))}`,
    deadline: `${(i % 28) + 1}th ${['Jan', 'Feb', 'Mar'][i % 3]} 2024`,
    vacancies: `${(i % 5) * 500 + 1000} Posts`
  }));

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const currentJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div className="min-h-screen p-4">

      {/* Jobs List */}
      <div className="grid gap-4 mb-6">
        {currentJobs.map((job) => (
          <div 
            key={job.id}
            className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">{job.title}</h3>
                <p className="text-xs text-slate-400 mb-2">{job.department}</p>
                <div className="flex gap-2">
                  <span className="text-xs text-blue-400 bg-blue-900/20 px-2 py-1 rounded-full">
                    {job.vacancies}
                  </span>
                  <span className="text-xs text-red-400 bg-red-900/20 px-2 py-1 rounded-full">
                    ⏳ {job.deadline}
                  </span>
                </div>
              </div>
              <button className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button
          className={`px-4 py-2 rounded-xl transition-all duration-300 ${
            currentPage === 1 
              ? 'bg-slate-800 border border-blue-900/20 cursor-not-allowed' 
              : 'bg-slate-800 border border-blue-900/20 hover:border-blue-400/40'
          }`}
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <span className="text-sm text-slate-400">Previous</span>
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              currentPage === i + 1
                ? 'bg-slate-800 border border-blue-400/40'
                : 'bg-slate-800 border border-blue-900/20 hover:border-blue-400/40'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            <span className={`text-sm ${
              currentPage === i + 1 ? 'text-blue-400' : 'text-slate-400'
            }`}>
              {i + 1}
            </span>
          </button>
        ))}

        <button
          className={`px-4 py-2 rounded-xl transition-all duration-300 ${
            currentPage === totalPages 
              ? 'bg-slate-800 border border-blue-900/20 cursor-not-allowed' 
              : 'bg-slate-800 border border-blue-900/20 hover:border-blue-400/40'
          }`}
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          <span className="text-sm text-slate-400">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MobileJobSection;