import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FooterLinks from './components/FooterLinks';
import ScrollToTop from './components/ScrollToTop';

import './index.css';

// Page imports
import Home from './pages/Home';
import LatestJobs from './pages/LatestJobs';
import AdmitCards from './pages/AdmitCards';
import Results from './pages/Results';
import ExamCalendar from './pages/ExamCalendar';
import PreparationTips from './pages/PreparationTips';
import AboutUs from './pages/AboutUs';

// New page imports
import UpcomingExams from './pages/UpcomingExams';
import Notifications from './pages/Notifications';
import Syllabus from './pages/Syllabus';
import PreviousPapers from './pages/PreviousPapers';
import InterviewTips from './pages/InterviewTips';
import HowToApply from './pages/HowToApply';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <main className="max-w-7xl mx-auto p-4 min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest-jobs" element={<LatestJobs />} />
          <Route path="/admit-cards" element={<AdmitCards />} />
          <Route path="/results" element={<Results />} />
          <Route path="/exam-calendar" element={<ExamCalendar />} />
          <Route path="/preparation-tips" element={<PreparationTips />} />
          <Route path="/about" element={<AboutUs />} />

          {/* New Routes */}
          <Route path="/upcoming-exams" element={<UpcomingExams />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/previous-papers" element={<PreviousPapers />} />
          <Route path="/interview-tips" element={<InterviewTips />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          <Route
            path="*"
            element={
              <div className="text-center text-gray-600">
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                <p>Sorry, this page does not exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      <FooterLinks />
    </BrowserRouter>
  );
}

export default App;
