"use client";

import React, { useState } from 'react';

const ProgramButton = ({ programName, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const showActiveStyle = isActive || isHovered;

  // Styles based on specific dimensions from the design
  // Button: width: 283px; height: 120px;
  // Inner oval: width: 241px; height: 138px; top: 14px; left: 21px; border-radius: 76.5px;
  
  return (
    // Wrapper div to correctly position the components relative to each other
    <div className="relative inline-block mx-2 my-2"> 
      <div 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-[283px] h-[120px] flex items-center justify-center 
          font-gideon text-white font-semibold text-center cursor-pointer text-2xl
          transition-all duration-300 shadow-lg
        `}
      >
        {/* Background shapes handling */}
        <div 
          className={`
            absolute w-full h-full rounded-[20px]
            ${showActiveStyle ? 'bg-[#00A96E]' : 'bg-[#074D36]'}
          `}
        />
        
        {/* Inner oval shape when active/hovered */}
        {showActiveStyle && (
          <div
            className="absolute w-[241px] h-[138px] bg-[#00A96E]"
            style={{
              top: '14px',
              left: '21px',
              borderRadius: '76.5px',
              zIndex: 0
            }}
          />
        )}
        
        {/* Text content positioned above background elements */}
        <span className="relative z-10">{programName}</span>
      </div>
      
      {/* Bottom tail for active/hover state */}
      {showActiveStyle && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-[80px] h-[25px] bg-[#00A96E]"
          style={{
            bottom: '-15px', // Position below the button to create a protruding tail
            borderRadius: '0 0 40px 40px', // Creates a more pronounced curved tail shape
            pointerEvents: 'none', // Ensures the tail doesn't interfere with button clicks
          }}
        />
      )}
    </div>
  );
};

export default ProgramButton;
