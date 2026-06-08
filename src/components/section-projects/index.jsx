import React from 'react';

import Section from '../section';
import Reveal from '../reveal';
import { projects } from '../../data/site';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const SectionProjects = () => (
  <Section id="projects" eyebrow="03 · Things I've Built" title="Projects">
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, i) => {
        const hasLink = project.link && project.link.length > 0;
        const Card = hasLink ? 'a' : 'div';
        const linkProps = hasLink
          ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
          : {};

        return (
          <Reveal key={project.name} delay={i * 80} className="h-full">
            <Card
              {...linkProps}
              className="group flex h-full flex-col rounded-2xl border border-charcoal-700 bg-charcoal-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_0_45px_-12px_rgba(124,58,237,0.55)] light:border-gray-200 light:bg-white/70 light:hover:border-brand/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-100 transition-colors group-hover:text-brand-light light:text-gray-900 light:group-hover:text-brand-dark">
                  {project.name}
                </h3>
                {hasLink && (
                  <span className="mt-1 text-gray-500 transition-colors group-hover:text-brand-light light:group-hover:text-brand-dark">
                    <ArrowIcon />
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-gray-300 light:text-gray-600">
                {project.description}
              </p>
              {project.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default SectionProjects;
