import React, { useState } from "react";

const examData = {
  "SSC Exams": [
    "SSC CGL",
    "SSC CHSL",
    "SSC MTS",
    "SSC GD Constable",
    "SSC CPO",
    "SSC Stenographer",
    "SSC Selection Post",
    "SSC JE CE",
    "SSC JE EE",
    "SSC JE ME",
    "SSC Scientific Assistant",
    "SSC JHT",
    "SSC JE",
    "SSC Havaldar",
  ],
  "Banking Exams": [
    "IB ACIO",
    "IB Security Assistant",
    "CSIR ASO",
    "ICMR Assistant",
    "NBE",
    "NTA Delhi University NonTeaching",
  ],
  "Police Exams": [
    "Delhi Police Constable",
    "Delhi Police Head Constable",
    "Delhi Police Driver",
    "Delhi Police MTS",
  ],
  "Judiciary Exams": ["Supreme Court Junior Court Assistant", "Supreme Court Law Clerk"],
};

const relatedLinksData = {
  "SSC CGL": [
    { text: "Official SSC CGL Site", href: "https://ssc.nic.in" },
    { text: "SSC CGL Syllabus PDF", href: "#" },
    { text: "Previous Year Papers", href: "#" },
  ],
  "SSC CHSL": [
    { text: "SSC CHSL Details", href: "#" },
    { text: "Preparation Tips", href: "#" },
  ],
  "Delhi Police Constable": [
    { text: "Delhi Police Official Site", href: "#" },
    { text: "Exam Pattern", href: "#" },
  ],
  "Supreme Court Junior Court Assistant": [{ text: "Supreme Court Recruitment", href: "#" }],
};

const ArrowRightIcon = () => (
  <svg
    className="w-5 h-5 mt-1 text-blue-400 group-hover:text-blue-300 transition-colors"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Syllabus = () => {
  const [selectedCategory, setSelectedCategory] = useState("SSC Exams");
  const [selectedSubExam, setSelectedSubExam] = useState(examData["SSC Exams"][0]);

  const subExams = examData[selectedCategory] || [];
  const relatedLinks =
    relatedLinksData[selectedSubExam] || [{ text: "No related links available", href: "#" }];

  return (
    <div className="flex flex-col md:flex-row h-screen group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 text-white font-sans">
      {/* Left Sidebar - 20% desktop, full width mobile */}
      <aside className="w-full md:w-1/5 max-w-xs border-b md:border-b-0 md:border-r group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 overflow-y-auto">
        <h2 className="text-2xl font-bold p-4 border-b group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 z-10">
          Exam Categories
        </h2>
        <ul className="space-y-2 p-4">
          {Object.keys(examData).map((category) => (
            <li
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubExam(examData[category][0]);
              }}
              className={`cursor-pointer px-4 py-3 rounded-lg transition-colors select-none ${
                selectedCategory === category
                  ? "group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 text-white font-semibold shadow"
                  : "group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Middle Content - 60% desktop, full width mobile */}
      <section className="w-full md:w-3/5 border-b md:border-b-0 md:border-r group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 overflow-y-auto">
        <h2 className="text-2xl font-bold p-4 border-b group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 z-10">
          {selectedCategory} Sub-Exams
        </h2>
        <div
          className={`p-6 grid gap-6 ${
            selectedCategory === "SSC Exams"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {subExams.map((subExam) => (
            <div
              key={subExam}
              onClick={() => setSelectedSubExam(subExam)}
              className={`cursor-pointer group flex flex-col items-center justify-between p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-md transition-colors select-none h-32 ${
                selectedSubExam === subExam
                  ? "group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 font-semibold"
                  : "group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40"
              }`}
            >
              <div className="w-full h-14 mb-2 group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40  items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>

              <span className="text-center">{subExam}</span>

              <ArrowRightIcon />
            </div>
          ))}
        </div>
      </section>

      {/* Right Sidebar - 20% desktop, full width mobile */}
      <aside className="w-full md:w-1/5 overflow-y-auto p-6">
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-6 sticky top-0 bg-gray-900 z-10">
          {selectedSubExam} Related Links
        </h2>
        <ul className="space-y-4">
          {relatedLinks.map(({ text, href }, idx) => (
            <li key={idx}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline break-words"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Syllabus;
