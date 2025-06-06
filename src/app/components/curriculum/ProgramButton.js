// "use client";

// import React, { useState } from 'react';

// const ProgramButton = ({ programName, onClick, isActive }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const showActiveStyle = isActive || isHovered;

//   // Styles based on specific dimensions from the design
//   // Button: width: 283px; height: 120px;
//   // Inner oval: width: 241px; height: 138px; top: 14px; left: 21px; border-radius: 76.5px;

//   return (
//     // Wrapper div to correctly position the components relative to each other
//     <div className="relative inline-block mx-2 my-2">      <div 
//         onClick={onClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}        className={`
//           relative w-[250px] h-[120px] flex items-center justify-center 
//           text-white text-center cursor-pointer
//           transition-all duration-300 drop-shadow-2xl
//         `}
//       >        {/* Background shapes handling */}
//         <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 2px 15px 20px 1px"}}
//           className={`
//             absolute w-full h-full rounded-[20px]
//             ${showActiveStyle ? 'bg-[#00A96E]' : 'bg-[#074D36]'}
//             transition-colors duration-500 ease-in-out
//           `}
//         />          {/* Inner oval shape when active/hovered */}
//         <div          className={`
//             absolute w-[220px] h-[138px] bg-[#00A96E]
//             transition-all duration-500 ease-in-out
//             ${showActiveStyle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
//           `}
//           style={{
//             top: '14px',
//             left: '15px',
//             borderRadius: '76.5px',
//             zIndex: 0,
//             transformOrigin: 'top center'
//           }}
//         />
//           {/* Text content positioned above background elements */}
//         <span 
//           className={`
//             relative z-10 
//             transition-all duration-500 ease-in-out
//             ${showActiveStyle ? 'transform scale-105' : ''}
//           `}          style={{
//             fontFamily: 'Gideon Roman, serif',
//             fontWeight: 400,
//             fontSize: '29.27px',
//             lineHeight: '35.27px',
//             letterSpacing: '0%',
//             textAlign: 'center',
//             width: '90%',
//             wordBreak: 'break-word',
//             hyphens: 'auto'
//           }}
//         >
//           {programName}
//         </span>
//       </div>
//         {/* Bottom tail for active/hover state */}
//       <div
//         className={`
//           absolute left-1/2 transform -translate-x-1/2 w-[80px] h-[25px] bg-[#00A96E]
//           transition-all duration-500 ease-in-out
//           ${showActiveStyle ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
//         `}
//         style={{
//           bottom: '-15px', // Position below the button to create a protruding tail
//           borderRadius: '0 0 40px 40px', // Creates a more pronounced curved tail shape
//           pointerEvents: 'none', // Ensures the tail doesn't interfere with button clicks
//           transformOrigin: 'top'
//         }}
//       />
//     </div>
//   );
// };

// export default ProgramButton;


// "use client";
// import React, { useState } from 'react';

// const ProgramButton = ({ programName, onClick, isActive, hasSubMenu, isExpanded }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const showActiveStyle = isActive || isHovered;

//   return (
//     <div className="relative inline-block mx-2 my-2">
//       <div 
//         onClick={onClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`
//           relative w-[250px] h-[120px] flex items-center justify-center 
//           text-white text-center cursor-pointer
//           transition-all duration-300 drop-shadow-2xl
//         `}
//       >
//         {/* Background shapes handling */}
//         <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 2px 15px 20px 1px"}}
//           className={`
//             absolute w-full h-full rounded-[20px]
//             ${showActiveStyle ? 'bg-[#00A96E]' : 'bg-[#074D36]'}
//             transition-colors duration-500 ease-in-out
//           `}
//         />

//         {/* Inner oval shape when active/hovered */}
//         <div
//           className={`
//             absolute w-[220px] h-[138px] bg-[#00A96E]
//             transition-all duration-500 ease-in-out
//             ${showActiveStyle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
//           `}
//           style={{
//             top: '14px',
//             left: '15px',
//             borderRadius: '76.5px',
//             zIndex: 0,
//             transformOrigin: 'top center'
//           }}
//         />

