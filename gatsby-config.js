require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
    siteMetadata: {
        title: `wehrmuehle`,
        siteUrl: `https://www.yourdomain.tld`
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
        }
    ]
};