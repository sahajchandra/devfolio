import React, { useEffect, useState } from 'react';

import Signature from '../signature';
import ThemeToggle from '../theme-toggle';
import { nav, socials } from '../../data/site';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-charcoal-700/80 bg-charcoal-900/80 backdrop-blur-md light:border-gray-200/80 light:bg-white/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3 xs:px-10">
        <a href="#top" aria-label="Home" className="shrink-0">
          <Signature />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-widest text-gray-400 transition-colors hover:text-brand-light light:text-gray-500 light:hover:text-brand-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand/60 bg-brand/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-brand-light transition-all hover:bg-brand hover:text-white light:text-brand-dark light:hover:text-white"
          >
            Résumé
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-600 text-gray-300 light:border-gray-200 light:text-gray-600"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-charcoal-700 bg-charcoal-900/95 backdrop-blur-md md:hidden light:border-gray-200 light:bg-white/95">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-mono text-sm uppercase tracking-widest text-gray-300 light:text-gray-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm uppercase tracking-widest text-brand-light light:text-brand-dark"
              >
                Résumé ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
