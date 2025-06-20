// "use client";

// import React, { useState } from "react";
// import "./AdmissionCard.css";
// import Link from "next/link";

// export default function AdmissionCard({ image, text, highlight = false }) {
//   const [hovered, setHovered] = useState(false);

//   // Card height
//   const cardHeight = 300;
//   // Height of the text overlay (in px)
//   const overlayHeight = hovered || highlight ? cardHeight : Math.round(cardHeight * 0.3);

//   return (
//     <div
//       className={`relative w-full h-[${cardHeight}px] rounded-none overflow-hidden flex items-end justify-center cursor-pointer transition-all duration-300 shadow-md admissionCardContainer ${
//         highlight ? "bg-[#FFDB93]" : "bg-[#075037]"
//       }`}
//       style={{ maxWidth: 270, height: cardHeight }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image always visible, but overlay covers part of it */}
//       {!highlight && (
//         <img
//           src={image}
//           alt={text}
//           className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
//         />
//       )}
//       {/* Overlay for text, grows on hover */}
//       <div
//         className={`absolute left-0 w-full z-10 flex items-center justify-center transition-all duration-300 ${
//           highlight || hovered ? "bg-[#FFDB93]" : "bg-[#075037]"
//         }`}
//         style={{
//           bottom: 0,
//           height: overlayHeight,
//           backgroundColor: highlight || hovered ? "#FFDB93" : "#075037",
//         }}
//       >
//         <span
//           className={`text-3xl md:text-2xl font-normal text-center px-4 transition-all duration-300`}
//           style={{
//             fontFamily: "Gideon Roman, serif",
//             color: highlight || hovered ? "#075037" : "#fff",
//             transition: 'color 0.3s',
//           }}
//         >
//           {text}
//         </span>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import "./AdmissionCard.css";
// import Link from "next/link";

// export default function AdmissionCard({ image, text, highlight = false, href }) {
//   const [hovered, setHovered] = useState(false);

//   // Card height
//   const cardHeight = 250;
//   // Height of the text overlay (in px)
//   const overlayHeight = hovered || highlight ? cardHeight : Math.round(cardHeight * 0.3);

//   // Card content (preserves all existing functionality)
//   const cardContent = (
//     <div
//       className={`relative w-full h-[${cardHeight}px] rounded-none overflow-hidden flex items-end justify-center cursor-pointer transition-all duration-300 shadow-md admissionCardContainer ${
//         highlight ? "bg-[#FFDB93]" : "bg-[#075037]"
//       }`}
//       style={{ maxWidth: 270, height: cardHeight }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image always visible, but overlay covers part of it */}
//       {!highlight && (
//         <img
//           src={image}
//           alt={text}
//           className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
//         />
//       )}
//       {/* Overlay for text, grows on hover */}
//       <div
//         className={`absolute left-0 w-full z-10 flex items-center justify-center transition-all duration-300 ${
//           highlight || hovered ? "bg-[#FFDB93]" : "bg-[#075037]"
//         }`}
//         style={{
//           bottom: 0,
//           height: overlayHeight,
//           backgroundColor: highlight || hovered ? "#FFDB93" : "#075037",
//         }}
//       >
//         <span
//           className={`text-3xl md:text-2xl font-normal text-center px-4 transition-all duration-300`}
//           style={{
//             fontFamily: "Gideon Roman, serif",
//             color: highlight || hovered ? "#075037" : "#fff",
//             transition: 'color 0.3s',
//           }}
//         >
//           {text}
//         </span>
//       </div>
//     </div>
//   );

//   // Return either a Link or the div based on whether href is provided
//   return href ? (
//     <Link href={href} className="block w-full">
//       {cardContent}
//     </Link>
//   ) : (
//     cardContent
//   );
// }

"use client";

import React, { useState } from "react";
import "./AdmissionCard.css";
import Link from "next/link";

export default function AdmissionCard({ image, text, highlight = false, href }) {
  const [hovered, setHovered] = useState(false);
  
  // Card dimensions
  const cardWidth = 270; // Fixed width for all cards
  const cardHeight = 220;
  const overlayHeight = hovered || highlight ? cardHeight : Math.round(cardHeight * 0.3);

  // Card content
  const cardContent = (
    <div 
      className={`relative rounded-lg overflow-hidden flex items-end justify-center cursor-pointer transition-all duration-300 shadow-lg admissionCardContainer ${
        highlight ? "bg-[#FFDB93] transform scale-105" : "bg-[#075037]"
      }`}
      style={{ 
        width: cardWidth, 
        height: cardHeight 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      {!highlight && (
        <img
          src={image}
          alt={text}
          className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
        />
      )}
      
      {/* Text Overlay */}
      <div
        className={`absolute left-0 w-full z-10 flex items-center justify-center transition-all duration-300 ${
          highlight || hovered ? "bg-[#FFDB93]" : "bg-[#075037]"
        }`}
        style={{
          bottom: 0,
          height: overlayHeight,
          backgroundColor: highlight || hovered ? "#FFDB93" : "#075037",
        }}
      >
        <span
          className={`text-3xl md:text-2xl font-normal text-center px-4 transition-all duration-300`}
          style={{
            fontFamily: "Gideon Roman, serif",
            color: highlight || hovered ? "#075037" : "#fff",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );

  // Return either Link or div
  return href ? (
    <div className="mx-8 mt-[-150]" style={{ width: cardWidth }}>
      <Link href={href} className="block w-full">
        {cardContent}
      </Link>
    </div>
  ) : (
    <div className="mx-8 mt-[-150]" style={{ width: cardWidth }}>
      {cardContent}
    </div>
  );
}