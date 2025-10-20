'use client';  
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
 
const slides = [
    {
        id: 1,
        // Using a high-quality interior design placeholder image
        src: "/1.jpg",
        title: "التصميم الداخلي وهندسة الديكور والتشطيبات",
        subtitle: "رؤية واضحة لبيت العمر، نبني أحلامك بالاحترافية والإتقان",
    },
    {
        id: 2,
        src: "/1.jpg",
        title: "هندسة الإبداع المعماري",
        subtitle: "مساحات تعكس شخصيتك وتطلعاتك، في كل زاوية قصة إبداع",
    },
    {
        id: 3,
        src: "/1.jpg",
        title: "جودة تشطيبات فاخرة",
        subtitle: "التفاصيل التي تحدث الفارق، مستوى غير مسبوق من الدقة",
    },
];


 const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-play effect: advances slide every 5 seconds (5000ms)
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval); // Cleanup on unmount
    }, []);

    return (
        <section 
            className="relative h-screen flex items-center justify-center text-white   overflow-hidden" 
            style={{ direction: 'rtl' }} // Ensure overall direction is Right-to-Left
        >

            {/* Slides Container */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
                        }`}
                    >
                        {/* Background Image (Using standard img tag) */}
                        <Image
                            src={slide.src}
                            width={100}
                            height={100}
                            alt={`Slide ${index + 1}: ${slide.title}`}
                            className="w-full h-full object-cover brightness-[0.4]" // Darken for contrast
                            // Fallback for image loading error
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1920x1080/374151/F9FAFB?text=Loading+Error"; }}
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="relative z-10 text-center max-w-4xl w-full">
                                <h1 className="text-5xl md:text-7xl font-bold  mb-4 text-right leading-tight drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-3xl mb-10 text-right font-light drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                {/* Call to Action Buttons */}
                                {/* <div className="flex justify-end gap-4 mt-8 space-x-4 space-x-reverse">
                                    <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-xl transition duration-300 transform hover:scale-105">
                                        اكتشف مشاريعنا
                                    </button>
                                    <button className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
                                        تواصل معنا الآن
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
          

             <div className="absolute bottom-10 z-30 flex space-x-2 space-x-reverse">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-[#243b7a] w-8' : 'bg-white opacity-50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>

        </section>
    );
};

export default HeroSection;
