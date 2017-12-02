module.exports = {
  siteMetadata: {
    title: 'Juan Carlos Sanchez Cardenas - Blog',
    author: 'Juan Carlos Sanchez Cardenas'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-preact',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NRV2Z4F',
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    }
  ],
}
