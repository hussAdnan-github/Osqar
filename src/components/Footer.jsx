import React from 'react'


export default function Footer(){
return (
<footer className="bg-gray-800 text-gray-200 py-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 text-right">
<h4 className="text-2xl font-bold">SQUARE</h4>
<p className="mt-4">اختر الشريك المثالي لتنفيذ مشاريعك وبكل ثقة تأكد أنه الأفضل دائما.</p>
<p className="mt-4">+967 733308858</p>
<p className="mt-1">+967 772675789</p>
</div>


<div className="text-right">
<h5 className="font-semibold">العنوان</h5>
<p className="mt-2">المكلا - شارع الجسر الصيني - عمائر بن هلالي - الدور الثالث</p>
</div>
</div>
</footer>
)
}