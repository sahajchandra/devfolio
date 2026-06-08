import React from 'react';

// Deterministic embers (no Math.random) so SSR and client markup match.
const EMBERS = [
  { left: 4, size: 6, dur: 17, delay: 0 },
  { left: 11, size: 10, dur: 23, delay: 6 },
  { left: 18, size: 4, dur: 14, delay: 2 },
  { left: 25, size: 8, dur: 20, delay: 9 },
  { left: 32, size: 5, dur: 26, delay: 3 },
  { left: 39, size: 12, dur: 19, delay: 12 },
  { left: 46, size: 4, dur: 15, delay: 7 },
  { left: 53, size: 7, dur: 24, delay: 1 },
  { left: 60, size: 9, dur: 21, delay: 10 },
  { left: 67, size: 5, dur: 16, delay: 4 },
  { left: 74, size: 11, dur: 27, delay: 8 },
  { left: 81, size: 4, dur: 18, delay: 14 },
  { left: 88, size: 7, dur: 22, delay: 5 },
  { left: 95, size: 6, dur: 25, delay: 11 },
  { left: 8, size: 5, dur: 28, delay: 13 },
  { left: 22, size: 9, dur: 20, delay: 16 },
  { left: 43, size: 6, dur: 17, delay: 18 },
  { left: 57, size: 4, dur: 23, delay: 15 },
  { left: 71, size: 8, dur: 19, delay: 20 },
  { left: 85, size: 5, dur: 26, delay: 17 },
];

const Background = () => (
  <div className="bg-field" aria-hidden="true">
    <div className="bg-blob bg-blob--one" />
    <div className="bg-blob bg-blob--two" />
    {EMBERS.map((e, i) => (
      <span
        key={i}
        className="ember"
        style={{
          left: `${e.left}%`,
          width: `${e.size}px`,
          height: `${e.size}px`,
          animationDuration: `${e.dur}s`,
          animationDelay: `${e.delay}s`,
        }}
      />
    ))}
  </div>
);

export default Background;
