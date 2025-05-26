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
];

export default function CardSlider() {
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
            loop={true}
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

        {/* Mobile slider (<640px) - white background, non-overlapping layout */}
        <div className="block sm:hidden mb-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            spaceBetween={20}
            slidesPerView={1}
            direction="vertical"
            className="!overflow-visible"
            style={{ padding: '0 20px' }}
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

        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: #5a67d8;
            top: 50% !important;
            width: 44px;
            height: 44px;
            margin-top: -22px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
            z-index: 10;
          }
          .swiper-button-prev {
            left: 0;
            transform: translateX(-50%);
          }
          .swiper-button-next {
            right: 0;
            transform: translateX(50%);
          }
          .swiper-pagination {
            bottom: -30px !important;
          }
        `}</style>
      </div>
    </div>
  );
}
