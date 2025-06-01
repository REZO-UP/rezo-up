
import React from 'react';

interface LogoArrowProps {
  className?: string;
  size?: number;
}

const LogoArrow: React.FC<LogoArrowProps> = ({ className = '', size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <path 
        d="M7 17L17 7M17 7H7M17 7V17" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoArrow;
