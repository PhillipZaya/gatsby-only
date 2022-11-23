module.exports = {
  siteMetadata: {
    title: 'Phillip Store',
    auther: 'Phillip'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`
  ]
}
