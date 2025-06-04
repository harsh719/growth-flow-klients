
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface WeekBlockProps {
  week: number;
  title: string;
  description: string;
  icon: string;
  milestone?: boolean;
  isInView: boolean;
  delay: number;
  isLast: boolean;
}

const WeekBlock: React.FC<WeekBlockProps> = ({ 
  week, 
  title, 
  description, 
  icon, 
  milestone = false,
  isInView, 
  delay,
  isLast
}) => {
  return (
    <div className="w-80 relative flex-shrink-0">
      {/* Week content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay }}
        className="relative"
      >
        <Card className={`bg-gray-800/80 border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
          milestone ? 'border-purple-500/30 shadow-purple-500/20 shadow-lg' : ''
        }`}>
          <CardContent className="p-6 text-center">
            {/* Week number and icon */}
            <motion.div 
              className="flex items-center justify-center space-x-3 mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.2 }}
            >
              <div className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                Week {week}
              </div>
              <motion.div 
                className="text-3xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {icon}
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h3 
              className="text-lg font-semibold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.4 }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p 
              className="text-sm text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.6 }}
            >
              {description}
            </motion.p>

            {milestone && (
              <motion.div 
                className="mt-4 text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full inline-block"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: delay + 0.8 }}
              >
                🎉 Milestone Achieved
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Timeline connector dot */}
        <motion.div 
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-800 z-20"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.3 }}
        />
      </motion.div>

      {/* Connecting line to next week */}
      {!isLast && (
        <motion.div 
          className="absolute -bottom-4 left-1/2 w-8 h-px bg-gradient-to-r from-purple-500 to-blue-500 z-10"
          style={{ marginLeft: '16px', width: '280px' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
          transformOrigin="left"
        />
      )}
    </div>
  );
};

export default WeekBlock;
