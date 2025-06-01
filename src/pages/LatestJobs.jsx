import React from "react";

const jobs = [
  {
    id: 1,
    title: "Junior Software Developer - Government Sector",
    company: "National IT Dept.",
    location: "New Delhi",
    applyLink: "https://govtjobs.example.com/apply/1",
  },
  {
    id: 2,
    title: "Project Manager - Private Tech Firm",
    company: "Tech Innovators Inc.",
    location: "Bangalore",
    applyLink: "https://techinnovators.example.com/careers/pm",
  },
  {
    id: 3,
    title: "Accountant - Municipal Corporation",
    company: "City Municipal Office",
    location: "Mumbai",
    applyLink: "https://municipaljobs.example.com/apply/accountant",
  },
];

const LatestJobs = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Latest Jobs
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">
        Find the most recent government and private sector job listings here.
      </p>

      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {job.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {job.company} — {job.location}
              </p>
            </div>
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
            >
              Apply
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestJobs;
