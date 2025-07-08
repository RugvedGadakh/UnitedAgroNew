import React, { useEffect, useRef, useState } from "react";
import "./sections.css";

const lines = [
  "We commit, We care, We Comfort our client",
  "We reach 6000+ farmers",
  "Our production capacity 20 tons/day",
  "Delivering quality and trust across India",
];

export default function TypewriterText({ className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isLineDone, setIsLineDone] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx < lines[lineIdx].length) {
      timerRef.current = setTimeout(() => {
        setDisplayed((prev) => prev + lines[lineIdx][charIdx]);
        setCharIdx((idx) => idx + 1);
      }, 45);
    } else {
      setIsLineDone(true);
      timerRef.current = setTimeout(() => {
        setDisplayed((prev) => prev + "\n");
        setLineIdx((idx) => idx + 1);
        setCharIdx(0);
        setIsLineDone(false);
      }, 900);
    }
    return () => clearTimeout(timerRef.current);
  }, [charIdx, lineIdx]);

  return (
    <pre className={`typewriter-text ${className}`.trim()}>
      {displayed}
      <span className="typewriter-cursor">|</span>
    </pre>
  );
}
