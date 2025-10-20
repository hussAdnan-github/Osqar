'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const ClientsSection = () => {
  const clientLogos = [
    { id: 1, src: '/1.jpg', alt: 'Arabian Yemen Cement Company Ltd.' },
    { id: 2, src: '/1.jpg', alt: 'HMEC' },
    { id: 3, src: '/1.jpg', alt: 'YPC' },
    { id: 4, src: '/1.jpg', alt: 'JINDAL SHADEED' },
    { id: 5, src: '/1.jpg', alt: 'Client Logo 5' },
    { id: 6, src: '/1.jpg', alt: 'Client Logo 6' },
  ];

  return (
    <section className="relative bg-[#1a2d52] py-16 md:py-40 px-4 text-white overflow-hidden">
      {/* 🎨 منحنى علوي */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-0">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C400,150 900,-50 1200,100 L1200,0 L0,0 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl ">
        <h2 className="text-4xl font-bold text-start mt-16 mb-40">
          من يثق في سكوير للهندسة والديكور
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 60 },
              1024: { slidesPerView: 4, spaceBetween: 70 },
              1280: { slidesPerView: 5, spaceBetween: 80 },
            }}
          >
            {clientLogos.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="flex justify-center items-center h-full py-4">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={150}
                    height={80}
                    className="object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
