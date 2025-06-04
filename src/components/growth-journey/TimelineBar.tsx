
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineBarProps {
  isInView: boolean;
}

const TimelineBar: React.FC<TimelineBarProps> = ({ isInView }) => {
  return (
    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
      <motion.div 
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-center shadow-lg"
        initial={{ opacity: 0, x: -100, width: 0 }}
        animate={isInView ? { opacity: 1, x: 0, width: "auto" } : { opacity: 0, x: -100, width: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 1,
          ease: "easeOut"
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          Scale what works and eliminate what doesn't
        </motion.span>
      </motion.div>
    </div>
  );
};

export default TimelineBar;
