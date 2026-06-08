// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit this file to update what shows on the page; no component changes needed.
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
    `I'm an Automation Engineer. I design, build, and ship workflow automations and API integrations for small and mid-size businesses, mostly with Zapier, Make (Integromat), n8n, REST APIs, webhooks, and the authentication and data-mapping work that ties them together.`,
    `Before automation, I worked in data: cleaning, normalizing, and modeling large datasets and building dashboards. That background still shapes how I plan a build. I run client discovery myself, design for the cases that tend to break (retries, idempotency, partial failures), and document the work so a non-technical team can keep it running and change it after I hand it off.`,
    `Outside of client work, I'm usually trying out a new tool or rebuilding something I've already done in a cleaner way.`,
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
      'Cut lead response time and CRM data entry across a 5-system sales stack by building a distributed, event-driven lead intelligence pipeline in Zapier and Pipedrive, with cross-workspace webhook relay, LLM-powered transcript parsing, and conditional CRM routing. I deliberately avoided custom backend infrastructure to keep operational complexity low.',
      'Hardened automation reliability and removed silent failures across production workflows by designing retries, error branches, and Slack/email alerting in Zapier and Make, with monitoring so non-technical operators could triage issues without engineering involvement.',
      'Removed manual data entry for 100 to 150 employees across 50 concurrent job sites at a NYC steel fabrication client by designing a 15+ table relational data model in Airtable and shipping a role-based web app with 8 permission levels in Softr (JavaScript, HTML, CSS) backed by a live REST API integration layer.',
      'Built a location-agnostic inventory management system for a multi-location coffee shop chain that can onboard 5+ new locations a year with zero schema rework, using a data-driven relational architecture in Airtable and Softr with a custom JavaScript frontend and no hardcoded location logic.',
      "Led the firm's largest active engagement, owning client communication, scoping, and project planning while directing a developer through implementation as the single point of contact across all technical and delivery decisions.",
      'Standardized delivery across client builds by documenting reusable patterns for relational schemas, REST and Metadata API conventions, webhook handling, and permission modeling, so non-technical clients can operate and extend their automations after delivery.',
    ],
    tags: ['Zapier', 'Make', 'n8n', 'Pipedrive', 'Airtable', 'Softr', 'REST APIs', 'Webhooks'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'New Jersey Resources',
    location: 'Wall Township, NJ',
    dates: 'Jun 2024 – Aug 2024',
    bullets: [
      'Partnered with 2 interns to clean, normalize, and transform over 40,000 resident records across 14 NJ counties using SQL and Python (Pandas), improving data integrity and enabling segmentation.',
      'Used customer intake form data to identify market segments, buyer personas, and high-opportunity zip codes, supporting campaign targeting and lead scoring across departments.',
    ],
    tags: ['SQL', 'Python', 'Pandas', 'Power BI'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Orion Innovations',
    location: 'Manhattan, NY',
    dates: 'Jun 2023 – Aug 2023',
    bullets: [
      'Designed and deployed a Power Apps and Power BI desk reservation system across two offices (Manhattan and Edison), letting 70+ employees reserve workspaces by mobile and web and improving resource use.',
      'Ran stakeholder interviews, user research, and requirements-gathering sessions with HR and executive leaders to fit analytics dashboards to hiring needs.',
    ],
    tags: ['Power Apps', 'Power BI', 'Requirements Gathering'],
  },
];

// Newest / most relevant first
export const projects = [
  {
    name: 'Optometry Clinic Inventory + CRM',
    description:
      'A custom inventory and CRM system for an optometry clinic. It tracks stock (frames, lenses, contact lenses) and keeps patient and customer records in one relational system, with automated low-stock alerts and follow-ups.',
    tags: ['Airtable', 'Softr', 'CRM', 'Automation'],
    link: '',
  },
  {
    name: 'Spotify Music Analyzer',
    description:
      'A Java app that visualizes a user’s Spotify listening habits by genre, mood, and pattern. It runs a full data pipeline on the Spotify API and SQLite with interactive charts in JavaFX and JFreeChart.',
    tags: ['Java', 'Spotify API', 'SQLite', 'JavaFX'],
    link: '',
  },
  {
    name: 'Covid-19: The Highs and Lows',
    description:
      'An interactive Power BI dashboard built on 500,000+ global COVID-19 records, covering vaccination trends, infection rates, and hospital capacity. Automated cleaning and anomaly detection in Python improved processing efficiency by 30%.',
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
      'Foundational certification for architecting solutions with Claude and agentic AI systems.',
  },
  {
    name: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    status: 'Certified',
    description:
      'Core AI and machine learning concepts, natural language processing, computer vision, and deploying solutions with Azure AI services.',
  },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
];
