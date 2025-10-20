import React from 'react';

 

// --- Card Component (مكون البطاقة) ---
const ServiceCard = ({ title, description, imgSrc }) => {
    return (
        <div 
            className="bg-white rounded-xl shadow-2xl overflow-hidden group 
                       transition-all duration-500 ease-in-out transform 
                       hover:scale-[1.03] hover:shadow-3xl cursor-pointer border border-gray-100"
        >
            {/* Image Container with hover effect */}
            <div className="relative overflow-hidden h-56">
                <img
                    src='/1.jpg'
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/e0e0e0/555555?text=Image+Error"; }}
                />
            </div>

            {/* Content Area */}
            <div className="p-6 text-right">
                <h3 className="text-2xl font-bold text-[#1a2d52] mb-3 group-hover:text-amber-600 transition duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {description}
                </p>
                
                {/* Optional: Read More Link/Button */}
                <div className="mt-4">
                    <a href="#" className="flex items-center justify-end text-[#1a2d52] font-semibold hover:text-amber-600 transition duration-300">
                        اكتشف المزيد
                        <svg className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 transform rotate-180 rtl:rotate-0 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};