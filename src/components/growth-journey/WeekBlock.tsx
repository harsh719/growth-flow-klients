
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface WeekBlockProps {
  week: number;
  tasks: string[];
  isInView: boolean;
  delay: number;
}

const WeekBlock: React.FC<WeekBlockProps> = ({ week, tasks, isInView, delay }) => {
  return (
    <div className="w-80 relative">
      {/* Week header */}
      <motion.div 
        className="text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: delay }}
      >
        <h3 className="text-lg font-semibold text-gray-300">Week {week}</h3>
        <div className="w-px h-8 bg-gray-600 mx-auto mt-2"></div>
      </motion.div>

      {/* Task cards */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={`${week}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4, 
              delay: delay + (index * 0.1) + 0.2 
            }}
          >
            <Card className="bg-gray-800/80 border-gray-700 hover:border-purple-500/50 transition-colors duration-300">
              <CardContent className="p-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {task}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Connecting line to next week */}
      {week < 12 && (
        <motion.div 
          className="absolute top-12 -right-4 w-8 h-px bg-gray-600"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.6 }}
          style={{ originX: 0 }}
        />
      )}
    </div>
  );
};

export default WeekBlock;
