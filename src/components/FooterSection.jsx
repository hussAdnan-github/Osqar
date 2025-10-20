import Image from 'next/image';
import Link from 'next/link';
  import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="bg-[#464450]  text-gray-200 py-24   md:py-20 px-24"> {/* Adjusted background color */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> {/* Two columns layout */}
        <div className="text-right flex flex-col items-start">
          <div className="mb-8"> 
             <Image src="/footer-logo.png" alt="Square Logo" width={180} height={60} /> {/* Adjust path and size */}
           
          </div>

          <p className="text-lg leading-relaxed mb-6">
            اختر الشريك المثالي لتنفيذ مشروعك <br /> وكل ثقة تأكد انه الأفضل دائماً.
          </p>
          <p className="text-md mb-4">
            لمزيد من المعلومات والخدمات يمكن <br /> التواصل عبر الرسائل أو الإتصال المباشر
          </p>
          <div className="mb-8"> {/* Bottom margin for phone numbers */}
            <p className="text-xl font-semibold mb-2">+967 733088858</p>
            <p className="text-xl font-semibold">+967 772675789</p>
          </div>

          {/* Social Media Icons - direct from image */}
          <div className="flex  gap-2"> {/* Smaller space-x */}
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <div className="bg-gray-700 p-2 rounded-full hover:bg-[#1a2d52] w-10 h-10 flex items-center justify-center"> {/* Smaller size */}
           <FaXTwitter />

              </div>
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <div className="bg-gray-700 p-2 rounded-full hover:bg-[#1a2d52] w-10 h-10 flex items-center justify-center">
               <FaYoutube />

              </div>
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <div className="bg-gray-700 p-2 rounded-full hover:bg-[#1a2d52] w-10 h-10 flex items-center justify-center">
             <FaInstagram />

              </div>
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <div className="bg-gray-700 p-2 rounded-full hover:bg-[#1a2d52] w-10 h-10 flex items-center justify-center">
                <FaFacebook />

              </div>
            </Link>
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            العنوان / المكلا - شارع النصر الصيني <br /> عمارة بن هلابي - الدور الثالث
          </h3>
          <div className="w-full h-72 bg-gray-700 rounded-lg overflow-hidden mt-6 shadow-md"> {/* Adjusted map height */}
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.606307613615!2d49.123281149999995!3d14.5428945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1634b35e2b02e64b%3A0x8f782c161a0b38c0!2z2KjYudiq2Iwg2YXYudin2Yc!5e0!3m2!1sar!2sye!4v1678888888888!5m2!1sar!2sye"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>



      </div>
       <div className="border-t border-[#30303c] mt-16 pt-0  "></div> {/* Line only */}
    </footer>
  );
};

export default FooterSection;