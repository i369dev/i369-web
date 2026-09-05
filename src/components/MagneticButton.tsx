import React, { useRef, useState, useCallback } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'dark' | 'outline';
  pullStrength?: number; // Strength of magnetic pull (default: 0.25)
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  pullStrength = 0.28,
  className = '',
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * pullStrength;
      const deltaY = (e.clientY - centerY) * pullStrength;

      setPosition({ x: deltaX, y: deltaY });
    },
    [pullStrength]
  );

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-black text-white border border-black/80 hover:bg-[#FFA500] hover:text-black hover:border-[#FFA500] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(255,165,0,0.3)]';
      case 'secondary':
        return 'bg-white/80 backdrop-blur-md text-black border border-black/20 hover:border-black hover:bg-white shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]';
      case 'glass':
        return 'bg-white/15 backdrop-blur-lg text-white border border-white/30 hover:bg-white/25 hover:border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]';
      case 'dark':
        return 'bg-[#111]/90 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black hover:border-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)]';
      case 'outline':
        return 'bg-transparent text-current border border-current hover:bg-current/10';
      default:
        return 'bg-black text-white hover:bg-[#FFA500] hover:text-black';
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.12s ease-out, background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
          : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        willChange: 'transform',
      }}
      className={`relative inline-flex items-center justify-center font-mono-code font-bold uppercase tracking-widest text-xs transition-all duration-200 cursor-pointer overflow-hidden rounded-none ${getVariantStyles()} ${className}`}
      {...props}
    >
      {/* Subtle shine sweep on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
