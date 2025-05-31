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
     <div className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 py-12 px-4 sm:px-6 lg:px-8">
    <section className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold  dark:text-white text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-200 dark:text-gray-400">
            Answers to the most commonly asked questions about Sarkari Nokari – eligibility, applications, and exam tips.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between w-full text-left text-lg font-semibold text-blue-900 dark:text-white focus:outline-none"
                >
                  {faq.question}
                  <span>{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="mt-3 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {faq.extra}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default FAQs;
