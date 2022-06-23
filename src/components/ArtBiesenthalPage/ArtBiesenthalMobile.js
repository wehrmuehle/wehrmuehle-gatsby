import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {StaticImage} from "gatsby-plugin-image";
import TextLink from '../UI/TextLink';
import GastronomySectionComponent from './GastronomySectionComponent';
import FollowComponentMobile from '../FollowComponentMobile'
import DirectionsMobile from '../DirectionsMobile';
import DatesMobile from './DatesMobile';

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

export default function ArtBiesenthalMobile({eventData}) {
    return (
        <div>

            <div css={css `position: relative;`}>
                <h1 css={css `font-size: 60px; margin-top: 100px; margin-bottom: 50px;`}>Art
                    <br/>Biesenthal
                    <br/>2022</h1>

                <StaticImage
                    src="../../images/gradientPlaceholder.jpg"
                    alt="A decorative gradient"
                    layout="constrained"
                    placeholder='blurred'
                    width={1921}
                    height={1467}
                    css={css `width: calc(100% + 8rem); margin:0 -4rem 0 -4rem; z-index: -2; position: absolute; top: -120px; opacity: .5;`}/>
                <StaticImage
                    src="../../images/ABKeyVisual.jpg"
                    alt="Art Bisenthal's Key Visuakl"
                    layout="constrained"
                    placeholder='blurred'
                    width={875}
                    height={789}
                    css={css `z-index: -1; position: absolute; top: -50px; width: calc(100% + 8rem); margin:0 -4rem 0 -4rem; `}/>

            </div>

            <h1 css={css `margin-top: 100px; margin-bottom: 100px;`}>Art Biesenthal is an
                annual art exhibition and summer program at the Wehrmuehle Biesenthal that
                focuses on bringing together international emerging and established artists.
            </h1>

            <div
                css={css `display: flex; flex-direction: column; &>*{margin-bottom: 40px;}`}>
                <p>The Wehrmuehle is a historic site in the middle of a planned UNESCO nature
                    reserve titled " Human and Biosphere." This year's focus is on the natural world
                    as a source of inspiration for artists - and thus on trans-disciplinary
                    approaches.</p>
                <p>"In the city it’s easy to get overwhelmed. You go gallery hopping, you have a
                    glass of wine in one place, then go to the next, and quickly you’re
                    oversaturated without even absorbing what you’re seeing. I hope we give people a
                    chance to feel a deceleration.” - Tjioe Meyer Hecken, curator Art Biesenthal
                </p>
                <p>Art Biesenthal 2022 artists include Fragment.in, Simon Heijdens, Julian
                    Charriere, Julius von Bismarck, Daniel Hoelzl, Andreas Greiner, Quayola, Olivia
                    Steele, Jakob Kukula, Halveig Villand, Aiken Cura, Acte, Lucija Krizmann, Nils
                    Blau, Jakob Kudsk Steensen, Eike Koenig, Martin Nothhelfer, and Abie Franklin.</p>
            </div>

            <div
                css={css `margin-top: 50px; display: flex; width: 100%; flex-direction: column; &>*{margin-bottom: 20px;}`}>
                <h3>Art Biesenthal 2022</h3>
                <h3>02. Juli – 29. August</h3>
                <h3>Get your ticket via{' '}
                    <TextLink>Ticket Tailor</TextLink>
                </h3>
            </div>

            <div
                css={css `display: flex; width: 100%; margin-top: 50px; flex-direction: column; &>*{margin-bottom: 30px;}`}>
                <h3>Öffnungszeiten</h3>
                <div
                    css={css `display: flex; justify-content: space-between;&>h2 {font-size: 60px !important;} `}>
                    <h2>SAT</h2>
                    <h2>–</h2>
                    <h2>SUN</h2>
                </div>
                <div
                    css={css `display: flex; justify-content: space-between; &>h2 {font-size: 60px !important;}`}>
                    <h2>1pm</h2>
                    <h2>–</h2>
                    <h2>7pm</h2>
                </div>
                {/* <h2 css={css `font-size: 60px; margin-bottom: 100px;`}>1pm – 7pm</h2> */}
            </div>

            <Hr css={css `margin: 80px 0 65px;`}/>

            <h3 css={css `font-size: 20px; margin: 50px 0;`}>/w</h3>

            <h3>Jakob Kudsk Steensen, Fragment.in, Simon Heijdens, Julian Charriere,
                Quayola, Andreas Greiner, and more</h3>

            <Hr css={css `margin: 80px 0 65px;`}/>

            <h3 css={css `font-size: 20px; margin: 50px 0;`}>Partners</h3>

            <h3>Dittrich & Schlechtriem, SuperBlue, Trekantfest, Acte, FH Potsdam -
                University of Applied Sciences, and more</h3>

            <Hr css={css `margin: 80px 0 65px;`}/>
            <DatesMobile data={eventData}/>
            <Hr css={css `margin: 80px 0 65px;`}/>

            <GastronomySectionComponent/>

            <Hr css={css `margin: 80px 0 65px;`}/>

            <h3 css={css `font-size: 20px; margin: 50px 0;`}>Sponsors</h3>

            <h3 css={css `margin-bottom: 50px;`}>Doktor Hauschka, Nespresso, Ostmost, Waysa, Campari, Conmoto, and more</h3>

            <Hr css={css `margin: 80px 0 65px;`}/>

            <FollowComponentMobile
                text="@Art Bisenthal"
                link="https://www.instagram.com/artbiesenthal/"/>

            <DirectionsMobile/>

        </div>
    )
}
