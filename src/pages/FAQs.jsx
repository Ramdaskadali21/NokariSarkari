import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Sarkari Nokari?',
    answer: `Sarkari Nokari means “Government Job” in Hindi. It refers to employment under the Indian government—either central (like UPSC, Railways, Banks) or state-level (like Police, Teachers, or local governance roles). These jobs are highly sought after because of their job security, pension benefits, work-life balance, and social status.`,
    extra: `Common departments include UPSC, SSC, Indian Railways, State PSCs, Defence Services, Banking (IBPS, SBI), Public Sector Units (like ONGC, BHEL), and more.`,
  },
  {
    question: 'How can I apply for a government job?',
    answer: `To apply for a Sarkari Nokari, you must follow the recruitment notifications published by the government on official websites or employment news. Each notification outlines the job eligibility, application process, exam details, and deadlines.`,
    extra: `You can apply online through platforms like UPSC (upsc.gov.in), SSC (ssc.nic.in), IBPS (ibps.in), or respective state boards. Our platform NokariSarkari.com helps you track and navigate these listings more easily.`,
  },
  {
    question: 'What documents are required to apply?',
    answer: `When applying for a government job, candidates are required to provide personal, educational, and category-based documents. These help verify your eligibility and identity.`,
    extra: `You typically need scanned copies of: 
- Aadhaar Card or other ID
- 10th & 12th mark sheets
- Graduation certificates (if required)
- Caste/Income/Disability certificate (if applicable)
- Passport-size photographs
- Signature (digital format)
Keep files in PDF or JPG formats, with file size limits specified in the job notification.`,
  },
  {
    question: 'Are government jobs available for 12th pass candidates?',
    answer: `Yes, several Sarkari jobs are open to 10+2 qualified candidates. You don’t need to be a graduate to apply for roles like clerks, constables, postal assistants, and more.`,
    extra: `Popular 12th-pass jobs:
- SSC CHSL (Clerk, Postal Assistant, Data Entry)
- Indian Railways (TC, Group D)
- Police (Constables)
- Army/Navy/Air Force (GD, Clerk)
Always check the eligibility criteria before applying.`,
  },
  {
    question: 'What is the age limit for applying to government jobs?',
    answer: `The typical age range for government jobs is 18–30 years. However, this varies depending on the job role and the recruiting organization. Age relaxations apply to reserved categories such as SC/ST, OBC, PwD, and Ex-servicemen.`,
    extra: `Example:
- General: 18–30 years
- OBC: +3 years (i.e., up to 33)
- SC/ST: +5 years (i.e., up to 35)
Check each job notification for precise upper age limits and category-wise relaxations.`,
  },
  {
    question: 'How to prepare for Sarkari Exams?',
    answer: `Sarkari exams test aptitude, general awareness, and technical knowledge (if applicable). Preparation requires dedication, structured study, and regular practice.`,
    extra: `Start with:
- General Awareness (Static GK + Current Affairs)
- Reasoning & Logical Ability
- Quantitative Aptitude (Maths)
- English Language
Tips:
1. Use NCERT books for basics.
2. Read daily current affairs from apps/newspapers.
3. Practice mock tests & previous year papers.
4. Follow specific channels on YouTube and Telegram groups for daily updates.
Apps like Adda247, Testbook, or Gradeup are also useful.`,
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="group block rounded-xl border border-yellow-500 hover:border-red-700
                    p-6 sm:p-8 lg:p-12 transition-all duration-300">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left side: Heading and description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Answers to the most commonly asked questions about Sarkari Nokari – eligibility, applications, and exam tips.
            </p>
          </div>

          {/* Right side: FAQ accordion */}
          <div className="md:col-span-3 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-blue-700 pb-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-left text-lg sm:text-xl font-semibold
                             text-blue-900 dark:text-white focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  {faq.question}
                  <span className="text-2xl select-none">{openIndex === index ? '−' : '+'}</span>
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-${index}`}
                    className="mt-4 space-y-3 text-gray-300 text-sm sm:text-base italic"
                  >
                    <p>{faq.answer}</p>
                    <p className="text-gray-400">{faq.extra}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
