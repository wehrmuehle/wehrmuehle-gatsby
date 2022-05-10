import React from 'react'
import {graphql} from "gatsby"
import PicturesComponent from '../components/PresskitPage/PicturesComponent'
import BundlesDesktop from '../components/PresskitPage/BundlesDesktop'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

const HeroWrapper = styled("div")`
height: 100vh;
`

export default function PresskitPage({data}) {

    const edges = data.allContentfulPressPicture.edges

    const Pictures = edges.map((entry) => (<PicturesComponent
        image={entry.node.highResolutionImage.gatsbyImageData}
        description={entry.node.description}
        title={entry.node.title}
        copyright={entry.node.copyright}
        url={entry.node.highResolutionImage.url}
        key={entry.node.id}/>))

    return (
        <React.Fragment>

            <HeroWrapper>
                <h1 css={css `font-size: 200px; margin-top: 70px;`}>Press</h1>

                <h1>Please find downloads for press material below.</h1>
            </HeroWrapper>

            <h1 css={css `margin-bottom: 120px;`}>Wehrmuehle</h1>

            <BundlesDesktop/>

            <h3 css={css `margin: 100px 0 70px 0;`}>Pictures</h3>

            {Pictures}

            <h1>If you have questions feel free to contact us or our brand agency A New Day
                Studio.</h1>
        </React.Fragment>
    )
}

export const pageQuery = graphql `
query MyQuery {
  allContentfulPressPicture {
    edges {
      node {
        id
        title
        description
        copyright
        highResolutionImage {
          gatsbyImageData(width: 1500, placeholder: BLURRED)
          url
        }
        lowResolutionImage {

        gatsbyImageData(width: 1500, placeholder: BLURRED)}
      }
    }
  }
}

  
`