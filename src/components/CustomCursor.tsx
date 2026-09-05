import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorAuraRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check for interactive targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('button, a, [role="button"], input, textarea, select, .interactive-card, [data-cursor]');
        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor');
          setCursorText(customText || null);
        } else {
          setIsHovered(false);
          setCursorText(null);
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth physics loop with RAF
    let animationFrameId: number;
    const render = () => {
      // Dot follows immediately with tight interpolation
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.45;

      // Ring trails smoothly
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      // Ambient aura glides softly in the background
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * 0.08;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * 0.08;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (cursorAuraRef.current) {
        cursorAuraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Dynamic ambient cursor illumination aura in background */}
      <div
        ref={cursorAuraRef}
        className={`fixed top-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none z-0 transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-40 sm:opacity-60' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(0, 223, 216, 0.07) 0%, rgba(255, 105, 180, 0.05) 35%, rgba(255, 165, 0, 0.04) 65%, transparent 80%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Floating Cursor Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out flex items-center justify-center ${
          !isVisible ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } ${
          isHovered
            ? 'w-14 h-14 bg-black/10 dark:bg-white/10 backdrop-blur-xs border border-[#FFA500] shadow-[0_0_20px_rgba(255,165,0,0.35)]'
            : isClicked
            ? 'w-7 h-7 border border-white/60 bg-white/20'
            : 'w-10 h-10 border border-black/30 dark:border-white/40'
        } rounded-full`}
        style={{
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono-code font-bold uppercase tracking-widest text-[#FFA500] select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precision Cursor Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full transition-all duration-150 ease-out ${
          !isVisible ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } ${
          isHovered
            ? 'w-2 h-2 bg-[#FFA500]'
            : isClicked
            ? 'w-1.5 h-1.5 bg-[#FF69B4]'
            : 'w-2 h-2 bg-black dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]'
        }`}
      />
    </>
  );
};
