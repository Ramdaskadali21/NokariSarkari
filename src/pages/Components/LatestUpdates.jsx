import { useState, useEffect, useRef } from 'react';

const LatestUpdates = () => {
  // Sample data with 15 updates
  const allUpdates = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Government Job Update ${i + 1}`,
    content: `Important update about upcoming recruitment ${i + 1}`,
    date: new Date(2024, 2, 15 + i).toLocaleDateString()
  }));

  const [visibleUpdates, setVisibleUpdates] = useState(allUpdates.slice(0, 5));
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 5) % allUpdates.length;
      const nextUpdates = allUpdates.slice(currentIndexRef.current, currentIndexRef.current + 5);
      setVisibleUpdates(nextUpdates.length >= 5 ? nextUpdates : [
        ...nextUpdates,
        ...allUpdates.slice(0, 5 - nextUpdates.length)
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4">
      <div className="space-y-4">
        {visibleUpdates.map((update) => (
          <div 
            key={update.id}
            className="group block rounded-xl p-4 transition-all duration-300 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{update.title}</h3>
            <p className="text-sm text-slate-400 mb-2">{update.content}</p>
            <div className="flex justify-between items-center">
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

export default LatestUpdates;