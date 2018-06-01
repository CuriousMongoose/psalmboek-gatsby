module.exports = {
  siteMetadata: {
    title: 'Psalmboek',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/`,
      },
    },
  ],
}
