import React from 'react';

import Reveal from '../reveal';

// A page section with an eyebrow label + heading, anchored for nav scrolling.
const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-20">
    <Reveal className="mb-10">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-bold text-gray-100 light:text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-brand/60 via-charcoal-600 to-transparent light:via-gray-200" />
    </Reveal>
    {children}
  </section>
);

export default Section;
