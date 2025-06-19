
/**
 * Animated Counter Component
 * 
 * Creates visually engaging number animations for displaying business metrics.
 * Essential for showcasing NiPay's traction and market opportunity data.
 * 
 * Business Context:
 * - Captures attention and increases engagement with key metrics
 * - Builds credibility through visual emphasis on growth numbers
 * - Improves conversion rates by making data more compelling
 * - Enhances professional appearance of the platform
 * 
 * Technical Implementation:
 * - Intersection Observer for performance (only animates when visible)
 * - Smooth easing function for professional animation feel
 * - Handles both numeric values and string suffixes (400+, $174K, etc.)
 * - Customizable duration for different visual effects
 * - Accessible and performant across mobile devices
 * 
 * Usage Examples:
 * - User count: "400+" SMEs onboarded
 * - Revenue metrics: "$174K" requested in pilot
 * - Market size: "$1.8B" funding gap
 * - Growth projections: "$16.8M" ARR at scale
 */

import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string; // The target value to animate to (e.g., "400+", "$174K")
  duration?: number; // Animation duration in milliseconds
  className?: string; // Additional CSS classes for styling
}

const AnimatedCounter = ({ value, duration = 2000, className = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0); // Current animated value
  const [isVisible, setIsVisible] = useState(false); // Whether component is in viewport
  const elementRef = useRef<HTMLDivElement>(null); // Reference for intersection observer
  
  // Extract numeric value from string (e.g., "400+" -> 400, "$174K" -> 174)
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, ''); // Extract non-numeric characters

  /**
   * Intersection Observer Setup
   * Only triggers animation when the component comes into view.
   * This improves performance and creates a better user experience.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of component is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  /**
   * Animation Logic
   * Creates smooth counting animation from 0 to target value.
   * Uses easing function for professional visual effect.
   */
  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation (ease-out-quart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * numericValue);
      
      setCount(currentCount);

      // Continue animation until complete
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, numericValue, duration]);

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
