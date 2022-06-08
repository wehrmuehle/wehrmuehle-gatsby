import React from 'react'
import {graphql} from "gatsby"
import PicturesComponent from '../components/PresskitPage/PicturesComponent'
import BundlesDesktop from '../components/PresskitPage/BundlesDesktop'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import BundlesMobile from '../components/PresskitPage/BundlesMobile'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import TextLink from '../components/UI/TextLink'
import LogosDesktop from '../components/PresskitPage/LogosDesktop';
import LogosMobile from '../components/PresskitPage/LogosMobile';
import {StaticImage} from "gatsby-plugin-image"
import DownloadImage from '../components/PresskitPage/DownloadImage';

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

const OutwardsLink = styled("a")`
text-decoration: underline;

&:hover {
  text-decoration: none;
}
`

export default function PresskitPage({data}) {

    const breakpoints = useBreakpoint();

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
                {(breakpoints.l && !breakpoints.sm) && <h1 css={css `font-size: 150px; margin: 70px 0;`}>Press</h1>}
                {(breakpoints.sm) && <h1 css={css `font-size: 70px; margin: 40px 0;`}>Press</h1>}
                <h1>Please find downloads for press material below.</h1>
            </HeroWrapper>

            <h1 css={css `margin-bottom: 120px;`}>Wehrmuehle</h1>

            {(breakpoints.l && !breakpoints.sm) && <BundlesDesktop/>}

            {(breakpoints.sm) && <BundlesMobile/>}

            <Hr/> {(breakpoints.l && !breakpoints.sm) && <LogosDesktop/>}

            {(breakpoints.sm) && <LogosMobile/>}

            <Hr css={css `margin-top: 50px;`}/>

            <h3 css={css `margin:60px 0 70px 0;`}>Presentation</h3>

            <div
                css={css `display: flex; flex-direction: ${breakpoints.sm
                ? "column"
                : "row"}; justify-content: space-between; align-items: center;`}><StaticImage
                src="../images/PresentationCover.jpeg"
                alt="The presentation's cover"
                layout="constrained"
placeholder='blurred'
                width={3840}
                height={2160}
                css={css `width: ${breakpoints.sm
            ? "100%"
            : "70%"}; margin-bottom: 30px; border: 1px solid black;`}/>
                <DownloadImage
                    url={"https://drive.google.com/uc?export=download&id=10mW1BX_xHLW-_UajRfWUApuKLvNZkhv9"}
                    linkText={"Download PDF"}
                    image={false}/>
            </div>

            <h3 css={css `margin: 100px 0 70px 0;`}>Pictures</h3>

            {Pictures}

            <h1>If you have questions feel free to{" "}
                <TextLink to="/contacts">contact us</TextLink>{" "}
                or our brand agency{" "}
                <OutwardsLink target="_blank" href='https://anewday.studio/'>A New Day Studio</OutwardsLink>
                .</h1>
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