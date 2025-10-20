


import Navbar from '@/components/Navbar'
import './globals.css'
import React from 'react'

import { Cairo } from 'next/font/google';  

 const cairo = Cairo({
  subsets: ['arabic', 'latin'], // حدد مجموعة الأحرف المطلوبة
  weight: ['400', '700'], // حدد الأوزان المطلوبة
  display: 'swap', // لتحسين الأداء البصري
});
export const metadata = {
  title: 'Square - الهندسة والديكور',
  description: 'Square Engineering & Decoration',
}


export default function RootLayout({ children } ) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
            <Navbar />
        
        {children}</body>
    </html>
  )
}
