import React, { useState, useEffect, useRef } from 'react';

// Assuming you have an image at this path or replace with a placeholder/actual image
import jobImage from '../../images/first.jpeg'; 

const LatestUpdates = () => {
  // Sample data - creating a larger dataset for better looping
  // Using a smaller original set and then duplicating it for a seamless effect
  const originalUpdates = Array.from({ length: 7 }, (_, i) => ({ 
    id: i + 1,
    title: `Government Job Update ${i + 1}`,
    content: `Important update about upcoming recruitment ${i + 1}. This content needs to be long enough to potentially wrap and test line-clamp.`,
    date: new Date(2024, 2, 15 + i).toLocaleDateString(),
    image: jobImage // Added image to the data for consistency, though not used in the 4-card layout
  }));

  // Duplicate the updates for continuous looping effect.
  // We're duplicating three times to ensure enough buffer for seamless transition.
  const allUpdates = [...originalUpdates, ...originalUpdates, ...originalUpdates];

  // State to hold visible updates (we'll show 4 cards)
  const [visibleUpdates, setVisibleUpdates] = useState(allUpdates.slice(0, 4));
  
  // Ref to track the current index for rotation
  const currentIndexRef = useRef(0);
  // Ref for the container to measure its height
  const containerRef = useRef(null);
  // State to store the height of the card container
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    // Function to update the height of the container
    const updateContainerHeight = () => {
      if (containerRef.current) {
        // Measure the scrollHeight of the flex container to get its full rendered height
        setContainerHeight(`${containerRef.current.scrollHeight}px`);
      }
    };

    // Initial height measurement after component mounts and cards are rendered
    const timeoutId = setTimeout(updateContainerHeight, 50); // Small delay to ensure rendering

    // Add event listener for window resize to re-measure height
    window.addEventListener('resize', updateContainerHeight);

    // Set up the interval for rotating cards
    const interval = setInterval(() => {
      // Calculate the next starting index for the slice
      currentIndexRef.current = (currentIndexRef.current + 4); 

      // If we've scrolled past the first set of original data, reset back to the start of the duplicate set
      // This creates the continuous loop illusion without a noticeable jump
      if (currentIndexRef.current >= originalUpdates.length) {
        currentIndexRef.current = 0; // Reset index to the beginning of the original data
      }

      // Get the next 4 updates
      let nextUpdates = allUpdates.slice(currentIndexRef.current, currentIndexRef.current + 4);
      
      // If we don't have enough updates for a full set of 4,
      // pad it from the beginning of the `allUpdates` array
      if (nextUpdates.length < 4) {
        nextUpdates = [...nextUpdates, ...allUpdates.slice(0, 4 - nextUpdates.length)];
      }
      
      setVisibleUpdates(nextUpdates);
    }, 4000); // Rotate every 4 seconds

    // Cleanup function for useEffect
    return () => {
      clearTimeout(timeoutId); // Clear the initial timeout
      clearInterval(interval);
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, [allUpdates.length, originalUpdates.length]); // Dependencies for useEffect

  return (
    // Outer container for the entire section.
    // Removed `min-h-screen` and `bg-gray-900` to ensure it only takes necessary space and no background.
    // `style={{ height: containerHeight }}` dynamically sets the height.
    <div className="p-4" style={{ height: containerHeight }}>
      {/* Title for the section */}
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Latest Government Job Updates
      </h2>
      
      {/* Container for the job cards. 
          `ref={containerRef}` is used to measure its height dynamically.
          `justify-center` centers the cards horizontally.
          `items-start` aligns card content to the top within their flex container.
          `overflow-hidden` to hide any overflow if content temporarily pushes. */}
      <div 
        ref={containerRef}
        className="flex space-x-4 justify-center items-start overflow-hidden" 
      >
        {visibleUpdates.map((update) => (
          <div
            key={update.id} // Using update.id for key, assuming originalUpdates has unique IDs.
                           // If duplicating, ensure keys are truly unique (e.g., update.id + '-' + index)
            className="group rounded-xl p-3 bg-slate-800 border border-blue-900/20 hover:border-blue-400/40"
            style={{ 
              // `flex-basis` and `max-width` to ensure 4 cards fit perfectly with `space-x-4` (16px gap)
              // There are 3 gaps between 4 cards, so total gap space is 3 * 16px = 48px.
              // Each card takes (100% - 48px) / 4 of the width.
              flex: '0 0 calc(25% - 12px)', // 12px is 48px / 4
              maxWidth: 'calc(25% - 12px)' 
            }}
          >
            {/* Card Title */}
            <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2"> {/* Added line-clamp-2 for title */}
              {update.title}
            </h3>
            {/* Card Content - `line-clamp-3` keeps height consistent */}
            <p className="text-xs text-slate-400 mb-2 line-clamp-3">
              {update.content}
            </p>
            {/* Date and Button - `items-end` aligns button to the bottom */}
            <div className="flex justify-between items-end text-xs mt-auto"> {/* mt-auto pushes to bottom if parent is flex-col */}
              <span className="text-blue-400">{update.date}</span>
              <button className="font-medium text-white bg-blue-600 hover:bg-blue-700 px-2 py-0.5 rounded-lg transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates;