const AboutUsSection = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-[#1a2d52] to-[#243b7a] text-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8 text-right">
          <p className="text-lg leading-relaxed">
            سكوير للمهندسة والديكور هو مكتب متخصص في تقديم الخدمات الهندسية من التصميم والتنفيذ للمشاريع السكنية والتجارية، بما في ذلك التصميم المعماري، والتصميم الداخلي، والديكور، والإنشاءات الهندسية...
          </p>
          <p className="text-lg leading-relaxed">
            في سكوير للمهندسة والديكور نضع بين أيديكم خبرتنا في مجال الأعمال الهندسية والمقاولات وأعمال البناء والتشييد وأعمال التشطيبات الداخلية والديكور...
          </p>
        </div>
      </div>

      {/* منحنى سفلي مائل نحو اليمين */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C400,150 900,-50 1200,100 L1200,120 L0,120 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutUsSection;
