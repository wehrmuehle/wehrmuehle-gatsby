import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import TextLink from '../UI/TextLink';

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

const Artists = [
    [
        "first-artist", "Jakob Kudsk Steensen", "http://www.jakobsteensen.com/"
    ],
    [
        "second-artist", "Fragment.in", "https://www.fragment.in/"
    ],
    [
        "third-artist", "Simon Heijdens", "http://www.simonheijdens.com/indexbig.php"
    ],
    [
        "fourth-artist", "Julian Charriere", "http://julian-charriere.net/"
    ],
    [
        "fifth-artist", "Quayola", "https://quayola.com/"
    ],
    ["sixth-artist", "Andreas Greiner", "https://www.andreasgreiner.com/"]
]

const Partners = [
    [
        "first-partner", "Dittrich & Schlechtriem", "https://dittrich-schlechtriem.com/"
    ],
    [
        "second-partner", "SuperBlue", "https://www.superblue.com/"
    ],
    [
        "third-partner", "Trekantfest", "https://www.trekantfest.dk/"
    ],
    [
        "fourth-partner", "Acte", "https://actetm.com/"
    ],
    ["fifth-partner", "FH Potsdam - University of Applied Sciences", "https://www.fh-potsdam.de/"]
]

export default function ArtBiesenthalMobile() {
    return (
        <div>
            <h1 css={css `font-size: 60px; margin-top: 100px;`}>Art
                <br/>Biesenthal
                <br/>2022</h1>

            <h1 css={css `margin-top: 100px; margin-bottom: 100px;`}>One of the most
                sought-after annual art exhibitions and summer programs brings international
                emerging and established artists together in its epicenter, Wehrmuehle.</h1>

            <div
                css={css `display: flex; flex-direction: column; &>*{margin-bottom: 40px;}`}>
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

            <div
                css={css `margin-top: 50px; display: flex; width: 100%; flex-direction: column; &>*{margin-bottom: 20px;}`}>
                <h6>Art Biesenthal 2022</h6>
                <h6>02. Juli – 29. August</h6>
                <h6>Get your ticket via{' '}
                    <TextLink>Ticket Tailor</TextLink>
                </h6>
            </div>

            <div
                css={css `display: flex; width: 100%; flex-direction: column; &>*{margin-bottom: 30px;}`}>
                <h6>Öffnungszeiten</h6>
                <h2 css={css `font-size: 60px; margin-bottom: 100px;`}>1pm – 7pm</h2>
            </div>

            <Hr/>

            <h3 css={css `font-size: 20px; margin: 50px 0;`}>/w</h3>

            <div css={css `width: 100%; word-break: break-word;`}>
                {Artists.map((artist) => {
                    return artist[0] === "sixth-artist"
                        ? <a href={artist[2]} css={css `font-size: 3.75rem;`}>

                                {`${artist[1]}`}

                            </a>

                        : <a href={artist[2]} css={css `font-size: 3.75rem;`}>

                            {`${artist[1]}`}
                            {`${ ','}`}&nbsp;</a>

                })}

            </div>

            <Hr css={css `margin: 50px 0;`}/>

            <h3 css={css `font-size: 20px; margin: 50px 0;`}>Partners</h3>

        </div>
    )
}
