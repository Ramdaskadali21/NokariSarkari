import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import designImg from '../../images/first.jpeg';

const cards = [
  { tag: 'Design', image: designImg, title: 'Modern UI Trends for 2025', text: 'Explore the latest user interface design trends...' },
  { tag: 'Development', image: designImg, title: 'Best Frontend Frameworks', text: 'A comprehensive comparison of the most popular frontend frameworks...' },
  { tag: 'Marketing', image: designImg, title: 'Growth Hacking Tips', text: 'How to grow your startup fast and efficiently...' },
  { tag: 'Design', image: designImg, title: 'UX/UI Best Practices', text: 'Designing for accessibility and usability...' },
  { tag: 'Development', image: designImg, title: 'React 18 Features', text: 'What’s new in React 18 and how to use it...' },
  { tag: 'De', image: designImg, title: 'React 18 Features', text: 'What’s new in React 18 and how to use it...' },
  { tag: 'Dev', image: designImg, title: 'React 18 Features', text: 'What’s new in React 18 and how to use it...' },
  { tag: 'Developnt', image: designImg, title: 'React 18 Features', text: 'What’s new in React 18 and how to use it...' },
  { tag: 'Devement', image: designImg, title: 'React 18 Features', text: 'What’s new in React 18 and how to use it...' },
];

// Loop flags for swiper
const isLoopDesktop = cards.length > 3;

export default function CardSlider() {
  // Mobile card rotator state
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only run timer on mobile (window width < 640)
    function handleResize() {
      if (window.innerWidth >= 640) {
        setCurrentIndex(0); // reset index if switching to desktop
      }
    }
    window.addEventListener('resize', handleResize);

    const timer = setInterval(() => {
      if (window.innerWidth < 640) {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen py-5">
      <h2 className="text-4xl font-extrabold mb-10 select-none drop-shadow-lg">
        Latest Jobs
      </h2>
      <div className="max-w-[1100px] w-full px-4 relative">

        {/* Desktop & Tablet slider (≥640px) */}
        <div className="hidden sm:block">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={isLoopDesktop}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            spaceBetween={30}
            slidesPerView={3}
            className="!overflow-visible"
            style={{ padding: '0 60px' }}
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl shadow-md hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="rounded-2xl p-2 aspect-video object-cover w-full"
                    />
                    <span className="absolute top-6 left-6 text-xs font-semibold text-indigo-500 bg-white bg-opacity-90 px-4 py-1 rounded-full shadow">
                      {card.tag}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 flex-1">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-1">{card.text}</p>
                    <a
                      href="#"
                      className="text-white text-xs font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 rounded-full shadow hover:-translate-y-1 transition-transform self-start"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile view: auto-rotating single card with fade */}
        <div className="block sm:hidden relative max-w-[280px] mx-auto h-[270px]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-md flex flex-col p-4 transition-opacity duration-700 ease-in-out absolute inset-0 ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="rounded-2xl aspect-video object-cover w-full"
                  style={{ height: '130px' }}
                />
                <span className="absolute top-2 left-2 text-xs font-semibold text-indigo-500 bg-white bg-opacity-90 px-3 py-0.5 rounded-full shadow">
                  {card.tag}
                </span>
              </div>
              <div className="flex flex-col mt-3 flex-1">
                <h3 className="text-base font-semibold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-xs text-gray-600 mb-3 flex-1">{card.text}</p>
                <a
                  href="#"
                  className="text-white text-xs font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 rounded-full shadow self-start"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Styles for swiper buttons & pagination */}
        <style>{`
          /* Navigation Arrows */
          .swiper-button-prev,
          .swiper-button-next {
            color: #5a67d8;
            top: 50% !important;
            width: 36px;
            height: 36px;
            margin-top: -18px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
            z-index: 10;
            transition: transform 0.2s ease;
          }
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            transform: scale(1.1);
          }
          /* Position arrows closer on mobile (won't show arrows on mobile now) */
          @media (max-width: 639px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }
          }
          /* Pagination bullets smaller and closer on mobile */
          .swiper-pagination {
            bottom: -25px !important;
          }
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            opacity: 0.6;
            transition: opacity 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background: #5a67d8;
          }
          @media (max-width: 639px) {
            .swiper-pagination {
              bottom: -20px !important;
            }
            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
              margin: 0 3px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
