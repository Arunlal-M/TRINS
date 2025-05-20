import React from 'react';
import Link from 'next/link';

const RoundedActionButton = ({
  text,
  icon, // Expecting a ReactNode. For SVGs to change color on hover, they should use `currentColor`.
  href,
  onClick,
  className = 'w-28 h-28', // Default size, similar to footer buttons, can be overridden
  iconContainerClassName = 'mb-1',
  textClassName = 'text-sm font-medium',
}) => {
  const baseClasses =
    'rounded-full flex flex-col items-center justify-center p-3 group transition-colors duration-300 ease-in-out';
  const defaultStateClasses = 'bg-[#E3C274] text-neutral-800'; // Default BG and text color
  const hoverStateClasses = 'hover:bg-[#127658] hover:text-white'; // Hover BG and text (incl. SVG if using currentColor)

  const buttonContent = (
    <>
      {icon && <div className={iconContainerClassName}>{icon}</div>}
      <span className={textClassName}>{text}</span>
    </>
  );

  const combinedClasses = `${baseClasses} ${defaultStateClasses} ${hoverStateClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {buttonContent}
    </button>
  );
};

export default RoundedActionButton;
