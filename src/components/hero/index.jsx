import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { profile, socials } from '../../data/site';

// Typewriter that types/deletes through the role phrases
const useTypewriter = (words, { type = 90, del = 45, hold = 1600 } = {}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }, deleting ? del : type);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, type, del, hold]);

  return text;
};

const IconLink = ({ href, label, children, external = true }) => (
  <a
    href={href}
    aria-label={label}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-600 bg-charcoal-800/60 text-gray-300 transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand-light light:border-gray-200 light:bg-white light:text-gray-600 light:hover:text-brand-dark"
  >
    {children}
  </a>
);

const Hero = () => {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="flex min-h-screen flex-col items-center justify-center pt-20 text-center"
    >
      <div className="animate-fade-up">
        <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full ring-2 ring-brand/50 ring-offset-4 ring-offset-charcoal-900 light:ring-offset-[#f6f6fa] sm:h-40 sm:w-40">
          <StaticImage
            src="../../images/profile.jpg"
            alt={profile.name}
            placeholder="dominantColor"
            width={320}
            height={320}
            className="h-full w-full"
            imgClassName="object-cover"
          />
        </div>

        <p className="eyebrow mb-4">{profile.location}</p>

        <h1 className="font-display text-5xl font-bold tracking-tight text-gray-100 light:text-gray-900 sm:text-7xl">
          <span className="text-gradient animate-gradient">{profile.name}</span>
        </h1>

        <div className="mt-5 flex h-8 items-center justify-center font-mono text-lg text-gray-300 light:text-gray-600 sm:text-2xl">
          <span className="text-brand-light light:text-brand-dark">&gt;&nbsp;</span>
          <span>{typed}</span>
          <span className="ml-0.5 inline-block w-[2px] animate-blink bg-brand-light light:bg-brand-dark">
            &nbsp;
          </span>
        </div>

        <p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-gray-400 light:text-gray-600">
          {profile.whatIDo}
        </p>

        <div className="mt-9 flex items-center justify-center gap-4">
          <IconLink href={socials.github} label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </IconLink>
          <IconLink href={socials.linkedin} label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </IconLink>
          <IconLink href={`mailto:${socials.email}`} label="Email" external={false}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </IconLink>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="mt-16 animate-bounce text-gray-500 transition-colors hover:text-brand-light light:hover:text-brand-dark"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
