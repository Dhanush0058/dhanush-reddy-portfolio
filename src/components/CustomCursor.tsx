import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateRingPosition = () => {
      setRingPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    const animationFrame = setInterval(updateRingPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      clearInterval(animationFrame);
    };
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center dot */}
      <div
        className="custom-cursor"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      >
        <div className="cursor-dot" />
      </div>
      
      {/* Trailing ring */}
      <div
        className="custom-cursor"
        style={{
          left: ringPosition.x - 20,
          top: ringPosition.y - 20,
        }}
      >
        <div className={`cursor-ring ${isHovering ? 'hovering' : ''}`} />
      </div>
    </>
  );
};

export default CustomCursor;
