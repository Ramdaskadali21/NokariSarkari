import React from 'react';
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-white">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-1 text-neutral-400">
            Please read these terms carefully before using NokariSarkari.
          </p>
        </div>

        <div className="mt-12 border border-slate-700 rounded-xl bg-slate-800 p-6 lg:p-8 hover:border-blue-500 transition-all duration-300 space-y-8 text-sm sm:text-base text-neutral-300 leading-relaxed">
          
          <section>
            <h2 className="text-white font-semibold text-lg mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using NokariSarkari, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">2. Purpose of the Website</h2>
            <p>
              NokariSarkari is an informational platform for government jobs. We do not guarantee job placement and are not affiliated with any government body.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">3. Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and timely information, NokariSarkari does not warrant the completeness or reliability of any content. Always verify details from official sources.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">4. User Responsibilities</h2>
            <p>
              Users are responsible for verifying information and ensuring compliance with government application processes. Misuse of the platform may result in access restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">5. External Links</h2>
            <p>
              This website may contain links to external sites. We are not responsible for the content or practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">6. Modifications</h2>
            <p>
              NokariSarkari reserves the right to update or change these terms at any time without prior notice. Continued use of the site implies acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">7. Contact Information</h2>
            <p>
              For questions regarding these terms, please visit our{' '}
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
                Contact Us
              </Link>{' '}
              page.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
