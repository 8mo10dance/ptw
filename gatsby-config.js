module.exports = {
  siteMetadata: {
    title: `ptw`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "r02",
        fieldName: "r02",
        url: "https://r02-webapp.onrender.com/graphql",
      },
    },
  ],
};
