import React from "react";

const previousPapersData = [
  {
    exam: "SSC CGL",
    years: [2022, 2021, 2020, 2019, 2018],
  },
  {
    exam: "UPSC Civil Services",
    years: [2022, 2021, 2020, 2019, 2018],
  },
  {
    exam: "IBPS PO",
    years: [2022, 2021, 2020, 2019, 2018],
  },
  {
    exam: "RBI Grade B",
    years: [2022, 2021, 2020, 2019],
  },
  {
    exam: "State PSC Exams",
    years: [2022, 2021, 2020],
  },
];

const PreviousPapers = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Previous Year Papers
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10 sm:text-lg">
          Find and download previous year exam papers for various government exams.
          Prepare well by practicing with real exam questions from past years.
        </p>

        <div className="space-y-8">
          {previousPapersData.map(({ exam, years }) => (
            <div key={exam} className="text-left">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {exam}
              </h2>
              <ul className="flex flex-wrap gap-4">
                {years.map((year) => (
                  <li
                    key={year}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
                    title={`Download ${exam} paper for year ${year}`}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PreviousPapers;
