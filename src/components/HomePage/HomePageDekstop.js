import React, {useEffect, useState} from 'react'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import TextLink from '../UI/TextLink';
import IcInstagram from '../../vectors/IcInstagram.svg'
import IntroLogo from '../../vectors/IntroLogo.svg'
import IcLocation from '../../vectors/IcLocation.svg'
import HeroVideo from '../ProgressiveVideo/HeroVideo';
import PillarsComponentDesktop from './PillarsComponentDesktop';
import FollowComponentDesktop from '../FollowComponentDesktop';
import IcTicket from '../../vectors/IcTicket.svg'
import HighlightsDesktop from './HighlightsDesktop';

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
];

const Directions = [
    [
        "Car", "A 45 minutes drive from Alexanderplatz via the L200 or the A11"
    ],
    [
        "Train", "Berlin main station, Berlin-Lichtenberg, Bernau or Eberswalde with the regional " +
                "lines RB24 and RE3"
    ],
    ["Bus", "Departing from Bernau Hbf (S2) - 896 PlusBus, 907 (Mon-Fri), 909 (Mon-Fri)"]
];

const Wrapper = styled("div")`
width: 100%;
position: relative;
`

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

const ValueWrapper = styled("div")`
width: 22.22%;
margin-bottom: 80px;
`

const ValueSpacer = styled("div")`
width: 11.11%;
`

const ValuesContainer = styled("div")`
display: flex;
flex-wrap: wrap;
justify-content: end;
`

const UpcomingContainer = styled("div")`
width: 100%;
position: relative;
`

const FollowBottomContainer = styled("div")`
display: flex;
justify-content: space-between;
`

const NewsletterContainer = styled("div")`
display: flex;
flex-direction: column;
width: 50%;
`

const ContactContainer = styled("div")`
display: flex;
flex-direction: column;
width: 35%;
`

const DirectionsWrapper = styled("div")`
width: 100%;
color: white;
background-color: black;
margin: 0 -164px;
padding: 0 164px;
padding-top: 100px;
width: calc(100% + 328px);
display: flex;
flex-direction: column;
`

const Spacer = styled("div")`
width: 100%;
height: 125vh;
`

export default function HomePageDekstop() {

    const [videoHeight,
        setVideoHeight] = useState(0);

    // useEffect(() => {     const spacer = document.getElementById("spacer");
    // const thumbnail = document.getElementById("thumbnail");     const
    // spacerHeight = window.innerWidth * (1300) / (1920);     spacer.style.height =
    // `${spacerHeight}px`     thumbnail.style.height = `${spacerHeight}px` }, [])

    return (
        <Wrapper>

            <Spacer id="spacer"/>

            <p css={css `position: absolute; top: 110vh; z-index: 10;`}>
                <a href="#about">About</a>
            </p>

            <div css={css `z-index: 9;`}><HeroVideo/></div>
            <div
                id="about"
                css={css `position: relative; z-index: 10; margin-bottom: 80px;`}>
                <IntroLogo css={css `width: 300px; height: auto;`}/>
            </div>
            <h1 css={css `margin:50px 0 150px 0;`}>Kulturort Wehrmuehle in Brandenburger
                Biesenthal serves as a space for contemporary art and culture, in particular for
                the annual Art Biesenthal.</h1>

            <ValuesContainer>
                <ValueWrapper>
                    <h3 css={css `margin-bottom: 40px;`}>Values</h3>
                    <Hr/>
                </ValueWrapper>
                <ValueSpacer/> {Values.map((value) => (
                    <React.Fragment key={value[0]}>
                        <ValueWrapper >
                            <h3 css={css `margin-bottom: 40px;`}>{value[0]}</h3>
                            <p >{value[1]}</p>

                        </ValueWrapper>
                        <ValueSpacer/>
                    </React.Fragment>
                ))}
            </ValuesContainer>

            <StaticImage
                src="../../images/Location.jpg"
                alt="Wehrmuehle's location"
                layout="constrained"
                placeholder='blurred'
                width={1920}
                height={1120}
                css={css `width: calc(100% + 328px); margin: 0 -164px;`}/>

            <PillarsComponentDesktop/>

            <Hr />
            <HighlightsDesktop />

            <Hr/>

            {/* <UpcomingContainer>

                <h3 css={css `margin: 60px 0 100px 0;`}>Upcoming</h3>

                <StaticImage
                    src="../../images/HighlightsPlaceholder.png"
                    alt="A person looking at an artwork"
                    layout="constrained"
                    placeholder='blurred'
                    width={874}
                    height={1010}
                    css={css `width: 50%; margin-bottom: 30px; position: absolute; right: 0; z-index: -1;`}/>

                <h1 css={css `font-size:150px;`}>Art<br/>Biesenthal<br/>2022</h1>

                <h6 css={css `margin: 100px 0 40px 0;`}>
                    <TextLink to="/artbiesenthal">Art Biesenthal 2022</TextLink>
                </h6>

                <h6 >02. Juli – 29. August</h6>

                <h6 css={css `margin: 40px 0 40px 0;`}>{"Get your ticket via "}
                    <IcTicket css={css `transform: translateY(1px); height: 15px;`}/>
                    <a href="https://biesenthal.aikencura.de/#tickets" target="_blank" css={css`text-decoration: underline; &:hover {text-decoration: none;}`}>Ticket Tailor</a>
                </h6>

                <h2 css={css `margin: 200px 0 200px 0;`}>
                    <TextLink to="/artbiesenthal">Art Biesenthal</TextLink>
                    {` is an annual art exhibition and summer program that focuses on bringing international emerging and established artists together to exhibit.`}</h2>

            </UpcomingContainer> */}

            <FollowComponentDesktop
                text="@wehrmuehle"
                link="https://www.instagram.com/wehrmuehle/"/>

        </Wrapper>
    )
}
