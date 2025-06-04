
import React from 'react';
import { motion } from 'framer-motion';

interface MilestoneMarkerProps {
  text: string;
  icon: string;
  position: 'top' | 'bottom';
  isInView: boolean;
  delay: number;
}

const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({ 
  text, 
  icon, 
  position, 
  isInView, 
  delay 
}) => {
  return (
    <motion.div 
      className={`absolute left-1/2 transform -translate-x-1/2 ${
        position === 'top' ? '-top-16' : '-bottom-16'
      }`}
      initial={{ opacity: 0, scale: 0.8, y: position === 'top' ? 20 : -20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: position === 'top' ? 20 : -20 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div 
        className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 shadow-lg whitespace-nowrap"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>{text}</span>
        <span className="text-lg">{icon}</span>
      </motion.div>
      
      {/* Arrow pointing to timeline */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 ${
        position === 'top' ? 'top-full' : 'bottom-full'
      }`}>
        <div className={`w-0 h-0 ${
          position === 'top' 
            ? 'border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600'
            : 'border-l-4 border-r-4 border-b-4 border-transparent border-b-green-600'
        }`}></div>
      </div>
    </motion.div>
  );
};

export default MilestoneMarker;
