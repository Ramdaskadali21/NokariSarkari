import React, { useState } from "react";

const examData = {
  January: [
    {
      name: "SSC CGL Tier I",
      description: "Tentative schedule based on last year's calendar.",
    },
    {
      name: "RRB NTPC Phase 1",
      description: "Expected in January; subject to official confirmation.",
    },
  ],
  February: [
    {
      name: "IBPS Clerk Mains",
      description: "Usually held in February.",
    },
  ],
  March: [],
  April: [],
  May: [],
  June: [],
  July: [],
  August: [],
  September: [],
  October: [],
  November: [],
  December: [],
};

const months = Object.keys(examData);

const ExamCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 group rounded-xl border border-yellow-500 hover:border-red-700 text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Exam Calendar</h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Stay updated with the latest examination schedule. These are
          <span className="font-semibold text-yellow-400"> tentative dates</span> and may change as per official updates.
        </p>
      </div>

      {/* Month Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => handleMonthClick(month)}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm sm:text-base ${
              selectedMonth === month
                ? "bg-blue-600 text-white border-blue-400"
                : "bg-slate-800 border-slate-600 hover:bg-blue-700 hover:text-white"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Exam List */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-6">
        {examData[selectedMonth].length > 0 ? (
          examData[selectedMonth].map((exam, idx) => (
            <div
              key={idx}
              className="border border-blue-900/20 rounded-lg p-4 hover:border-blue-500 transition-all"
            >
              <h2 className="text-lg font-semibold text-blue-400">
                {exam.name}
              </h2>
              <p className="text-sm text-neutral-300 mt-1">
                {exam.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No tentative exams scheduled for <span className="text-white font-semibold">{selectedMonth}</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExamCalendar;
