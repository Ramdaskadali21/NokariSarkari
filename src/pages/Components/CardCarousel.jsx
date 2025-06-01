import React, { useEffect, useRef, useState } from 'react';

const cardData = Array.from({ length: 10 }, (_, i) => ({
  title: `Card Title ${i + 1}`,
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  img: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400',
  link: '#',
}));

export default function AutoCarousel() {
  const containerRef = useRef(null);
  const scrollRef = useRef(0);
  const animationRef = useRef();

  const [pauseScroll, setPauseScroll] = useState(false);
  const [scrollButtonActive, setScrollButtonActive] = useState(false);

  const speed = 0.5;

  const animateScroll = () => {
    if (containerRef.current && !pauseScroll && !scrollButtonActive) {
      scrollRef.current += speed;

      const maxScroll = containerRef.current.scrollWidth / 2;
      if (scrollRef.current >= maxScroll) {
        scrollRef.current = 0;
      }

      containerRef.current.scrollLeft = scrollRef.current;
    }
    animationRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [pauseScroll, scrollButtonActive]);

  const scrollOneCard = (direction) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.querySelector('.card')?.offsetWidth || 250;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Temporarily stop auto-scroll
    setScrollButtonActive(true);
    setTimeout(() => setScrollButtonActive(false), 1000); // resume auto-scroll after 1s
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 select-none">
      {/* Left Arrow */}
      <button
        onClick={() => scrollOneCard('left')}
        onMouseEnter={() => setScrollButtonActive(true)}
        onMouseLeave={() => setScrollButtonActive(false)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-indigo-100"
      >
        <svg
          className="w-6 h-6 text-indigo-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Cards container */}
      <div
        ref={containerRef}
        className="flex overflow-hidden space-x-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...cardData, ...cardData].map((card, i) => (
          <div
            key={i}
            className="card w-[calc((100%/3)-1rem)] min-w-[250px] bg-white rounded-2xl shadow-md p-4 flex-shrink-0 transition-all duration-300"
            onMouseEnter={() => setPauseScroll(true)}
            onMouseLeave={() => setPauseScroll(false)}
          >
            <img
              src={card.img}
              alt={card.title}
              className="rounded-lg h-40 w-full object-cover"
            />
            <h2 className="text-lg font-bold text-gray-900 mt-3">{card.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{card.desc}</p>
            <a
              href={card.link}
              className="inline-block mt-4 px-5 py-2 bg-indigo-500 text-white rounded-lg font-medium text-sm hover:bg-indigo-600"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollOneCard('right')}
        onMouseEnter={() => setScrollButtonActive(true)}
        onMouseLeave={() => setScrollButtonActive(false)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-indigo-100"
      >
        <svg
          className="w-6 h-6 text-indigo-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
