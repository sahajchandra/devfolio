import React from 'react';

import Section from '../section';
import Reveal from '../reveal';
import { skills } from '../../data/site';

const SectionSkills = () => (
  <Section id="skills" eyebrow="04 · My Toolkit" title="Skills">
    <div className="grid gap-6 sm:grid-cols-2">
      {skills.map((group, i) => (
        <Reveal
          key={group.category}
          delay={i * 70}
          className="rounded-2xl border border-charcoal-700 bg-charcoal-800/40 p-6 light:border-gray-200 light:bg-white/60"
        >
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-light light:text-brand-dark">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default SectionSkills;
