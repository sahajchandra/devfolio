module.exports = {
  siteMetadata: {
    // Update this to your custom domain once it's connected in Netlify.
    siteUrl: `https://sahajchandra.com`,
    name: 'Sahaj Chandra',
    title: `Sahaj Chandra | Automation Engineer | Forever Student`,
    description: `Automation Engineer specializing in workflow automation and API integrations — Zapier, Make, n8n, Airtable, and Softr.`,
    linkedin: `https://www.linkedin.com/in/sahajchandra/`,
    github: `https://github.com/sahajchandra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sahaj Chandra — Automation Engineer`,
        short_name: `Sahaj Chandra`,
        start_url: `/`,
        background_color: `#0d0d12`,
        theme_color: `#7c3aed`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
