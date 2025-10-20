import ServiceCard from './ServiceCard.jsx';

const ServicesSection = () => {
  const services = [
    {
      iconSrc: '/1.jpg', // Example path, adjust as needed
      title: 'تشييد وبناء',
      description: 'تنفيذ الأعمال الإنشائية والتشطيبات الداخلية والخارجية للمباني السكنية والتجارية.',
    },
    {
      iconSrc: '/1.jpg', // Example path
      title: 'تخطيط عمراني',
      description: 'تصميم المساحات الخارجية والحدائق والمرافق العامة وإعادة تصميم الحلول العملية والمبتكرة في التخصص العام.',
    },
    {
      iconSrc: '/1.jpg', // Example path
      title: 'تصميم وديكور',
      description: 'نقدم لعملائنا التصميم المثالي الذي يحقق رؤياهم من خلال إبراز الأفكار المبتكرة والمناسبة لإستخدامهم اليومي مع تقديم أفضل التنفيذ.',
    },
    {
      iconSrc: '/1.jpg', // Example path
      title: 'هندسة معمارية',
      description: 'نعمل على تصميم المخططات المعمارية والإنشائية التي تلبي جميع متطلبات الإستخدام بمختلف القياسات.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1a2d52]">
          خدماتنا{' '}
          <span className="inline-block w-8 h-8 bg-[#1a2d52] ml-2 rtl:mr-2 align-middle"></span> {/* Small blue rectangle for decoration */}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* The horizontal blue bar at the bottom */}
        <div className="mt-16 text-center flex justify-center items-center gap-8">
          <h3 className="text-3xl font-bold text-white px-20 py-4  bg-[#3a4191]">هنا يبدأ تحقيق الأحلام</h3>
          <span className="inline-block w-16 h-16 bg-[#1a2d52] ml-2 rtl:mr-2 align-middle"></span> {/* Small blue rectangle for decoration */}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;