import React from "react";

const preparationTips = [
  {
    id: 1,
    title: "Understand the Exam Pattern",
    description:
      "Familiarize yourself with the exam syllabus, marking scheme, and the types of questions to expect. This helps you plan your study strategy effectively.",
  },
  {
    id: 2,
    title: "Create a Study Schedule",
    description:
      "Design a realistic timetable allocating time for each subject and topic. Consistency is key to covering all material without last-minute cramming.",
  },
  {
    id: 3,
    title: "Practice Previous Year Papers",
    description:
      "Solving past exam papers boosts confidence and helps identify important topics and time management skills.",
  },
  {
    id: 4,
    title: "Take Regular Mock Tests",
    description:
      "Simulate real exam conditions with mock tests to improve speed and accuracy, and to reduce exam-day anxiety.",
  },
  {
    id: 5,
    title: "Focus on Your Weak Areas",
    description:
      "Identify subjects or topics where you struggle and dedicate extra time to strengthen them.",
  },
  {
    id: 6,
    title: "Stay Updated with Current Affairs",
    description:
      "Reading newspapers, magazines, and reliable websites daily helps you prepare for the general knowledge section.",
  },
  {
    id: 7,
    title: "Maintain Good Health",
    description:
      "A balanced diet, adequate sleep, and regular exercise improve concentration and stamina during preparation.",
  },
];

const PreparationTips = () => {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-10 group  border border-yellow-500 hover:border-red-700">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Preparation Tips for Government Exams
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
          Follow these essential tips to prepare effectively and boost your chances of success.
        </p>

        <div className="space-y-6">
          {preparationTips.map(({ id, title, description }) => (
            <div
              key={id}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PreparationTips;
