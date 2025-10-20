'use client';
import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* الخلفية الضبابية الشفافة */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/10">
        <div className="max-w-7xl   px-6 py-3 flex-row items-center justify-end">
       

          {/* القائمة (في المنتصف لليسار) */}
          <ul    className="hidden md:flex gap-8 items-center text-sm text-white font-medium">
            <li className="hover:text-gray-300 cursor-pointer transition-colors">الرئيسية</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">سكوير</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">خدماتنا</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">الأعمال</li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors">تواصل معنا</li>
          </ul>

          {/* الشعار */}
          <div className="  items-center">
            <Image
              src="/logo-white.png" // 🔹 ضع هنا شعار سكوير الأبيض
              alt="SQUARE Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
