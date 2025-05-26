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
    <div className="relative inline-block mx-2 my-2">      <div 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}        className={`
          relative w-[250px] h-[120px] flex items-center justify-center 
          text-white text-center cursor-pointer
          transition-all duration-300 drop-shadow-2xl
        `}
      >        {/* Background shapes handling */}
        <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 2px 15px 20px 1px"}}
          className={`
            absolute w-full h-full rounded-[20px]
            ${showActiveStyle ? 'bg-[#00A96E]' : 'bg-[#074D36]'}
            transition-colors duration-500 ease-in-out
          `}
        />          {/* Inner oval shape when active/hovered */}
        <div          className={`
            absolute w-[220px] h-[138px] bg-[#00A96E]
            transition-all duration-500 ease-in-out
            ${showActiveStyle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}
          style={{
            top: '14px',
            left: '15px',
            borderRadius: '76.5px',
            zIndex: 0,
            transformOrigin: 'top center'
          }}
        />
          {/* Text content positioned above background elements */}
        <span 
          className={`
            relative z-10 
            transition-all duration-500 ease-in-out
            ${showActiveStyle ? 'transform scale-105' : ''}
          `}          style={{
            fontFamily: 'Gideon Roman, serif',
            fontWeight: 400,
            fontSize: '29.27px',
            lineHeight: '35.27px',
            letterSpacing: '0%',
            textAlign: 'center',
            width: '90%',
            wordBreak: 'break-word',
            hyphens: 'auto'
          }}
        >
          {programName}
        </span>
      </div>
        {/* Bottom tail for active/hover state */}
      <div
        className={`
          absolute left-1/2 transform -translate-x-1/2 w-[80px] h-[25px] bg-[#00A96E]
          transition-all duration-500 ease-in-out
          ${showActiveStyle ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
        style={{
          bottom: '-15px', // Position below the button to create a protruding tail
          borderRadius: '0 0 40px 40px', // Creates a more pronounced curved tail shape
          pointerEvents: 'none', // Ensures the tail doesn't interfere with button clicks
          transformOrigin: 'top'
        }}
      />
    </div>
  );
};

export default ProgramButton;
