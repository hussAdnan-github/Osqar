import ServiceCard from '@/components/ServiceCard';
import React from 'react'
const cardData = [
    {
        id: 1,
        title: 'تشييد وبنا',
        description: 'تنفيذ الأعمال الإنشائية والتشطيبات الداخلية والخارجية للمباني السكنية والتجارية.',
        imgSrc: '/1.jpg',
    },
    {
        id: 2,
        title: 'تشييد وبنا',
        description: 'تنفيذ الأعمال الإنشائية والتشطيبات الداخلية والخارجية للمباني السكنية والتجارية.',
        imgSrc: '/1.jpg',
    },
    {
        id: 3,
        title: 'تشييد وبنا',
        description: 'تنفيذ الأعمال الإنشائية والتشطيبات الداخلية والخارجية للمباني السكنية والتجارية.',
        imgSrc: '/1.jpg',
    },
    {
        id: 4,
        title: 'تشييد وبنا',
        description: 'تنفيذ الأعمال الإنشائية والتشطيبات الداخلية والخارجية للمباني السكنية والتجارية.',
        imgSrc: '/1.jpg',
    },
];
export default function page() {
   return (
        <section className="bg-gray-50 py-16 md:py-24 px-4 font-[Inter]" style={{ direction: 'rtl' }}>
            <div className="container mx-auto max-w-7xl">
                
                {/* Section Header */}
                <header className="text-center mb-16">
                    <p className="text-lg font-semibold text-amber-600 mb-2">خدماتنا المتميزة</p>
                    <h2 className="text-5xl font-extrabold text-[#1a2d52]">
                        إبداع يلبي احتياجاتك
                    </h2>
                    <div className="w-20 h-1 bg-[#1a2d52] mx-auto mt-4 rounded-full"></div>
                </header>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {cardData.map((card) => (
                        <ServiceCard 
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            imgSrc={card.imgSrc}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
