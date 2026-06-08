import React, { useState } from 'react';

import Section from '../section';
import Reveal from '../reveal';
import { socials } from '../../data/site';

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = `mailto:${socials.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-full border border-brand/60 bg-brand/10 px-5 py-2.5 font-mono text-sm text-brand-light transition-all hover:bg-brand hover:text-white light:text-brand-dark light:hover:text-white"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
          {socials.email}
        </>
      )}
    </button>
  );
};

const SectionContact = () => (
  <Section id="contact" eyebrow="06 · Say Hello" title="Get in Touch">
    <Reveal className="max-w-2xl">
      <p className="text-lg font-light leading-relaxed text-gray-300 light:text-gray-600">
        Whether it&apos;s an automation problem, a data question, or a good Knicks
        debate, my inbox is open. The fastest way to reach me is email or LinkedIn.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <CopyEmailButton />
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-charcoal-600 bg-charcoal-800/60 px-5 py-2.5 font-mono text-sm text-gray-300 transition-all hover:border-brand hover:text-brand-light light:border-gray-200 light:bg-white light:text-gray-600 light:hover:text-brand-dark"
        >
          LinkedIn ↗
        </a>
        <a
          href={socials.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-charcoal-600 bg-charcoal-800/60 px-5 py-2.5 font-mono text-sm text-gray-300 transition-all hover:border-brand hover:text-brand-light light:border-gray-200 light:bg-white light:text-gray-600 light:hover:text-brand-dark"
        >
          Résumé ↗
        </a>
      </div>
    </Reveal>
  </Section>
);

export default SectionContact;
