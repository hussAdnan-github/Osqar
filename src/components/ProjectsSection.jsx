'use client';
import Link from 'next/link';
import React, { useState, useEffect, useCallback, useRef } from 'react';
// تنفيذ كاروسيل مخصص يحاكي تصميم الصورة المرفقة مع تأثير تكبير وتصغير سلس وميزة التكرار اللانهائي (LOOP).

// --- Mock Data for Portfolio Items (البيانات الوهمية لعناصر معرض الأعمال) ---
const realItems = [
    { id: 1, imgSrc: '/1.jpg', alt: 'تصميم داخلي حديث' },
    { id: 2, imgSrc: '/1.jpg', alt: 'تصميم متجر فاخر' },
    { id: 3, imgSrc: '/1.jpg', alt: 'منزل سكني' },
    { id: 4, imgSrc: '/1.jpg', alt: 'تصميم مكتب أعمال' },
    { id: 5, imgSrc: '/1.jpg', alt: 'فيلا عصرية' },
];

// دمج العناصر الحقيقية مع نسخ وهمية لإنشاء حلقة (مثلاً: [P5, P1, P2, P3, P4, P5, P1])
// هذه المنهجية هي الأساس لـ Loop Carousel باستخدام CSS/React
const portfolioItems = [
    realItems[realItems.length - 1], // نسخة وهمية من الأخير
    ...realItems,
    realItems[0], // نسخة وهمية من الأول
];

