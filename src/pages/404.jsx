import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout showFooter={false}>
    <SEO title="Not found" />
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <p className="font-mono text-7xl font-bold text-gradient animate-gradient">404</p>
      <h1 className="mt-6 font-display text-2xl font-semibold text-gray-100 light:text-gray-900">
        This page wandered off.
      </h1>
      <p className="mt-3 font-light text-gray-400 light:text-gray-600">
        The route you hit doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full border border-brand/60 bg-brand/10 px-6 py-2 font-mono text-xs uppercase tracking-widest text-brand-light transition-all hover:bg-brand hover:text-white light:text-brand-dark light:hover:text-white"
      >
        ← Back home
      </Link>
    </section>
  </Layout>
);

export default NotFoundPage;
