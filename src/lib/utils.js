import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

export function useCountUp({ end, start = 0, duration = 1, shouldStart = true }) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    if (!shouldStart) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [end, start, duration, shouldStart]);
  return count;
}
