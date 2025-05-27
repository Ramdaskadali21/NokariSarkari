import React, { useState, useEffect, useRef } from 'react';
import jobImage from '../../images/first.jpeg'; // Adjust path if needed

const LatestJobs = () => {
  const allUpdates = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Government Job Update ${i + 1}`,
    content: `Important update about upcoming recruitment ${i + 1}`,
    date: new Date(2024, 2, 15 + i).toLocaleDateString(),
    image: jobImage
  }));

  const containerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const updatesPerSlide = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) =>
        (prev + updatesPerSlide) % allUpdates.length
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [allUpdates.length]);

  const getVisibleUpdates = () => {
    const start = slideIndex;
    const end = start + updatesPerSlide;
    if (end <= allUpdates.length) {
      return allUpdates.slice(start, end);
    } else {
      return [
        ...allUpdates.slice(start),
        ...allUpdates.slice(0, end - allUpdates.length)
      ];
    }
  };

  const visibleUpdates = getVisibleUpdates();

  return (
    <div className="px-4 py-6 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Latest Government Job Updates
      </h2>

      <div
        ref={containerRef}
        className="flex flex-col sm:flex-row gap-4 max-w-5xl mx-auto transition-all duration-700"
      >
        {visibleUpdates.map((update) => (
          <div
            key={update.id}
            className="w-full sm:w-1/2 rounded-xl p-4 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{update.title}</h3>
              <p className="text-sm text-slate-400 mb-2">{update.content}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-blue-400">{update.date}</span>
              <button className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
