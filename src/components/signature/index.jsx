import React from 'react';

// A signature-style initials monogram. Uses the Caveat handwriting font
// for the "SC" with a small underline flourish in the brand color.
const Signature = ({ className = '' }) => (
  <span className={`group inline-flex flex-col leading-none ${className}`}>
    <span className="font-signature text-3xl font-bold text-gray-100 light:text-gray-900">
      <span className="text-gradient">S</span>
      <span className="text-gradient">C</span>
    </span>
    <span className="mt-0.5 h-[2px] w-0 rounded-full bg-gradient-to-r from-brand-light to-brand transition-all duration-300 group-hover:w-full" />
  </span>
);

export default Signature;
