
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentWeek: number;
  totalWeeks: number;
  isInView: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentWeek, totalWeeks, isInView }) => {
  const progressPercentage = (currentWeek / totalWeeks) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <motion.div 
        className="relative h-2 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Week markers */}
        {Array.from({ length: totalWeeks }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 ${
              i + 1 <= currentWeek 
                ? 'bg-white border-purple-400' 
                : 'bg-gray-700 border-gray-600'
            }`}
            style={{ left: `${((i + 1) / totalWeeks) * 100}%`, marginLeft: '-8px' }}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 0.8 + (i * 0.1) }}
          />
        ))}
      </motion.div>
      
      {/* Week labels */}
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        {Array.from({ length: totalWeeks }, (_, i) => (
          <motion.span
            key={i}
            className={`${i + 1 <= currentWeek ? 'text-purple-400' : 'text-gray-500'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 1 + (i * 0.1) }}
          >
            Week {i + 1}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
