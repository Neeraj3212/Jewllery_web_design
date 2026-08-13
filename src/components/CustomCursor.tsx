import { useEffect, useState } from 'react';

interface CustomCursorProps {
  cursorText?: string;
  isHovering?: boolean;
}

export default function CustomCursor({ cursorText, isHovering }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    animationFrameId = requestAnimationFrame(animateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Center Dot */}
      <div
        className="fixed w-2 h-2 bg-[#D4AF37] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Trailing Ring & Text Label */}
      <div
        className={`fixed flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out border ${
          isHovering
            ? 'w-24 h-24 bg-[#D4AF37]/15 border-[#D4AF37] backdrop-blur-[2px]'
            : 'w-10 h-10 border-[#D4AF37]/40 bg-transparent'
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      >
        {isHovering && cursorText && (
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#FFF1C5] animate-pulse text-center px-1">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
