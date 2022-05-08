import React, {useState, useEffect} from 'react'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import TextLink from '../UI/TextLink';
import IcInstagram from '../../vectors/IcInstagram.svg'
import IntroLogo from '../../vectors/IntroLogo.svg'
import IcLocation from '../../vectors/IcLocation.svg'
import HeroVideo from '../ProgressiveVideo/HeroVideo';
import DatesSectionComponent from './DatesSectionComponent';
import ArtistsSectionComponent from './ArtistsSectionComponent'

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

export default function HomePageDekstop() {

    return (
        <Wrapper>

            <StaticImage
                src="../../images/abPlaceholder.png"
                alt="A person looking at an artwork"
                layout="constrained"
                width={1920}
                height={1080}
                css={css `width: calc(100% + 328px); margin:0 -164px 0 -164px; z-index: -1;`}/>

            <h1 css={css `position: absolute; top: 160px; font-size: 150px; color: white;`}>Art
                <br/>Biesenthal
                <br/>2022</h1>

            <h1 css={css `margin-top: 100px; margin-bottom: 100px;`}>One of the most
                sought-after annual art exhibitions and summer programs brings international
                emerging and established artists together in its epicenter, Wehrmuehle.</h1>

            <div css={css `display: flex;`}>
                <div
                    css={css `display: flex;flex-direction:column; justify-content: space-between; width: 50%;`}>
                    <div
                        css={css `display: flex; width: 100%; flex-direction: column; &>*{margin-bottom: 30px;}`}>
                        <h6>Art Biesenthal 2022</h6>
                        <h6>02. Juli – 29. August</h6>
                        <h6>Get your ticket via{' '}
                            <TextLink>Ticket Tailor</TextLink>
                        </h6>
                    </div>
                    <div
                        css={css `display: flex; width: 100%; flex-direction: column; &>*{margin-bottom: 30px;}`}>
                        <h6>Öffnungszeiten</h6>
                        <h2>1pm – 7pm</h2>
                    </div>
                </div>
                <div
                    css={css `display: flex; width: 50%; flex-direction: column; &>*{margin-bottom: 30px;}`}>
                    <p>Art Biesenthal brings together international artists from every stage of
                        their lifework, such as Alicja Kwade, Norbert Bisky, and Thomas Rentmeister,
                        with works exhibited at the beginning of their burgeoning art careers in 2008.
                        Alternately, exhibiting established artists such as Julian Rosefeldt, Michael
                        Sailstorfer, Andreas Muehe, Gregor Hildebrandt, and Jonas Burgert in the past
                        years.</p>
                    <p>Photography pioneer Nan Goldin ran a site-specific based project at Art
                        Biesenthal 2018 with fellow participating artists.There is much anticipation for
                        selected artists to unite corners of the world for the 2022 exhibition and
                        summer program, collectives include DRIFT and Fragment.in.
                    </p>
                    <p>We celebrate our ongoing conversation with Koenig Gallery towards artist
                        representation and development, which in turn contributes to the cultural
                        vitality of the Berlin art scene.</p>
                </div>
            </div>

            <Hr css={css `margin: 150px 0 50px 0;`}/>

            <ArtistsSectionComponent/>

            <Hr css={css `margin-bottom: 30vh;`}/>

            <DatesSectionComponent />

        </Wrapper>
    )
}
