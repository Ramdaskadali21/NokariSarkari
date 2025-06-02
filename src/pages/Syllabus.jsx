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
  "Judiciary Exams": [
    "Supreme Court Junior Court Assistant",
    "Supreme Court Law Clerk",
  ],
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
  "Supreme Court Junior Court Assistant": [
    { text: "Supreme Court Recruitment", href: "#" },
  ],
};

const hoverBgColors = {
  "SSC Exams": "hover:bg-pink-700",
  "Banking Exams": "hover:bg-green-700",
  "Police Exams": "hover:bg-yellow-700",
  "Judiciary Exams": "hover:bg-red-700",
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
    <div className="max-w-full min-h-screen  text-white font-sans p-4 md:p-8 flex flex-col md:flex-row gap-4 group rounded-xl border border-yellow-500 hover:border-red-700">
      
      {/* Mobile Dropdown for Categories */}
      <div className="md:hidden w-full">
        <label
          htmlFor="category-select"
          className="block mb-2 font-semibold text-lg"
        >
          Choose Exam Category:
        </label>
        <select
          id="category-select"
          className="w-full rounded-lg  border border-yellow-500 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10 relative"
          value={selectedCategory}
          onChange={(e) => {
            const cat = e.target.value;
            setSelectedCategory(cat);
            setSelectedSubExam(examData[cat][0]);
          }}
        >
          {Object.keys(examData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Sidebar: Categories */}
      <aside
        className="hidden md:flex md:flex-col md:w-1/5 bg-slate-800 rounded-xl border border-blue-900/30 p-4 overflow-y-auto md:h-[80vh]"
        aria-label="Exam Categories"
      >
        <h2 className="text-2xl font-bold mb-4">Exam Categories</h2>
        <ul className="flex flex-col gap-2">
          {Object.keys(examData).map((category) => (
            <li
              key={category}
              role="button"
              tabIndex={0}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubExam(examData[category][0]);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedCategory(category);
                  setSelectedSubExam(examData[category][0]);
                }
              }}
              className={`cursor-pointer select-none rounded-lg px-4 py-3 transition-colors duration-300
                ${
                  selectedCategory === category
                    ? "bg-blue-700 font-semibold shadow-lg border border-blue-500"
                    : "bg-slate-700 hover:bg-blue-600"
                }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Sub Exams Section */}
      <section
        className="md:w-3/5 bg-slate-800 rounded-xl border border-blue-900/30 p-4 overflow-y-auto md:h-[80vh] flex flex-col"
        aria-label={`${selectedCategory} Sub-Exams`}
      >
        <h2 className="text-2xl font-bold mb-4">{selectedCategory} Sub-Exams</h2>
        <div
          className={`grid gap-6 overflow-y-auto ${
            selectedCategory === "SSC Exams" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
          style={{ flexGrow: 1 }}
        >
          {subExams.map((subExam) => {
            const isSelected = selectedSubExam === subExam;
            return (
              <div
                key={subExam}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedSubExam(subExam)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedSubExam(subExam);
                  }
                }}
                className={`cursor-pointer flex flex-col items-center justify-between p-4 rounded-xl border shadow-md select-none h-32 transition-colors duration-300
                  ${
                    isSelected
                      ? "border-blue-500 bg-blue-800 text-white font-semibold shadow-lg"
                      : `border-gray-700 bg-gray-800 ${hoverBgColors[selectedCategory] || "hover:bg-blue-700"} hover:border-blue-400`
                  }`}
                aria-pressed={isSelected}
                aria-label={`Select ${subExam}`}
              >
                <div className="w-full h-14 mb-2 flex items-center justify-center bg-slate-800 border border-blue-900/20 rounded-xl">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-center">{subExam}</span>
                <ArrowRightIcon />
              </div>
            );
          })}
        </div>
      </section>

      {/* Related Links Sidebar */}
      <aside
        className="hidden md:flex md:flex-col md:w-1/5 bg-slate-800 rounded-xl border border-blue-900/30 p-6 overflow-y-auto md:h-[80vh]"
        aria-label={`${selectedSubExam} Related Links`}
      >
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 sticky top-0 bg-slate-800 z-10">
          {selectedSubExam} Related Links
        </h2>
        <ul className="flex flex-col gap-4">
          {relatedLinks.map(({ text, href }, idx) => (
            <li key={idx}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline break-words"
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
