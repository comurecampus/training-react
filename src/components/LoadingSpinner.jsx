import React from 'react';

/**
 * LoadingSpinner component
 * Mendukung berbagai ukuran (sm, md, lg) dan warna tema
 */
export const LoadingSpinner = ({ size = 'md', text = '', color = 'currentColor' }) => {
  const sizeMap = {
    sm: '16px',
    md: '24px',
    lg: '36px',
  };

  const dimension = sizeMap[size] || sizeMap.md;

  return (
    <div className="spinner-wrapper" role="status" aria-label="Memuat">
      <svg
        className="animate-spin"
        style={{
          width: dimension,
          height: dimension,
          animation: 'spin 0.85s linear infinite',
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="3"
          strokeOpacity="0.2"
        />
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 13.6569 2.40356 15.2198 3.11805 16.59"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {text && <span className="spinner-text">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;

