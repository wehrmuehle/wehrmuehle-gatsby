import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import IcLocation from '../vectors/IcLocation.svg'

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

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
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

const DirectionsMapped = Directions.map((direction) => (
    <DirectionsMappedWrapper key={direction[0]}>
        <h1 css={css `margin-bottom: 30px;`}>{direction[0]}</h1>
        <p css={css `margin-bottom: 70px;`}>
            {direction[1]}</p>
    </DirectionsMappedWrapper>
))

export default function DirectionsMobile() {
    return (
        <DirectionsWrapper id="directions-mobile">

            <Hr bg="white" css={css `margin-top: 50px; margin-bottom: 70px;`}/>

            <h1 css={css `margin-bottom: 80px;`}>How to get to</h1>

            <p
                css={css `text-align: right; align-self: end; font-size: 50px; font-weight: bold; line-height: 1.2; margin-bottom: 50px;`}>Wehrmuehle
                <br/>
                Biesenthal</p>

            <div
                css={css `display: flex; align-items: center; width: 80%; justify-content: space-between; margin: 0 auto 40px auto;`}>
                <IcLocation css={css `width: 31px; height: auto; filter: invert(1);`}/>
                <p>Wehrmühlenweg 8
                    <br/>
                    16359 Biesenthal</p>

            </div>

            <a
                href="https://goo.gl/maps/soh2KZbxNeVLYhTS6"
                target="_blank"
                css={css `align-self: flex-end;`}>
                <p css={css `margin-bottom: 30px;`}>Get directions</p>
            </a>

            {DirectionsMapped}

        </DirectionsWrapper>
    )
}
