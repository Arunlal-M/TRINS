import React from 'react';
import Link from 'next/link';

const ReadMoreButton = ({
  text = 'Read More',
  href = '#',
  onClick,
  className = '',
  bgColor = 'bg-white',
  hoverColor = 'hover:bg-[#6cff97]',
}) => {
  const commonClasses = `
    w-[132.09px] h-[38px] rounded-[35.68px]
    ${bgColor} text-black text-center font-[400] text-[20.08px]
    leading-[38px] font-[Gideon_Roman] transition-all duration-700
    flex items-center justify-between relative overflow-hidden pl-4 pr-4
    hover:pr-12 hover:w-40 ${hoverColor} group top-[4.63px] tracking-normal
  `;

  const buttonContent = (
    <>
      <span className="whitespace-nowrap flex items-center">{text}</span>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 inline-block opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 16H26"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 11L26 16L21 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  if (href && !onClick) {
    return (
      <Link href={href} className={`${commonClasses} ${className}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${commonClasses} ${className}`}>
      {buttonContent}
    </button>
  );
};

export default ReadMoreButton;
