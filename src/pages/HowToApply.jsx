import React from "react";

const HowToApply = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          How to Apply for Government Exams
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
          Follow these steps carefully to apply for government job exams. Always refer to the official website before submitting any form.
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-neutral-300 leading-relaxed">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-white font-semibold text-lg mb-2">1. Check Eligibility</h2>
          <p>
            Read the official notification carefully to ensure you meet the age, educational qualification, and other eligibility criteria.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-white font-semibold text-lg mb-2">2. Keep Documents Ready</h2>
          <p>
            Make sure you have scanned copies of your photo, signature, ID proof, and educational documents as per the required format.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-white font-semibold text-lg mb-2">3. Visit Official Website</h2>
          <p>
            Go to the official recruitment portal (e.g., SSC, UPSC, IBPS) and find the relevant application link in the active notifications section.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-white font-semibold text-lg mb-2">4. Fill Application Form</h2>
          <p>
            Carefully fill in your personal details, upload documents, and double-check all information before submitting.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-white font-semibold text-lg mb-2">5. Pay Application Fee</h2>
          <p>
            Pay the fee through the available online payment modes. Save the transaction reference number for future use.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-white font-semibold text-lg mb-2">6. Print Confirmation</h2>
          <p>
            After submission, download or print the final application form and payment receipt for your records.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-white font-semibold text-lg mb-2">Important Note</h2>
          <p>
            Always apply before the deadline. Bookmark the official site and avoid third-party or unofficial sources for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
