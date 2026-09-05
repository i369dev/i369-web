import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 6)
  scale?: number; // Scale on hover (default: 1.02)
  glareEffect?: boolean; // Whether to render dynamic reflection glare
  isDark?: boolean; // Dark glass or light glass theme
  glowColor?: string; // Optional glow color on hover
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  scale = 1.02,
  glareEffect = true,
  isDark = false,
  glowColor,
  onClick,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Calculate cursor position relative to card center (-0.5 to 0.5)
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPercent = (mouseX / width) * 100;
      const yPercent = (mouseY / height) * 100;

      const xOffset = mouseX / width - 0.5;
      const yOffset = mouseY / height - 0.5;

      const rotateX = -(yOffset * maxTilt * 2);
      const rotateY = xOffset * maxTilt * 2;

      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glareEffect) {
        setGlarePosition({
          x: xPercent,
          y: yPercent,
          opacity: 0.25,
        });
      }
    },
    [maxTilt, scale, glareEffect]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  // Base glassmorphic styling
  const glassClasses = isDark
    ? 'bg-[#111]/85 backdrop-blur-xl border border-white/15 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-white/30 hover:shadow-[0_16px_40px_0_rgba(0,0,0,0.6)]'
    : 'bg-white/85 backdrop-blur-xl border border-black/15 text-[#141414] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-black/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease-out, border-color 0.5s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className={`relative overflow-hidden group interactive-card select-none ${glassClasses} ${className}`}
      {...props}
    >
      {/* Subtle dynamic glass specular glare overlay */}
      {glareEffect && (
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 ease-out"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${
              isDark ? '0.22' : '0.45'
            }), transparent 75%)`,
            mixBlendMode: isDark ? 'screen' : 'overlay',
          }}
        />
      )}

      {/* Subtle frosted top-edge specular line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-20 ${
          isDark
            ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
            : 'bg-gradient-to-r from-transparent via-black/15 to-transparent'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
