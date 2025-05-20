import React from 'react';
import Image from 'next/image';

const BeyondClassroomCard = ({ title, subtitle, imageSrc, width, height }) => {
  return (
    <div
      className="overflow-hidden rounded-tl-full rounded-tr-full drop-shadow-2xl relative transition-all"
      style={{
        width: width || '100%',
        height: height || 'auto',
        aspectRatio: height ? 'auto' : '0.7', // Set a proper aspect ratio instead of using padding
        maxWidth: '589px',
        maxHeight: '827px',
      }}
    >
      <div className="relative w-full h-full rounded-tl-full rounded-tr-full overflow-hidden group">
        {/* Background image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        
        {/* Gradient overlay using an image, changes on hover */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40%] transition-all duration-1000 group-hover:h-[75%] group-hover:opacity-100" // Animates height
        >
          <Image
            src="/image/home/bcr_cardGradient.png"
            alt="Card gradient overlay"
            fill
            style={{ objectFit: "cover" }}
            // className="opacity-100 group-hover:opacity-100 transition-opacity duration-1000"
          />
        </div>
          {/* Text overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8">
          <h3 
            className="mb-1 md:mb-2" 
            style={{ 
              fontFamily: 'Gideon Roman',
              fontWeight: 400,
              fontSize: '60.68px',
              lineHeight: '61.06px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#FFDB93',
              textAlign: 'left',
            }}
          >
            {title}
          </h3>
          <p 
            className="font-normal"
            style={{
              fontFamily: 'Gideon Roman',
              fontWeight: 400,
              fontSize: '43.44px',
              lineHeight: '79.65px',
              letterSpacing: '0%',
              textAlign: 'left',
              textTransform: 'capitalize',
              color: '#FFFFFF', // Assuming subtitle color remains white, if not specified
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeyondClassroomCard;
