import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-white">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-1 text-neutral-400">
            Learn how NokariSarkari handles your personal information responsibly.
          </p>
        </div>

        <div className="mt-12 border border-slate-700 rounded-xl bg-slate-800 p-6 lg:p-8 hover:border-blue-500 transition-all duration-300 space-y-8 text-sm sm:text-base text-neutral-300 leading-relaxed">
          
          <section>
            <h2 className="text-white font-semibold text-lg mb-2">1. Introduction</h2>
            <p>
              At <strong>NokariSarkari</strong>, we are committed to protecting your privacy. This policy describes how we collect, use, and protect your data when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">2. What Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal Information (name, email, phone number)</li>
              <li>Device and browser data (IP address, browser type, OS)</li>
              <li>Usage data (pages visited, time on site, interactions)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">3. Why We Collect It</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To send job alerts and notifications</li>
              <li>To improve our services and website experience</li>
              <li>To monitor and enhance platform security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">4. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to analyze traffic and enhance user experience. You may manage cookie settings via your browser.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">5. Third-Party Services</h2>
            <p>
              We may use third-party tools such as Google Analytics. These tools collect anonymous usage data to help us understand how users interact with our site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your data from unauthorized access. However, no online system is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">7. Your Rights</h2>
            <p>
              You can request access, correction, or deletion of your personal data. You may also opt-out of our communication services anytime.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Updates will be posted on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">9. Contact Us</h2>
            <p>
              If you have questions or concerns about this policy, please visit our{' '}
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

export default PrivacyPolicy;
