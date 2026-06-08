import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface MouseGlowProps {
  color?: string;
}

export default function MouseGlow({ color = '100,113,241' }: MouseGlowProps) {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-10"
      animate={{ x: pos.x - 200, y: pos.y - 200 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
      style={{
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(${color},0.08) 0%, transparent 70%)`,
      }}
    />
  );
}
