
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  decimals = 0, 
  duration = 1 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(spring, (latest) => 
    latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  );

  useEffect(() => {
    spring.set(value);
    setDisplayValue(value);
  }, [value, spring]);

  return (
    <motion.span>
      {display}
    </motion.span>
  );
};

export default AnimatedCounter;
