require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
    siteMetadata: {
        title: `Wehrmuehle`,
        description: `A space for contemporary art and culture`,
        siteUrl: `https://www.wehrmuehle.com/`
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESSTOKEN
            }
        },
        "gatsby-plugin-emotion",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /vectors/ // See below to configure properly
                }
            }
        },
        'gatsby-plugin-breakpoints', {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT
            }
        }, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Wehrmuehle`,
                short_name: `Wehrmuehle`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `src/images/fav.png`, // This path is relative to the root of the site.
            }
        }
    ]
};