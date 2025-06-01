import React from "react";

const AdmitCards = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold sm:text-4xl mb-2">Admit Cards</h1>
        <p className="text-neutral-400">
          Download your latest government exam admit cards. Please verify details from the official websites.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "SSC CGL Admit Card",
            date: "Available Now",
            link: "#",
          },
          {
            title: "Delhi Police Constable Admit Card",
            date: "Available Now",
            link: "#",
          },
          {
            title: "IB ACIO Tier I Admit Card",
            date: "Releasing Soon",
            link: "#",
          },
        ].map((exam, index) => (
          <div
            key={index}
            className="border border-slate-700 rounded-xl bg-slate-800 p-6 hover:border-blue-500 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {exam.title}
            </h3>
            <p className="text-neutral-400 mb-4">Status: {exam.date}</p>
            <a
              href={exam.link}
              className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Admit Card
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmitCards;
