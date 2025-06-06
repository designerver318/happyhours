"use client";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const AnimatedCount = ({ end, suffix = "", duration = 2 }) => {
  const countRef = useRef(null);

  useEffect(() => {
    if (countRef.current) {
      const countUp = new CountUp(countRef.current, end, {
        duration,
        suffix,
      });

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    }
  }, [end, suffix, duration]);

  return <span ref={countRef}></span>;
};

export default AnimatedCount;
