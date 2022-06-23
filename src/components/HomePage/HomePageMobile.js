import React from 'react'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import TextLink from '../UI/TextLink';
import IcInstagram from '../../vectors/IcInstagram.svg'
import IcLocation from '../../vectors/IcLocation.svg'
import HighlightsMobile from './HighlightsMobile';
import PillarsComponentMobile from './PillarsComponentMobile';
import FollowComponentMobile from '../FollowComponentMobile'
import DirectionsMobile from '../DirectionsMobile';
import HeroVideo from '../ProgressiveVideo/HeroVideo';

const Values = [
    [
        "01", "Promoting creative culture in support of artistic expression"
    ],
    [
        "02", "Cultural education and the artistic development of children and young people"
    ],
    [
        "03", "Ecological conservation and nature protection of the site and surrounding area"
    ],
    [
        "04", "Local engagement and partner cooperation to strengthen our community"
    ],
    ["05", "Richness of perspective, contextual complementarity and international networking"]
]

const Directions = [
    [
        "Car", "A 45 minutes drive from Alexanderplatz via the L200 or the A11"
    ],
    [
        "Train", "Berlin main station, Berlin-Lichtenberg, Bernau or Eberswalde with the regional " +
                "lines RB24 and RE3"
    ],
    ["Bus", "Departing from Bernau Hbf (S2) - 896 PlusBus, 907 (Mon-Fri), 909 (Mon-Fri)"]
]

const Wrapper = styled("div")`
width: 100%;

`

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

const ValuesWrapper = styled("div")`
width: 100%;
`

const DirectionsWrapper = styled("div")`
width: 100%;
color: white;
background-color: black;
display: flex;
flex-direction: column;
align-items: start;
margin: 0 -4rem;
padding: 0 4rem;
width: calc(100% + 8rem);
`

const DirectionsMappedWrapper = styled("div")`
width: 100%;
`

const EventSpacer = styled("div")`

& > * {
margin-bottom: 30px;
}
`

const Spacer = styled("div")`
width: 100%;
height: 70vh;
`

const ValuesMapped = Values.map((value) => (
    <ValuesWrapper>
        <h1 css={css `margin-bottom: 60px;`}>{value[0]}</h1>
        <p css={css `margin-bottom: 70px;`}>{value[1]}</p>
    </ValuesWrapper>
))

const DirectionsMapped = Directions.map((direction) => (
    <DirectionsMappedWrapper>
        <h1 css={css `margin-bottom: 30px;`}>{direction[0]}</h1>
        <p css={css `margin-bottom: 70px;`}>
            {direction[1]}</p>
    </DirectionsMappedWrapper>
))

export default function HomePageMobile() {
    return (

        <Wrapper>

            <Spacer id="spacer"/>

            <div css={css `z-index: 9;`}><HeroVideo/></div>

            <h1 css={css `margin:50px 0 94px 0; position: relative; z-index: 10;`}>Kulturort
                Wehrmuehle in Biesenthal serves as a space for contemporary art and culture, in
                particular for the annual Art Biesenthal.</h1>

            <h1 css={css `margin-bottom: 70px;`}>Values</h1>

            <Hr css={css `margin:20px 0 60px 0;`}/> {ValuesMapped}

            <Hr/>

            <PillarsComponentMobile/>

            <HighlightsMobile/>
            <Hr css={css `margin:20px 0 60px 0;`}/> {/* <EventSpacer>

                <TextLink to="/">
                    <h6 css={css `margin-bottom: 30px;`}>Art Biesenthal 2022</h6>
                </TextLink>

                <h6>02. Juli – 29. August</h6>

                <h6>Get your ticket via
                    <br/>
                    <TextLink>
                        Ticket Tailor
                    </TextLink>
                </h6>

            </EventSpacer>

            <h4 css={css `font-weight: bold; margin-bottom: 100px;`}>
                <TextLink to="/">Art Biesenthal</TextLink>
                {` is an annual art exhibition and summer program situated in outer Berlin that
                focuses on bringing international emerging and established artists together to
                exhibit. Over August and September, such artists will take place in a residency
                exploring the historic site of the gallery and surrounding natural landscapes.`}</h4> */}

            <FollowComponentMobile
                text="@wehrmuehle"
                link="https://www.instagram.com/wehrmuehle/"/>

            <DirectionsMobile/>

        </Wrapper>

    )
}
