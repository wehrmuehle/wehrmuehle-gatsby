import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {Link} from "gatsby"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import FollowComponentDesktop from '../components/FollowComponentDesktop'
import FollowComponentMobile from '../components/FollowComponentMobile';
import DirectionsMobile from '../components/DirectionsMobile';
import Seo from '../components/seo';

const HugeHeader = styled("h1")`
font-size: 11rem;
margin-bottom: 50px;
`
const HeroWrapper = styled("div")`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
padding-top: 70px;

@media (min-width: 420px) {
    padding-top: 10rem;
      }
`

const AnchorsBlock = styled("div")`
display: flex;
flex-direction: column;
margin-top: 30px;



& > * {
    margin-bottom: 10px;
}

@media (min-width: 420px) {
        margin-top: 70px;
      }
`
export default function ContactPage() {

    const breakpoints = useBreakpoint();

    const followAnchor = `#${breakpoints.md
        ? "follow-mobile"
        : "follow-desktop"}`

    const directionsAnchor = `#${breakpoints.md
        ? "directions-mobile"
        : "location-desktop"}`
    return (
        <>
        <Seo title="Contact"></Seo>

            <HeroWrapper>
                <HugeHeader>Contact</HugeHeader>
                {breakpoints.md && <h2>Wehrmühlenweg 8<br/>16359 Biesenthal<br/>mail@wehrmuehle.de</h2>}
                {!breakpoints.md && <h1>Wehrmühlenweg 8<br/>16359 Biesenthal<br/>mail@wehrmuehle.de</h1>}
                <AnchorsBlock>
                    <Link to={followAnchor}>
                        <h4>Follow us</h4>
                    </Link>
                    <Link to={directionsAnchor}>
                        <h4>How to get to Wehrmuehle</h4>
                    </Link>

                </AnchorsBlock>
            </HeroWrapper>
            {breakpoints.md && <FollowComponentMobile/>}
            {!breakpoints.md && <FollowComponentDesktop/>}
            {breakpoints.md && <DirectionsMobile/>}

        </>
    )
}
