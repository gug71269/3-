import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FallingMapleLeavesProps {
  durationMs?: number;
}

// SVG Maple Leaf Component with warm autumn colors
const MapleLeaf: React.FC<{ color: string; size: number }> = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className="drop-shadow-md opacity-90"
  >
    <path d="M12 2L13.8 6.5L18.5 4.5L16.5 9.2L21 11L16.5 12.8L18.5 17.5L13.8 15.5L12 20L10.2 15.5L5.5 17.5L7.5 12.8L3 11L7.5 9.2L5.5 4.5L10.2 6.5L12 2Z" />
    <path d="M12 18V23" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const FallingMapleLeaves: React.FC<FallingMapleLeavesProps> = ({
  durationMs = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [leaves, setLeaves] = useState<
    Array<{ id: number; x: number; size: number; duration: number; delay: number; color: string; rotate: number }>
  >([]);

  useEffect(() => {
    // Generate natural falling maple leaves
    const leafColors = ['#C84B31', '#D97706', '#B91C1C', '#EA580C', '#9A3412', '#7C2D12', '#EAB308'];
    const generatedLeaves = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x start
      size: Math.floor(Math.random() * 18) + 16, // 16px to 34px
      duration: Math.random() * 2.5 + 3.5, // 3.5s to 6.0s
      delay: Math.random() * 2, // staggered start
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      rotate: Math.random() * 360,
    }));
    setLeaves(generatedLeaves);

    // Fade out after durationMs
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={{
              top: '-10%',
              left: `${leaf.x}%`,
              opacity: 0,
              scale: 0.5,
              rotate: leaf.rotate,
            }}
            animate={{
              top: '110%',
              left: `${leaf.x + Math.sin(leaf.id) * 25}%`,
              opacity: [0, 1, 1, 0.8, 0],
              rotate: leaf.rotate + 720,
              scale: [0.5, 1.1, 0.9, 0.7],
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              ease: 'easeInOut',
            }}
            className="absolute"
          >
            <MapleLeaf color={leaf.color} size={leaf.size} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};
