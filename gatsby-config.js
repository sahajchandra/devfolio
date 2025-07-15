module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    // Your Name
    name: 'Sahaj Chandra',
    // Main Site Title
    title: `Sahaj Chandra | Data Engineer/Analyst | Forever Student`,
    // Description that goes under your name in main bio
    description: `Aspiring Data Engineer`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sahajchandra/`,
    // Content of the About Me section
    about: `I'm a data analyst with hands-on experience turning raw data into actionable insights through projects and internships in analytics, software development, and dashboard design. From building KPI-driven Power BI dashboards for executives to optimizing SQL pipelines for 40,000+ records, I enjoy solving complex problems that drive real results. My background spans Python, SQL, and Java, along with visualization tools like Power BI and Tableau. I’m equally comfortable cleaning messy datasets as I am presenting clear visual stories. I'm now looking for full-time roles where I can keep learning, collaborate cross-functionally, and make data meaningful at scale.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Spotify Music Analyzer',
        description:
          'Developed a Java-based app that visualizes users' Spotify listening habits by genre, mood, and pattern. Used the Spotify API and SQLite to build a full data pipeline with interactive charts via JavaFX and JFreeChart.',
      
      },
      {
        name: 'Covid-19: The Highs and Lows',
        description:
          'Built an interactive Power BI dashboard using over 500,000 global COVID-19 records to analyze vaccination trends, infection rates, and hospital capacity. Automated data cleaning and anomaly detection in Python to improve processing efficiency by 30%.',
        
      },
     
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Data Analyst Intern',
        description: 'New Jersey Resources, June 2024 - August 2024',

      },
      {
        name: 'Data Engineer Intern',
        description: 'Orion Innovations, June 2023 - August 2023',
       
      },
      {
        name: 'Software Developer Intern',
        description: 'Inrikka Inc., May 2022 - August 2022',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Software',
        description:
          'SQL, Java, Python, Excel, Amazon Web Services (AWS), Tableau, Microsoft Power BI, JavaScript, HTML, CSS',
      },
      {
        name: 'Libraries',
        description: 'Pandas, React, TensorFlow, Swing, RESTful API, JavaFX, Chart.js, Spotify API, Node.js, JChartT, Angular',
      },
      {
        name: 'Hard Skills',
        description:
          'Relational Databases, Data Manipulation, Data Visualization, Requirements Gathering, Programming',
      },
    ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
