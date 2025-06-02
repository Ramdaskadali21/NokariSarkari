import React from "react";

const notificationsData = [
  {
    id: 1,
    title: "Exam Date Update",
    date: "2025-06-05",
    description:
      "The tentative date for the State Civil Services exam has been updated. Please check the official notification for exact details.",
  },
  {
    id: 2,
    title: "New Job Alert: Banking Sector",
    date: "2025-06-01",
    description:
      "Bank XYZ has released 500+ vacancies. Applications are open till 15th June 2025.",
  },
  {
    id: 3,
    title: "Website Maintenance Scheduled",
    date: "2025-06-10",
    description:
      "The NokariSarkari website will undergo scheduled maintenance from 1 AM to 4 AM IST. Service may be intermittent during this period.",
  },
];

const NotificationsPage = () => {
  return (
    <main className="min-h-screen  p-8">
      <div className="max-w-5xl mx-auto  group rounded-xl border border-yellow-500 hover:border-red-700 shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Notifications
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center max-w-xl mx-auto">
          Stay updated with the latest alerts and announcements related to government jobs and exams.
        </p>

        <div className="space-y-6">
          {notificationsData.map(({ id, title, date, description }) => (
            <div
              key={id}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h2>
              <time
                dateTime={date}
                className="text-sm text-blue-500 font-medium"
              >
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600">
          Note: All dates are tentative and subject to change as per official announcements.
        </p>
      </div>
    </main>
  );
};

export default NotificationsPage;