const PortfolioSection = () => {
    const realItemsCount = realItems.length;
    const totalItems = portfolioItems.length; // 7 عناصر الآن: 1 وهمي + 5 حقيقي + 1 وهمي
    
    // نبدأ من الشريحة الثانية (index 1) وهي الشريحة الحقيقية الأولى
    const [currentIndex, setCurrentIndex] = useState(1); 
    const [isTransitioning, setIsTransitioning] = useState(false);
    const carouselRef = useRef(null);

    // دالة للتعامل مع نهاية الانتقال (للقفز الفوري عند نهاية الحلقة)
    const handleTransitionEnd = useCallback(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = 'none'; // إيقاف الانتقال المؤقت
        }
        
        // إذا وصلنا إلى الشريحة الوهمية الأخيرة (P1)
        if (currentIndex === totalItems - 1) {
            setCurrentIndex(1); // العودة الفورية إلى الشريحة الحقيقية الأولى (P1)
        } 
        // إذا وصلنا إلى الشريحة الوهمية الأولى (P5)
        else if (currentIndex === 0) {
            setCurrentIndex(realItemsCount); // العودة الفورية إلى الشريحة الحقيقية الأخيرة (P5)
        }
        
        setIsTransitioning(false); // انتهاء حالة الانتقال

        // يجب إعادة تشغيل الانتقال بعد مهلة صغيرة في الدورة التالية
        setTimeout(() => {
            if (carouselRef.current) {
                carouselRef.current.style.transition = 'all 0.6s ease-in-out';
            }
        }, 50);

    }, [currentIndex, realItemsCount, totalItems]);

    // ربط مستمع الحدث
    useEffect(() => {
        const carouselElement = carouselRef.current;
        if (carouselElement) {
            carouselElement.addEventListener('transitionend', handleTransitionEnd);
        }
        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
    }, [handleTransitionEnd]);


    // دالة الانتقال إلى التالي
    const goToNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }, [isTransitioning]);

    // دالة الانتقال إلى السابق
    const goToPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };


    // حساب الأنماط لكل شريحة لتطبيق تأثير التكبير والشفافية والمنظور
    const getSlideStyle = (index) => {
        // نستخدم الشريحة المركزية (currentIndex) لتحديد الـ offset
        const offset = index - currentIndex; 

        // إعدادات أساسية
        let opacity = 0;
        let scale = 0.6;
        let zIndex = 0;
        let translateX = 0;
        let rotateY = 0; 
        
        // المسافات بين الشرائح لتظهر متقاربة ومرتبة
        const spacing = 130; 
        const proximity = 100;

        if (offset === 0) {
            // الشريحة النشطة (المركز)
            opacity = 1;
            scale = 1; 
            zIndex = 10;
            translateX = 0;
            rotateY = 0;
        } else if (Math.abs(offset) === 1) {
            // الشرائح المجاورة للنشطة
            opacity = 0.8;
            scale = 0.9;
            zIndex = 5;
            translateX = offset * proximity; 
            rotateY = offset > 0 ? -5 : 5; 
        } else if (Math.abs(offset) === 2) {
            // الشرائح الأبعد قليلاً
            opacity = 0.4;
            scale = 0.8;
            zIndex = 2;
            // يتم دفعها للخارج مع إضافة تأثير المنظور
            translateX = offset * spacing; 
            rotateY = offset > 0 ? -10 : 10; 
        } else if (Math.abs(offset) === 3) {
            // الشرائح الأبعد
            opacity = 0.2;
            scale = 0.7;
            zIndex = 1;
            translateX = offset * (spacing + 30);
            rotateY = offset > 0 ? -15 : 15;
        } else {
            // الشرائح المخفية (التي لا نحتاجها في العرض)
            opacity = 0; 
            scale = 0.6;
            zIndex = 0;
            translateX = offset * (spacing + 50);
            rotateY = offset > 0 ? -20 : 20;
        }
        
        return {
            opacity: opacity,
            // تطبيق التحويلات
            transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
            zIndex: zIndex,
            transition: isTransitioning ? 'all 0.6s ease-in-out' : 'none', // التحكم في الانتقال هنا
            filter: `brightness(${opacity + 0.5})`, // لجعلها أغمق قليلاً عندما تكون شفافة
        };
    };

    return (
        <section className="bg-white py-16 md:py-24 px-4 font-[Inter]" style={{ direction: 'rtl' }}>
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#1a2d52]">
                    معرض الأعمال{' '}
                    <span className="inline-block w-8 h-8 bg-[#1a2d52] ml-2 rtl:mr-2 align-middle"></span>
                </h2>

                <div className="relative overflow-hidden pt-10 pb-16">
                    {/* Container for the custom carousel slides */}
                    <div 
                        ref={carouselRef}
                        className="flex justify-center items-center h-[450px] md:h-[550px]"
                        style={{ 
                            perspective: '1000px', 
                            transition: isTransitioning ? 'all 0.6s ease-in-out' : 'none',
                        }}
                    >
                        {portfolioItems.map((item, index) => (
                            <div 
                                key={index} // نستخدم الـ index لأنه يمكن أن تتكرر الـ id
                                onClick={() => setCurrentIndex(index)}
                                className={`absolute w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl shadow-xl overflow-hidden cursor-pointer bg-white`}
                                style={{ 
                                    ...getSlideStyle(index),
                                    // تمركز الشريحة في المنتصف ثم تطبيق الـ translateX
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) ${getSlideStyle(index).transform}`,
                                }}
                            >
                                <img
                                    src={item.imgSrc}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/e0e0e0/555555?text=Image+Error"; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <span className="text-white text-xl font-bold">{item.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows (أزرار التنقل) */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 hover:bg-[#1a2d52] text-[#1a2d52] hover:text-white rounded-full z-40 transition shadow-lg mr-4"
                        aria-label="Previous Slide"
                    >
                        {/* Arrow Left (for RTL previous button) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 hover:bg-[#1a2d52] text-[#1a2d52] hover:text-white rounded-full z-40 transition shadow-lg ml-4"
                        aria-label="Next Slide"
                    >
                        {/* Arrow Right (for RTL next button) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

                <div className="mt-16 text-center">
                    <Link href={'/project'} className="bg-[#1a2d52] hover:bg-[#1a2d529d] cursor-pointer text-white font-bold py-3 px-10 rounded-full transition duration-300 text-xl shadow-lg transform hover:scale-105">
                        إستعراض المزيد
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
