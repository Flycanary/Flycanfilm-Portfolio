import React, { useRef, useState, ReactElement, cloneElement, Children, CSSProperties } from 'react';

interface MagneticProps {
  children: ReactElement;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  const child = Children.only(children);

  // Cast the child element to a type that can accept a style prop.
  const elementToClone = child as React.ReactElement<{ style?: React.CSSProperties }>;

  const newStyle: React.CSSProperties = {
    ...(elementToClone.props.style || {}), // Safely merge with existing styles
    transform: `translate(${x * 0.2}px, ${y * 0.2}px)`,
    transition: 'transform 0.2s linear',
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${x * 0.1}px, ${y * 0.1}px)`,
        transition: 'transform 0.1s linear',
      }}
    >
      {cloneElement(elementToClone, { style: newStyle })}
    </div>
  );
};

export default Magnetic;