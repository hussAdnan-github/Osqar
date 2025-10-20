import Image from 'next/image';
 

const ServiceCard = ({ iconSrc, title, description } ) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4">
        <Image
          src={`/1.jpg`}
          alt={title}
          width={200}  
          height={200}  
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#1a2d52]">{title}</h3>
      <p className="text-[#1a2d52] text-sm leading-relaxed text-start">{description}</p>
    </div>
  );
};

export default ServiceCard;