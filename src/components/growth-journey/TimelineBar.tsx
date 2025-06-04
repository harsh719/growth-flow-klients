
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineBarProps {
  isInView: boolean;
}

const TimelineBar: React.FC<TimelineBarProps> = ({ isInView }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-px z-0">
      <motion.div 
        className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-30"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ 
          duration: 2, 
          delay: 0.5,
          ease: "easeOut"
        }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
};

export default TimelineBar;
