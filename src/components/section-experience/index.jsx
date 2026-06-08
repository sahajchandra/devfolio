import React from 'react';

import Section from '../section';
import Reveal from '../reveal';
import { experience } from '../../data/site';

const SectionExperience = () => (
  <Section id="experience" eyebrow="02 · Where I've Worked" title="Experience">
    <div className="relative space-y-6 border-l border-charcoal-700 pl-6 light:border-gray-200 sm:pl-8">
      {experience.map((job, i) => (
        <Reveal key={`${job.company}-${job.dates}`} delay={i * 80}>
          {/* timeline dot */}
          <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-brand bg-charcoal-900 light:bg-white" />
          <article className="group rounded-2xl border border-charcoal-700 bg-charcoal-800/50 p-6 transition-all duration-300 hover:border-brand/60 hover:shadow-[0_0_40px_-12px_rgba(124,58,237,0.5)] light:border-gray-200 light:bg-white/70 light:hover:border-brand/40">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold text-gray-100 light:text-gray-900">
                {job.role}
                <span className="text-brand-light light:text-brand-dark"> @ {job.company}</span>
              </h3>
              <span className="shrink-0 font-mono text-xs text-gray-400 light:text-gray-500">
                {job.dates}
                {job.current && (
                  <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-light light:text-brand-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-light light:bg-brand-dark" />
                    Current
                  </span>
                )}
              </span>
            </div>
            <p className="mt-0.5 font-mono text-xs text-gray-500">{job.location}</p>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b, j) => (
                <li
                  key={j}
                  className="relative pl-5 text-sm font-light leading-relaxed text-gray-300 light:text-gray-600"
                >
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-brand/70" />
                  {b}
                </li>
              ))}
            </ul>

            {job.tags && (
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default SectionExperience;
