import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import FooterLinks from './components/FooterLinks';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

import './index.css';

// Import video background from assets folder
import bgVideo from './assets/Abc.mp4';

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
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
          src={bgVideo}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for readability */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Main site content */}
      <div className="relative z-20">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <CookieConsent />

          <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-6 min-h-[70vh] text-white">
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