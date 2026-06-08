import React from 'react';

import Section from '../section';
import Reveal from '../reveal';
import { profile } from '../../data/site';

const SectionAbout = () => (
  <Section id="about" eyebrow="01 — Who I Am" title="About Me">
    <div className="max-w-3xl space-y-5 text-lg font-light leading-relaxed text-gray-300 light:text-gray-600">
      {profile.about.map((para, i) => (
        <Reveal as="p" key={i} delay={i * 80}>
          {para}
        </Reveal>
      ))}
    </div>
  </Section>
);

export default SectionAbout;
