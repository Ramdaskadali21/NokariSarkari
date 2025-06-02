import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import FooterLinks from './components/FooterLinks';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

import './index.css';
// Page imports
import Home from './pages/Home';
import LatestJobs from './pages/LatestJobs';
import AdmitCards from './pages/AdmitCards';
import Results from './pages/Results';
import ExamCalendar from './pages/ExamCalendar';
import PreparationTips from './pages/PreparationTips';
import AboutUs from './pages/AboutUs';
import UpcomingExams from './pages/UpcomingExams';
import Notifications from './pages/Notifications';
import Syllabus from './pages/Syllabus';
import PreviousPapers from './pages/PreviousPapers';
import InterviewTips from './pages/InterviewTips';
import HowToApply from './pages/HowToApply';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background - Fixed */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-30 lg:bg-opacity-20 z-10 transition-all duration-300"></div>

      {/* Main Site Content */}
      <div className="relative z-20">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <CookieConsent />

          {/* Page Container */}
          <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-6 min-h-[70vh] text-white transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/latest-jobs" element={<LatestJobs />} />
              <Route path="/admit-cards" element={<AdmitCards />} />
              <Route path="/results" element={<Results />} />
              <Route path="/exam-calendar" element={<ExamCalendar />} />
              <Route path="/preparation-tips" element={<PreparationTips />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/upcoming-exams" element={<UpcomingExams />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/previous-papers" element={<PreviousPapers />} />
              <Route path="/interview-tips" element={<InterviewTips />} />
              <Route path="/how-to-apply" element={<HowToApply />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>

          <FooterLinks />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;