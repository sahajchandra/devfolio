import React from 'react';

import { profile, socials } from '../../data/site';

const Footer = () => (
  <footer className="mt-16 border-t border-charcoal-700 py-10 text-center light:border-gray-200">
    <p className="font-display text-lg font-semibold text-gray-200 light:text-gray-800">
      Let&apos;s build something.
    </p>
    <div className="mt-4 flex items-center justify-center gap-6 font-mono text-xs uppercase tracking-widest">
      <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-brand-light light:text-gray-500 light:hover:text-brand-dark">
        GitHub
      </a>
      <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-brand-light light:text-gray-500 light:hover:text-brand-dark">
        LinkedIn
      </a>
      <a href={`mailto:${socials.email}`} className="text-gray-400 transition-colors hover:text-brand-light light:text-gray-500 light:hover:text-brand-dark">
        Email
      </a>
      <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-brand-light light:text-gray-500 light:hover:text-brand-dark">
        Résumé
      </a>
    </div>
    <p className="mt-6 font-mono text-xs text-gray-600">
      © {new Date().getFullYear()} {profile.name} · Built with Gatsby &amp; Tailwind
    </p>
  </footer>
);

export default Footer;