//         {/* Text content positioned above background elements */}
//         <div className="relative z-10 flex flex-col items-center">
//           <span 
//             className={`
//               transition-all duration-500 ease-in-out
//               ${showActiveStyle ? 'transform scale-105' : ''}
//             `}
//             style={{
//               fontFamily: 'Gideon Roman, serif',
//               fontWeight: 400,
//               fontSize: '29.27px',
//               lineHeight: '35.27px',
//               letterSpacing: '0%',
//               textAlign: 'center',
//               width: '90%',
//               wordBreak: 'break-word',
//               hyphens: 'auto'
//             }}
//           >
//             {programName}
//           </span>

//           {/* Dropdown indicator */}
//           {hasSubMenu && (
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className={`mt-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
//             >
//               <path
//                 d="M19 9L12 16L5 9"
//                 stroke="#FFFFFF"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           )}
//         </div>
//       </div>

//       {/* Bottom tail for active/hover state */}
//       <div
//         className={`
//           absolute left-1/2 transform -translate-x-1/2 w-[80px] h-[25px] bg-[#00A96E]
//           transition-all duration-500 ease-in-out
//           ${showActiveStyle ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
//         `}
//         style={{
//           bottom: '-15px',
//           borderRadius: '0 0 40px 40px',
//           pointerEvents: 'none',
//           transformOrigin: 'top'
//         }}
//       />
//     </div>
//   );
// };

// export default ProgramButton;

"use client";
import React, { useState, useEffect, useRef } from 'react';

const ProgramButton = ({ programName, onClick, isActive, hasSubMenu, isExpanded, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const showActiveStyle = isActive || isHovered;

  // Handle dropdown open/close state
  useEffect(() => {
    setIsDropdownOpen(isActive && isExpanded);
  }, [isActive, isExpanded]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    onClick();
    if (hasSubMenu) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className="relative inline-block mx-2 my-2">
      <div
        ref={buttonRef}
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-[250px] h-[120px] flex items-center justify-center 
          text-white text-center cursor-pointer
          transition-all duration-300 drop-shadow-2xl
        `}
      >
        {/* Background shapes handling */}
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 2px 15px 20px 1px" }}
          className={`
            absolute w-full h-full rounded-[20px]
            ${showActiveStyle ? 'bg-[#00A96E]' : 'bg-[#074D36]'}
            transition-colors duration-500 ease-in-out
          `}
        />

        {/* Inner oval shape when active/hovered */}
        <div
          className={`
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
        <div className="relative z-10 flex flex-col items-center">
          <span
            className={`
              transition-all duration-500 ease-in-out
              ${showActiveStyle ? 'transform scale-105' : ''}
            `}
            style={{
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

          {/* Dropdown indicator */}
          {hasSubMenu && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`mt-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Bottom tail for active/hover state */}
      <div
        className={`
          absolute left-1/2 transform -translate-x-1/2 w-[80px] h-[25px] bg-[#00A96E]
          transition-all duration-500 ease-in-out
          ${showActiveStyle ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
        style={{
          bottom: '-15px',
          borderRadius: '0 0 40px 40px',
          pointerEvents: 'none',
          transformOrigin: 'top'
        }}
      />

      {/* Dropdown menu */}
      {hasSubMenu && (
        <div
          ref={dropdownRef}
          className={`
            absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 w-full
            transition-all duration-300 ease-in-out
            ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
          `}
          style={{
            minWidth: '250px'
          }}
        >
          {/* Dropdown content will be rendered here by parent component */}
          {isDropdownOpen && (
            <div className="py-1">
              {React.Children.map(children, child =>
                React.cloneElement(child, {
                  className: `${child.props.className} w-full`
                })
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgramButton;
