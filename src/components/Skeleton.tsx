import React from 'react';
import '../../styles/tailwind.css';

export interface SkeletonProps {
  /**
   * Width of the skeleton (can be any valid CSS width)
   */
  width?: string | number;
  
  /**
   * Height of the skeleton (can be any valid CSS height)
   */
  height?: string | number;
  
  /**
   * Border radius of the skeleton
   * @default "0.25rem" (rounded)
   */
  borderRadius?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Animation duration in seconds
   * @default 2
   */
  animationDuration?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  borderRadius = '0.25rem',
  className = '',
  animationDuration = 2,
}) => {
  // Convert number values to pixel strings
  const widthValue = typeof width === 'number' ? `${width}px` : width;
  const heightValue = typeof height === 'number' ? `${height}px` : height;
  
  const style: React.CSSProperties = {
    width: widthValue,
    height: heightValue,
    borderRadius,
    animationDuration: `${animationDuration}s`,
  };

  return (
    <div
      className={`skeleton ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

// Variant for text paragraph with multiple lines
export interface SkeletonTextProps {
  /**
   * Number of lines to display
   * @default 3
   */
  lines?: number;
  
  /**
   * Height of each line
   * @default "1rem"
   */
  lineHeight?: string | number;
  
  /**
   * Space between lines
   * @default "0.5rem"
   */
  spacing?: string | number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Make the last line shorter (percentage of full width)
   * @default 80
   */
  lastLineWidth?: number;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 3,
  lineHeight = '1rem',
  spacing = '0.5rem',
  className = '',
  lastLineWidth = 80,
}) => {
  // Convert number values to pixel strings
  const lineHeightValue = typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight;
  const spacingValue = typeof spacing === 'number' ? `${spacing}px` : spacing;

  return (
    <div className={`w-full ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          height={lineHeightValue}
          width={index === lines - 1 && lastLineWidth < 100 ? `${lastLineWidth}%` : '100%'}
          className={index < lines - 1 ? `mb-${spacingValue}` : ''}
        />
      ))}
    </div>
  );
};