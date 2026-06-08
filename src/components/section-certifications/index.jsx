import React from 'react';

import Section from '../section';
import Reveal from '../reveal';
import { certifications } from '../../data/site';

const StatusBadge = ({ status }) => {
  const inProgress = status.toLowerCase().includes('progress');
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
        inProgress
          ? 'bg-amber-400/15 text-amber-300 light:text-amber-600'
          : 'bg-emerald-400/15 text-emerald-300 light:text-emerald-600'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          inProgress ? 'animate-blink bg-amber-300 light:bg-amber-500' : 'bg-emerald-300 light:bg-emerald-500'
        }`}
      />
      {status}
    </span>
  );
};

const SectionCertifications = () => (
  <Section id="certifications" eyebrow="05 — Always Learning" title="Certifications">
    <div className="grid gap-6 sm:grid-cols-2">
      {certifications.map((cert, i) => (
        <Reveal
          key={cert.name}
          delay={i * 80}
          className="flex h-full flex-col rounded-2xl border border-charcoal-700 bg-charcoal-800/50 p-6 transition-all duration-300 hover:border-brand/60 light:border-gray-200 light:bg-white/70 light:hover:border-brand/40"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-100 light:text-gray-900">
              {cert.name}
            </h3>
            <StatusBadge status={cert.status} />
          </div>
          <p className="mt-1 font-mono text-xs text-gray-500">{cert.issuer}</p>
          <p className="mt-3 text-sm font-light leading-relaxed text-gray-300 light:text-gray-600">
            {cert.description}
          </p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default SectionCertifications;
