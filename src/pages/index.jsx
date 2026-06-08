import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SectionCertifications from '../components/section-certifications';

const Index = () => (
  <Layout>
    <SEO />
    <Hero />
    <SectionAbout />
    <SectionExperience />
    <SectionProjects />
    <SectionSkills />
    <SectionCertifications />
  </Layout>
);

export default Index;
