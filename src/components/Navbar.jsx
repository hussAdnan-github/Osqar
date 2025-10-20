'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

// --- Navbar Component (شريط التنقل) ---
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // الحالة الجديدة للتمرير

    // useEffect لتحديد التمرير
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // العتبة: 50 بكسل
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // تحديد الفئات بناءً على حالة التمرير
    const navClasses = isScrolled 
        ? 'bg-white text-[#1a2d52] shadow-md' // عند التمرير: خلفية بيضاء، نص داكن
        : 'bg-transparent text-white'; // في الأعلى: خلفية شفافة، نص أبيض
    
    const linkClasses = isScrolled ? 'hover:text-amber-600' : 'hover:text-gray-300';
    const logoClasses = isScrolled ? 'text-2xl font-bold text-[#1a2d52]' : 'text-2xl font-bold text-white';

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 p-4 transition duration-300 ${navClasses}`}>
            <div className="container mx-auto flex justify-between md:justify-start items-center">
                 <div className={logoClasses}>
                    <span className="font-extrabold">
                      {/* <Image 
                      src={'/logo.png'}
                            width={60}
                            height={60}
                            alt={` Logo`}/> */}
                            LOGO
                    </span>
                </div>

                {/* Desktop Links */}
                <ul className="hidden ms-10   space-x-8 md:flex gap-4 rtl:space-x-reverse font-medium">
                    {/* تم استبدال Link بـ a */}
                    <li><a href="#home" className={`transition ${linkClasses}`}>الرئيسية</a></li>
                    <li><a href="#about" className={`transition ${linkClasses}`}>سكوير</a></li>
                    <li><a href="#services" className={`transition ${linkClasses}`}>خدماتنا</a></li>
                    <li><a href="#work" className={`transition ${linkClasses}`}>الأعمال</a></li>
                    {/* <li><a href="#contact" className={`transition ${linkClasses}`}>تواصل معنا</a></li> */}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`focus:outline-none transition ${isScrolled ? 'text-[#1a2d52]' : 'text-white'}`}
                        aria-label="menu"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsOpen(false)} // إغلاق عند الضغط خارج القائمة
            ></div>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-[#1a2d52] text-white shadow-lg z-50 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-6 flex flex-col space-y-6 text-right">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="self-end text-white focus:outline-none"
                        aria-label="close menu"
                    >
                        ✕
                    </button>
                    {/* تم استبدال Link بـ a */}
                    <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-amber-500">الرئيسية</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-amber-500">سكوير</a>
                    <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-amber-500">خدماتنا</a>
                    <a href="#work" onClick={() => setIsOpen(false)} className="hover:text-amber-500">الأعمال</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-amber-500">تواصل معنا</a>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;