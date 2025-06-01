import React from "react";

const resultsData = [
  {
    exam: "SSC CGL 2023",
    resultLink: "#",
    description: "Combined Graduate Level Examination 2023 result declared.",
  },
  {
    exam: "UPSC Civil Services 2022",
    resultLink: "#",
    description: "Civil Services Preliminary and Mains results available.",
  },
  {
    exam: "IBPS PO 2023",
    resultLink: "#",
    description: "Probationary Officer recruitment results announced.",
  },
  {
    exam: "RBI Grade B 2022",
    resultLink: "#",
    description: "Reserve Bank of India Grade B Phase 2 results declared.",
  },
];

const Results = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center">
        Government Job Results
      </h1>
      <p className="text-center text-gray-300 text-lg mb-10">
        Check your latest government exam results here. Click on the links below to view detailed results.
      </p>

      <div className="space-y-6">
        {resultsData.map(({ exam, resultLink, description }) => (
          <div
            key={exam}
            className="bg-gray-800 rounded-md p-5 hover:bg-gray-700 transition cursor-pointer"
            onClick={() => window.open(resultLink, "_blank")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && window.open(resultLink, "_blank")}
          >
            <h2 className="text-xl font-semibold text-white mb-1">{exam}</h2>
            <p className="text-gray-400">{description}</p>
            <span className="inline-block mt-3 text-blue-400 hover:text-blue-300 font-medium">
              View Result &rarr;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
