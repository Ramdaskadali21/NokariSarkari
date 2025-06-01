import React from "react";

const InterviewTips = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="space-y-8">
        {/* Tip Card 1 */}
        <div className="block rounded-xl p-4 bg-slate-800 border border-blue-900/20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80"
                alt="Understand Government Exam Pattern"
              />
            </div>

            <div className="grow text-white">
              <div className="mb-3">
                <span className="text-blue-400 text-sm font-medium">Government Jobs</span>
              </div>
              <h3 className="text-xl font-semibold">
                Understand Government Exam Pattern
              </h3>
              <p className="mt-3 text-slate-400">
                Study the syllabus and exam pattern thoroughly to focus on important topics and maximize your scoring potential.
              </p>
            </div>
          </div>
        </div>

        {/* Tip Card 2 */}
        <div className="block rounded-xl p-4 bg-slate-800 border border-blue-900/20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80"
                alt="Regular Practice and Mock Tests"
              />
            </div>

            <div className="grow text-white">
              <div className="mb-3">
                <span className="text-blue-400 text-sm font-medium">Government Jobs</span>
              </div>
              <h3 className="text-xl font-semibold">Regular Practice and Mock Tests</h3>
              <p className="mt-3 text-slate-400">
                Consistently practice previous year papers and take mock tests to improve time management and accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Tip Card 3 */}
        <div className="block rounded-xl p-4 bg-slate-800 border border-blue-900/20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80"
                alt="Stay Updated with Notifications"
              />
            </div>

            <div className="grow text-white">
              <div className="mb-3">
                <span className="text-blue-400 text-sm font-medium">Government Jobs</span>
              </div>
              <h3 className="text-xl font-semibold">Stay Updated with Notifications</h3>
              <p className="mt-3 text-slate-400">
                Keep track of official notifications and deadlines for government job exams to avoid missing important dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewTips;
