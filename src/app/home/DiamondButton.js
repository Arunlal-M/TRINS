// import React from 'react';
// import './DiamondButton.css';

// /**
//  * DiamondButton Component
//  * @param {Object} props
//  * @param {string} props.number - The number to display inside the diamond (01-05)
//  * @param {string} props.title - The program title to display below the diamond
//  * @param {string} props.ageRange - The age range text to display
//  * @param {boolean} props.isActive - Whether this diamond is active/selected
//  * @param {Function} props.onClick - Click handler function
//  */
// const DiamondButton = ({ number, title, ageRange, isActive = false, onClick, isFirst = false, isLast = false }) => {
//     // Check if the title is likely to be a single line (fewer than 14 characters)
//     const isSingleLineTitle = title.length < 14;
    
//     return (
//         <div className="diamond-container">
//             <div className="relative flex items-center justify-center">
//                 {/* Only show line before diamond if not the first diamond */}
//                 {!isFirst && (
//                     <div className="connecting-line left"></div>
//                 )}
                
//                 <div
//                     className={`diamond-button ${isActive ? 'active' : ''}`}
//                     onClick={onClick}
//                 >
//                     <span className={`diamond-number ${isActive ? 'active' : ''}`}>
//                         {number}
//                     </span>
//                 </div>
                
//                 {/* Only show line after diamond if not the last diamond */}
//                 {!isLast && (
//                     <div className="connecting-line right"></div>
//                 )}
//             </div>
//             <div className={`diamond-text ${isSingleLineTitle ? 'single-line-title' : ''}`}>
//                 <h4 className="diamond-title">{title}</h4>
//                 <p className="diamond-age">{ageRange}</p>
//             </div>
//         </div>
//     );
// };

// export default DiamondButton;
import React from 'react';
import './DiamondButton.css';

/**
 * DiamondButton Component
 * @param {Object} props
 * @param {string} props.number - The number to display inside the diamond (01-05)
 * @param {string} props.title - The program title to display below the diamond
 * @param {string} props.ageRange - The age range text to display
 * @param {boolean} props.isActive - Whether this diamond is active/selected
 * @param {Function} props.onClick - Click handler function (for the title only)
 */
const DiamondButton = ({
  number,
  title,
  ageRange,
  isActive = false,
  onDiamondClick,
  onTitleClick,
  isFirst = false,
  isLast = false,
}) => {
  // Check if the title is likely to be a single line (fewer than 14 characters)
  const isSingleLineTitle = title.length < 14;

  return (
    <div className="diamond-container max-w-[300px] md:max-w-[350px]">
      <div className="relative flex items-center justify-center">
        {/* Only show line before diamond if not the first diamond */}
        {!isFirst && <div className="connecting-line left"></div>}

        <div className={`diamond-button ${isActive ? 'active' : ''}`}
        onClick={onDiamondClick}
        >
          <span className={`diamond-number ${isActive ? 'active' : ''}`}>
            {number}
          </span>
        </div>

        {/* Only show line after diamond if not the last diamond */}
        {!isLast && <div className="connecting-line right"></div>}
      </div>
      <div className={`diamond-text ${isSingleLineTitle ? 'single-line-title' : ''}`}>
        <h4
          className="diamond-title hover:underline cursor-pointer"
          onClick={onTitleClick}
        >
          {title}
        </h4>
        <p className="diamond-age">{ageRange}</p>
      </div>
    </div>
  );
};

export default DiamondButton;