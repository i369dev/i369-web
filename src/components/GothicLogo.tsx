import React from 'react';

interface GothicLogoProps {
  className?: string;
  variant?: 'black' | 'white' | 'accent' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTextLockup?: boolean;
}

export const GothicLogo: React.FC<GothicLogoProps> = ({
  className = '',
  variant = 'white',
  size = 'md',
  showTextLockup = false,
}) => {
  const sizeMap = {
    sm: 'w-8 h-10',
    md: 'w-12 h-14',
    lg: 'w-20 h-24',
    xl: 'w-32 h-40',
  };

  const primaryFill = variant === 'black' ? '#000000' : '#FFFFFF';
  const accent1 = variant === 'accent' ? '#00DFD8' : primaryFill;
  const accent2 = variant === 'accent' ? '#FF2D87' : primaryFill;
  const accent3 = variant === 'accent' ? '#FF9900' : primaryFill;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Gothic Calligraphic Stacked Mark: imagi / native / 369 */}
      <svg
        viewBox="0 0 200 240"
        className={`${sizeMap[size]} transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Imaginative 369 Gothic Logo"
      >
        {/* Tier 1: imagi */}
        <g fill={accent1}>
          {/* i */}
          <path d="M28 22 L34 16 L40 22 L34 28 Z" />
          <path d="M31 34 L37 34 L37 78 L31 78 Z" />
          <path d="M25 40 L31 34 L37 34 L37 42 L25 42 Z" />
          
          {/* m */}
          <path d="M47 34 L54 34 L54 78 L47 78 Z" />
          <path d="M54 44 C56 36 64 34 71 34 C78 34 83 38 85 45 C89 36 96 34 104 34 L110 34 L110 78 L103 78 L103 46 C100 42 94 42 91 46 L91 78 L84 78 L84 46 C81 42 75 42 72 46 L72 78 L65 78 L65 44 Z" />
          
          {/* a */}
          <path d="M120 34 L138 34 L142 42 L138 52 C134 44 126 44 122 48 C116 54 116 64 122 70 C126 74 134 74 138 68 L142 78 L126 78 C114 78 108 68 108 56 C108 42 114 34 120 34 Z" />
          <path d="M136 44 L143 44 L143 78 L136 78 Z" />

          {/* g */}
          <path d="M152 34 L170 34 L170 78 C170 94 158 102 144 102 L138 100 L142 92 C148 94 158 92 161 84 L161 74 C157 78 150 78 146 72 C140 64 140 48 148 40 C151 35 158 34 163 36 L163 34 Z M161 46 C158 42 153 42 151 46 C147 52 147 62 151 68 C153 72 158 72 161 68 Z" />

          {/* i */}
          <path d="M178 22 L184 16 L190 22 L184 28 Z" />
          <path d="M181 34 L187 34 L187 78 L181 78 Z" />
        </g>

        {/* Tier 2: native */}
        <g fill={accent2}>
          {/* n */}
          <path d="M24 104 L32 104 L32 148 L24 148 Z" />
          <path d="M32 114 C36 106 46 104 54 104 L60 104 L60 148 L52 148 L52 116 C48 112 40 112 36 116 L36 148 L28 148 Z" />

          {/* a */}
          <path d="M70 104 L88 104 L92 112 L88 122 C84 114 76 114 72 118 C66 124 66 134 72 140 C76 144 84 144 88 138 L92 148 L76 148 C64 148 58 138 58 126 C58 112 64 104 70 104 Z" />
          <path d="M86 114 L93 114 L93 148 L86 148 Z" />

          {/* t */}
          <path d="M102 96 L109 96 L109 104 L118 104 L118 112 L109 112 L109 138 C109 142 112 144 116 144 L118 144 L118 150 C114 150 102 150 102 140 Z" />

          {/* i */}
          <path d="M125 96 L130 92 L135 96 L130 100 Z" />
          <path d="M127 104 L133 104 L133 148 L127 148 Z" />

          {/* v */}
          <path d="M141 104 L150 104 L158 134 L166 104 L175 104 L162 148 L154 148 Z" />

          {/* e (calligraphic blackletter loop) */}
          <path d="M178 104 L196 104 C201 114 201 126 198 134 L180 134 C181 142 188 144 194 142 L196 148 C188 150 176 148 175 132 C174 118 176 104 178 104 Z M181 124 L194 124 C194 116 189 112 184 112 C181 112 181 118 181 124 Z" />
        </g>

        {/* Tier 3: 369 */}
        <g fill={accent3}>
          {/* 3 */}
          <path d="M28 174 C34 168 44 166 54 166 L68 166 L68 176 L52 176 C46 176 44 179 46 184 C48 188 56 188 62 188 L72 188 C76 198 76 210 68 220 C58 228 42 228 32 220 L38 210 C46 216 54 216 58 210 C62 204 60 196 52 196 L42 196 L36 186 Z" />

          {/* 6 */}
          <path d="M110 166 L118 174 L98 226 L82 226 C72 226 68 214 68 202 C68 186 78 172 96 166 Z M82 202 C82 214 88 218 94 216 L104 190 C90 190 82 194 82 202 Z" />

          {/* 9 */}
          <path d="M136 174 C140 168 152 166 162 166 C176 166 184 176 184 192 C184 214 168 230 148 230 L136 230 L146 218 C158 218 166 210 168 198 C164 204 154 206 146 202 C136 196 132 184 136 174 Z M150 178 C144 182 146 190 150 194 C154 196 162 194 166 190 L166 184 C164 178 156 174 150 178 Z" />
        </g>
      </svg>

      {showTextLockup && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span
              className={`font-gothic text-xl tracking-wider uppercase font-bold ${
                variant === 'black' ? 'text-black' : 'text-white'
              }`}
            >
              IMAGINATIVE 369
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00DFD8]" />
          </div>
          <span className="font-mono-code text-[9px] uppercase tracking-widest text-zinc-400">
            Badulla · Sri Lanka
          </span>
        </div>
      )}
    </div>
  );
};
