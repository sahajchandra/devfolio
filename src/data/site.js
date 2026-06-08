// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit this file to update what shows on the page — no component changes needed.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Sahaj Chandra',
  // Rotating phrases for the animated hero subtitle
  roles: [
    'Automation Engineer',
    'Workflow Architect',
    'API & Integrations Specialist',
    'Forever Student',
  ],
  tagline: 'Automation Engineer · Forever Student',
  location: 'New Jersey / New York',
  about: [
    `I'm an Automation Engineer who designs, builds, and ships workflow automations and API integrations for small and mid-size businesses. I specialize in Zapier, Make (Integromat), n8n, REST API integrations, webhooks, authentication, and data mapping — turning messy, real-world workflows into reliable, observable, and maintainable systems.`,
    `My foundation is in data. I started out cleaning, normalizing, and modeling large datasets and building KPI-driven dashboards, and that data-first instinct still shapes how I architect automations today. I'm comfortable owning client discovery end-to-end, handling the gnarly edge cases (retries, idempotency, partial failures), and documenting everything so non-technical teams can extend it independently.`,
    `Forever a student — I'm always picking up the next tool, pattern, or platform that lets me build something more elegant than the last.`,
  ],
};

export const socials = {
  github: 'https://github.com/sahajchandra',
  linkedin: 'https://www.linkedin.com/in/sahajchandra/',
  email: 'sahaj.chandra5@gmail.com',
  resume: '/Sahaj-Chandra-Resume.pdf',
};

// Newest first
export const experience = [
  {
    role: 'Automation Engineer',
    company: 'Flow Digital',
    location: 'Brooklyn, NY',
    dates: 'Dec 2025 – Present',
    current: true,
    bullets: [
      'Slashed lead response time and CRM data entry across a 5-system sales stack by building a distributed, event-driven lead intelligence pipeline in Zapier and Pipedrive — with cross-workspace webhook relay, LLM-powered transcript parsing, and conditional CRM routing — deliberately eliminating custom backend infrastructure to reduce operational complexity.',
      'Hardened automation reliability and eliminated silent failures across production workflows by designing retries, error branches, and Slack/email alerting in Zapier and Make, with monitoring so non-technical operators could triage issues without engineering involvement.',
      'Eliminated manual data entry for 100–150 employees across 50 concurrent job sites at a NYC steel fabrication client by designing a 15+ table relational data model in Airtable and shipping a role-based web app with 8 permission levels in Softr (JavaScript, HTML, CSS) backed by a live REST API integration layer.',
      'Architected a location-agnostic inventory management system for a multi-location coffee shop chain — able to onboard 5+ new locations per year with zero schema rework — using a data-driven relational architecture in Airtable and Softr with a custom JavaScript frontend and no hardcoded location logic.',
      "Trusted to lead the firm's largest active engagement end-to-end: owning client communication, scoping, and project planning while directing a developer through implementation as the single point of contact across all technical and delivery decisions.",
      'Standardized delivery velocity across client builds by documenting reusable patterns for relational schemas, REST and Metadata API conventions, webhook handling, and permission modeling — producing automations non-technical clients can operate and extend independently post-delivery.',
    ],
    tags: ['Zapier', 'Make', 'n8n', 'Pipedrive', 'Airtable', 'Softr', 'REST APIs', 'Webhooks'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'New Jersey Resources',
    location: 'Wall Township, NJ',
    dates: 'Jun 2024 – Aug 2024',
    bullets: [
      'Partnered with 2 interns to perform data cleaning, normalization, and transformation for over 40,000 resident records across 14 NJ counties using SQL and Python (Pandas), increasing data integrity and enabling segmentation.',
      'Used customer intake form data to identify market segments, buyer personas, and high-opportunity zip codes, empowering campaign targeting and lead scoring across departments.',
    ],
    tags: ['SQL', 'Python', 'Pandas', 'Power BI'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Orion Innovations',
    location: 'Manhattan, NY',
    dates: 'Jun 2023 – Aug 2023',
    bullets: [
      'Designed and deployed a Power Apps and Power BI–based desk reservation system across two offices (Manhattan and Edison), enabling 70+ employees to reserve workspaces via mobile and web and improving resource optimization.',
      'Conducted stakeholder interviews, user research, and requirements-gathering sessions with HR and executive leaders to tailor analytics dashboards to hiring needs.',
    ],
    tags: ['Power Apps', 'Power BI', 'Requirements Gathering'],
  },
];

// Newest / most relevant first
export const projects = [
  {
    name: 'Optometry Clinic Inventory + CRM',
    description:
      'A custom inventory management system and CRM for an optometry clinic — unifying stock tracking (frames, lenses, contacts) with patient and customer relationship management in a single relational system, with automated workflows for low-stock alerts and follow-ups.',
    tags: ['Airtable', 'Softr', 'CRM', 'Automation'],
    link: '',
  },
  {
    name: 'Spotify Music Analyzer',
    description:
      'A Java app that visualizes a user’s Spotify listening habits by genre, mood, and pattern. Built a full data pipeline on the Spotify API and SQLite with interactive charts via JavaFX and JFreeChart.',
    tags: ['Java', 'Spotify API', 'SQLite', 'JavaFX'],
    link: '',
  },
  {
    name: 'Covid-19: The Highs and Lows',
    description:
      'An interactive Power BI dashboard built on 500,000+ global COVID-19 records analyzing vaccination trends, infection rates, and hospital capacity. Automated cleaning and anomaly detection in Python improved processing efficiency by 30%.',
    tags: ['Power BI', 'Python', 'Pandas'],
    link: '',
  },
];

// Grouped skills, automation-first (current-role skills at the top)
export const skills = [
  {
    category: 'Automation & Integration',
    items: ['Zapier', 'Make (Integromat)', 'n8n', 'REST APIs', 'Webhooks', 'OAuth & API Auth', 'Pipedrive', 'Beehiiv'],
  },
  {
    category: 'No-Code & App Platforms',
    items: ['Airtable', 'Softr'],
  },
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'SQL', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Data & BI',
    items: ['Pandas', 'Power BI', 'Power Apps', 'Tableau', 'Excel'],
  },
  {
    category: 'Tools & AI',
    items: ['Claude Code', 'AWS', 'Git'],
  },
  {
    category: 'Core Competencies',
    items: ['Automation Architecture', 'Database Schema Design', 'Workflow Mapping', 'Requirements Gathering', 'UI/UX Design'],
  },
];

export const certifications = [
  {
    name: 'Claude Certified Architect – Foundations (CCA-F)',
    issuer: 'Anthropic',
    status: 'In Progress',
    description:
      "Foundational certification for architecting solutions with Claude and agentic AI systems.",
  },
  {
    name: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    status: 'Certified',
    description:
      'Core AI/ML concepts, natural language processing, computer vision, and deploying solutions with Azure AI services.',
  },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
];
