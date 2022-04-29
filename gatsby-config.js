module.exports = {
  siteMetadata: {
    title: `wehrmuehle`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "UXhC3Z-Uf09-8NGt7I9Ph5Toq6cOWCOAD78ImCQ6qHo",
      "spaceId": "xr8uh76j9duw"
    }
  }, "gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};