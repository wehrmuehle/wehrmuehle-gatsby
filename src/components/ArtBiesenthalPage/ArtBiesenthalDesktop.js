import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import TextLink from '../UI/TextLink';

import DatesSectionComponent from './DatesSectionComponent';
import ArtistsSectionComponent from './ArtistsSectionComponent'
import DatesNew from './DatesNew';

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

export default function HomePageDekstop({eventData}) {
    return (
        <Wrapper>

            <StaticImage
                src="../../images/gradientPlaceholder.jpg"
                alt="A person looking at an artwork"
                layout="constrained"
                width={1921}
                height={1467}
                css={css `width: calc(100% + 328px); margin:-100px -164px 0 -164px; z-index: -1;`}/>

            <h1 css={css `position: absolute; top: 160px; font-size: 150px;`}>Art
                <br/>Biesenthal
                <br/>2022</h1>

            <h1 css={css `margin-top:-150px; margin-bottom: 100px;`}>One of the most
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
            <DatesNew data={eventData}/>

        </Wrapper>
    )
}
