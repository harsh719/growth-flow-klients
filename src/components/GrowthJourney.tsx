
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WeekBlock from './growth-journey/WeekBlock';
import TimelineBar from './growth-journey/TimelineBar';
import ProgressBar from './growth-journey/ProgressBar';

const GrowthJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentWeek, setCurrentWeek] = useState(1);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

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

  // Auto-scroll functionality
  useEffect(() => {
    if (!isInView) return;

    const autoScroll = () => {
      if (containerRef.current && !isAutoScrolling) {
        setIsAutoScrolling(true);
        const container = containerRef.current;
        const weekWidth = 350; // Width of each week block including spacing
        const totalWeeks = 8;
        
        let currentScrollWeek = 0;
        
        const scrollInterval = setInterval(() => {
          if (currentScrollWeek < totalWeeks - 1) {
            currentScrollWeek++;
            container.scrollTo({
              left: currentScrollWeek * weekWidth,
              behavior: 'smooth'
            });
          } else {
            clearInterval(scrollInterval);
            setIsAutoScrolling(false);
          }
        }, 2000); // Scroll every 2 seconds

        return () => {
          clearInterval(scrollInterval);
          setIsAutoScrolling(false);
        };
      }
    };

    // Start auto-scroll after a delay to let animations settle
    const timeout = setTimeout(autoScroll, 3000);
    
    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, isAutoScrolling]);

  // Update current week based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && !isAutoScrolling) {
        const scrollLeft = containerRef.current.scrollLeft;
        const weekWidth = 350; // Approximate width of each week block
        const newCurrentWeek = Math.floor(scrollLeft / weekWidth) + 1;
        setCurrentWeek(Math.min(Math.max(newCurrentWeek, 1), 8));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isAutoScrolling]);

  // Update current week during auto-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const weekWidth = 350;
        const newCurrentWeek = Math.floor(scrollLeft / weekWidth) + 1;
        setCurrentWeek(Math.min(Math.max(newCurrentWeek, 1), 8));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const weekData = [
    {
      week: 1,
      title: "Set the Foundation",
      description: "We start with research and set up the right Infrastructure.",
      icon: "🛠️"
    },
    {
      week: 2,
      title: "Build Your Offer & Automate",
      description: "Craft a clear offer and set up smart automations.",
      icon: "🤖"
    },
    {
      week: 3,
      title: "Launch Time",
      description: "Campaigns go live. Let's get the ball rolling.",
      icon: "🚀"
    },
    {
      week: 4,
      title: "First Wins",
      description: "2–5 meetings start coming in. Early momentum.",
      icon: "🤝"
    },
    {
      week: 5,
      title: "Learn & Improve",
      description: "Double down on what's working. Tweak what's not.",
      icon: "🔁"
    },
    {
      week: 6,
      title: "Time to Scale",
      description: "Turn up the volume. More reach, more leads.",
      icon: "📈"
    },
    {
      week: 7,
      title: "Meetings Flowing In",
      description: "32 meetings booked. You're in full motion.",
      icon: "📅",
      milestone: true
    },
    {
      week: 8,
      title: "Meetings Flowing In",
      description: "32 meetings booked. You're in full motion.",
      icon: "⏳",
      milestone: true
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
            Your 8-Week Growth Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From foundation to scale - see exactly how we build your outbound system
          </p>
        </motion.div>

        {/* Progress Bar */}
        <ProgressBar currentWeek={currentWeek} totalWeeks={8} isInView={isInView} />

        {/* Navigation Controls */}
        <div className="flex justify-center mb-8 space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollLeft}
            disabled={isAutoScrolling}
            className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollRight}
            disabled={isAutoScrolling}
            className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Bar */}
          <TimelineBar isInView={isInView} />
          
          {/* Horizontal scroll container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto pb-8 space-x-8 scrollbar-hide relative z-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {weekData.map((week, index) => (
              <WeekBlock 
                key={week.week}
                week={week.week}
                title={week.title}
                description={week.description}
                icon={week.icon}
                milestone={week.milestone}
                isInView={isInView}
                delay={index * 0.1}
                isLast={index === weekData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;
