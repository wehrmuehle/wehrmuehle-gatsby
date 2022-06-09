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

            <StaticImage
                src="../../images/HeroVideoPlaceholder.png"
                alt="Wehrmuehle Location's"
                layout="constrained"
                placeholder='blurred'
                width={353}
                height={766}
                css={css `height: calc(100vh - 14rem);`}/>

            <h1 css={css `margin:50px 0 94px 0;`}>Kulturort Wehrmuehle in Brandenburger
                Biesenthal serves as a space for contemporary art and culture, in particular for
                the annual Art Biesenthal.</h1>

            <h1 css={css `margin-bottom: 70px;`}>Values</h1>

            <Hr css={css `margin:20px 0 60px 0;`}/> {ValuesMapped}

            <Hr/>

            <PillarsComponentMobile/>

            <p css={css `margin:20px 0 40px 0; font-size: 20px; font-weight: bold;`}>Upcoming</p>
            <h1 css={css `margin-bottom: 40px;`}>Highlights</h1>

            <StaticImage
                src="../../images/HighlightsPlaceholder.png"
                alt="A person looking at an artwork"
                layout="constrained"
                placeholder='blurred'
                width={874}
                height={1010}
                css={css `width: 100%; margin-bottom: 30px;`}/>

            <HighlightsMobile/> {/* <EventSpacer>

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

            <DirectionsWrapper>

                <Hr bg="white" css={css `margin-top: 50px; margin-bottom: 70px;`}/>

                <h1 css={css `margin-bottom: 80px;`}>How to get to</h1>

                <p
                    css={css `text-align: right; align-self: end; font-size: 50px; font-weight: bold; line-height: 1.2; margin-bottom: 50px;`}>Wehrmuehle
                    <br/>
                    Biesenthal</p>

                <div
                    css={css `display: flex; align-items: center; width: 80%; justify-content: space-between; margin: 0 auto 70px auto;`}>
                    <IcLocation css={css `width: 31px; height: auto; filter: invert(1);`}/>
                    <p>Wehrmühlenweg 8
                        <br/>
                        16359 Biesenthal</p>
                </div>

                {DirectionsMapped}

            </DirectionsWrapper>

        </Wrapper>

    )
}
