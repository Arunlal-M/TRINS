import React from 'react';
import Image from 'next/image';

const AccreditationSection = () => {
  return (
    <div className="w-full bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 
          className="text-center text-[#16513F] mb-8 md:mb-12"
          style={{
            fontFamily: 'Gideon Roman',
            fontWeight: '400',
            fontSize: '48px',
            lineHeight: '60.52px',
            letterSpacing: '0%',
            textTransform: 'uppercase',
          }}
        >
          ACCREDITATIONS & AFFILIATIONS
        </h2>
        <div className="w-full">
          <Image 
            src="/image/home/Accreditation_N_Affiliations.png" 
            alt="Accreditation and Affiliations" 
            width={1982} 
            height={422} 
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccreditationSection;
