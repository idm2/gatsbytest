/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
	title: "IDM2 Gatsby Site",
    siteUrl: `http://localhost:8000/`,
    menuLinks:[
      {
      name:'home',
      link:'/'
      },
      {
      name:'about',
      link:'/about'
      },
      {
        name:'blog',
        link:'/blog'
        }
      ]
  },
   plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
	"gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
