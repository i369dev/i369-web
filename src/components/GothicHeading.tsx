import React from 'react';

interface GothicHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  tag?: string;
  level?: 1 | 2;
  variant?: 'light' | 'dark' | 'split';
  accent?: 'teal' | 'pink' | 'orange' | 'none';
  className?: string;
  stacked?: boolean;
}

export const GothicHeading: React.FC<GothicHeadingProps> = ({
  children,
  subtitle,
  tag,
  level = 1,
  variant = 'light',
  accent = 'none',
  className = '',
  stacked = false,
}) => {
  const accentColorMap = {
    teal: 'text-[#00DFD8] border-[#00DFD8]',
    pink: 'text-[#FF2D87] border-[#FF2D87]',
    orange: 'text-[#FF9900] border-[#FF9900]',
    none: 'text-zinc-500 border-zinc-500',
  };

  const textColor =
    variant === 'light'
      ? 'text-zinc-950'
      : variant === 'dark'
      ? 'text-white'
      : 'text-white';

  const headingClass = `
    font-gothic font-black tracking-tight leading-[0.9] select-none
    ${stacked ? 'flex flex-col' : 'inline-block'}
    ${level === 1 ? 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl' : 'text-3xl sm:text-4xl md:text-5xl'}
    ${textColor}
    ${className}
  `;

  return (
    <div className="relative group">
      {tag && (
        <div className="flex items-center gap-2 mb-3">
          <span className={`w-1.5 h-1.5 rotate-45 border ${accentColorMap[accent]}`} />
          <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">
            {tag}
          </span>
          <span className="h-[1px] w-8 bg-zinc-700/40" />
        </div>
      )}

      {level === 1 ? (
        <h1 className={headingClass} id={`heading-${String(children).toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
          {children}
        </h1>
      ) : (
        <h2 className={headingClass} id={`heading-${String(children).toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
          {children}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-2xl ${
          variant === 'light' ? 'text-zinc-700' : 'text-zinc-300'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
