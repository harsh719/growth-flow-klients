
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WeekBlock from './growth-journey/WeekBlock';
import MilestoneMarker from './growth-journey/MilestoneMarker';
import TimelineBar from './growth-journey/TimelineBar';

const GrowthJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const weekData = [
    {
      week: 1,
      tasks: ['Domain Setup', 'Inbox Setup', 'Company Analysis', 'Market Research', 'Offer Analysis', 'List Building']
    },
    {
      week: 2,
      tasks: ['Campaign Setup', 'Copywriting', 'List Verification', 'AI Personalisation', 'Automation Setup', 'Mail warm-up']
    },
    {
      week: 3,
      tasks: ['Campaign Launch']
    },
    {
      week: 4,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Response handling & qualification', 'Weekly performance reviews & iteration']
    },
    {
      week: 5,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Response handling & qualification', 'Weekly performance reviews & iteration'],
      milestone: { text: 'First booking', icon: '🎉' }
    },
    {
      week: 6,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Response handling & qualification', 'Weekly performance reviews & iteration']
    },
    {
      week: 7,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Response handling & qualification', 'Weekly performance reviews & iteration']
    },
    {
      week: 8,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Response handling & qualification', 'Weekly performance reviews & iteration']
    },
    {
      week: 9,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Additional domain setup for scaling', 'Deliverability troubleshoot (if any)']
    },
    {
      week: 10,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Additional domain setup for scaling', 'Deliverability troubleshoot (if any)']
    },
    {
      week: 11,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Additional domain setup for scaling', 'Deliverability troubleshoot (if any)']
    },
    {
      week: 12,
      tasks: ['Continuous deliverability monitoring & adjustments', 'Continuous leads list building', 'Additional domain setup for scaling', 'Deliverability troubleshoot (if any)'],
      milestone: { text: '32 bookings', icon: '🎯' }
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Your 12-Week Growth Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From setup to scale - see exactly how we build your outbound system
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center mb-8 space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollLeft}
            className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollRight}
            className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal scroll container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto pb-8 space-x-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {weekData.map((week, index) => (
              <motion.div
                key={week.week}
                className="flex-shrink-0 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <WeekBlock 
                  week={week.week}
                  tasks={week.tasks}
                  isInView={isInView}
                  delay={index * 0.1}
                />
                
                {week.milestone && (
                  <MilestoneMarker 
                    text={week.milestone.text}
                    icon={week.milestone.icon}
                    position={week.week === 5 ? 'top' : 'bottom'}
                    isInView={isInView}
                    delay={index * 0.1 + 0.3}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline Bar - positioned at week 5 to 12 */}
          <TimelineBar isInView={isInView} />
        </div>

        {/* Week indicators */}
        <motion.div 
          className="flex justify-center mt-8 space-x-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i + 1} className="text-center">
              Week {i + 1}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthJourney;
