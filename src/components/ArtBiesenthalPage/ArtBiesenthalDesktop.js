import React from 'react'
import {StaticImage} from "gatsby-plugin-image";
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import TextLink from '../UI/TextLink';
import IcTicket from '../../vectors/IcTicket.svg'
import ArtistsSectionComponent from './ArtistsSectionComponent'
import PartnersSectionComponent from './PartnersSectionComponent';
import GastronomySectionComponent from './GastronomySectionComponent';
import SponsorsSectionComponent from './SponsorsSectionComponent';
import FollowComponentDesktop from '../FollowComponentDesktop'

const Wrapper = styled("div")`
width: 100%;
`
const HeroWrapper = styled("div")`
width: 100%;
height: 100vh;
position: relative;
`

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

export default function HomePageDekstop({eventData}) {
    return (
        <Wrapper>

            <HeroWrapper>

                <StaticImage
                    src="../../images/gradientPlaceholder.jpg"
                    alt="A decorative gradient"
                    layout="constrained"
                    placeholder='blurred'
                    width={1921}
                    height={1467}
                    css={css `width: calc(100% + 328px); margin:-100px -164px 0 -164px; z-index: -2; position: absolute; top: -200px; opacity: .5;`}/>
                <StaticImage
                    src="../../images/ABKeyVisual.jpg"
                    alt="Art Bisenthal's Key Visuakl"
                    layout="constrained"
                    placeholder='blurred'
                    width={875}
                    height={789}
                    css={css `z-index: -1; position: absolute; right: 0; top: -50px; width: 45vw; max-width: 875px; `}/>

                <h1 css={css `margin-top: 160px; font-size: 12.5rem;`}>Art
                    <br/>Biesenthal
                    <br/>2022</h1>
            </HeroWrapper>

            <h1 css={css `margin-top:-150px; margin-bottom: 100px;`}>Art Biesenthal is an
                annual art exhibition and summer program at the Wehrmuehle Biesenthal that
                focuses on bringing together international emerging and established artists.
            </h1>

            <div css={css `display: flex;`}>
                <div
                    css={css `display: flex;flex-direction:column; justify-content: space-between; width: 50%;`}>
                    <div
                        css={css `display: flex; width: 100%; flex-direction: column; &>*{margin-bottom: 30px;}`}>
                        <h6>Art Biesenthal 2022</h6>
                        <h6>02. Juli – 29. August</h6>
                        <h6 css={css `margin: 40px 0 40px 0; `}>{"Get your ticket via "}
                            <IcTicket css={css `transform: translateY(1px); height: 15px;`}/>
                            <a href="https://biesenthal.aikencura.de/#tickets" target="_blank" css={css`text-decoration: underline; &:hover {text-decoration: none;}`}>Ticket Tailor</a>
                        </h6>
                    </div>
                    <div
                        css={css `display: flex; width: 100%; flex-direction: column; &>*{margin-bottom: 15px;}`}>
                        <h6>Öffnungszeiten</h6>
                        <div css={css `display: flex; justify-content: space-between; width: 50%;`}>
                            <h2>SAT</h2>
                            <h2>–</h2>
                            <h2>SUN</h2>
                        </div>
                        <div css={css `display: flex; justify-content: space-between; width: 50%;`}>
                            <h2>1pm</h2>
                            <h2>–</h2>
                            <h2>7pm</h2>
                        </div>

                    </div>
                </div>
                <div
                    css={css `display: flex; width: 50%; flex-direction: column; &>*{margin-bottom: 30px;}`}>
                    <p>The Wehrmuehle is a historic site in the middle of a planned UNESCO nature
                        reserve titled " Human and Biosphere." This year's focus is on the natural world
                        as a source of inspiration for artists - and thus on transdisciplinary
                        approaches.</p>
                    <p>"In the city it’s easy to get overwhelmed. You go gallery hopping, you have a
                        glass of wine in one place, then go to the next, and quickly you’re
                        oversaturated without even absorbing what you’re seeing. I hope we give people a
                        chance to feel a deceleration.” - Tjioe Meyer Hecken, curator Art Biesenthal</p>

                    <p>Art Biesenthal 2022 artists include Fragment.in, Simon Heijdens, Julian
                        Charriere, Julius von Bismarck, Daniel Hoelzl, Andreas Greiner, Quayola, Olivia
                        Steele, Jakob Kukula, Halveig Villand, Aiken Cura, Acte, Lucija Krizmann, Nils
                        Blau, Jakob Kudsk Steensen, Eike Koenig, Martin Nothhelfer, Abie Franklin.
                    </p>

                </div>
            </div>

            <Hr css={css `margin: 150px 0 50px 0;`}/>

            <ArtistsSectionComponent/>

            <Hr/>

            <PartnersSectionComponent/>

            <Hr css={css `margin: 150px 0 50px 0;`}/> {/* <DatesNew data={eventData}/> */}

            <GastronomySectionComponent/>

            <Hr css={css `margin: 150px 0 50px 0;`}/>

            <SponsorsSectionComponent/>

            <FollowComponentDesktop
                text="@Art Bisenthal"
                link="https://www.instagram.com/artbiesenthal/"/>

        </Wrapper>
    )
}
