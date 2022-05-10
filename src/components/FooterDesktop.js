import React, {useEffect, useState} from 'react'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import IcInstagram from '../vectors/IcInstagram.svg'
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
];

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



export default function HomePageDekstop() {



    return (
        <Wrapper>

       

            <Hr/>

            <h3 css={css `margin: 100px 0 80px 0;`}>Follow us</h3>

            <p
                css={css `font-size: 130px; font-weight: bold; margin-right: 20px; margin-bottom: 50px;`}>@wehrmuehle</p>

            <div css={css `display: flex;`}>
                <h6 css={css `margin-right: 20px;`}>Instagram</h6>
                <IcInstagram css={css `width: 26px; height: auto;`}/>
            </div>

            <FollowBottomContainer css={css `margin:100px 0 150px 0;`}>
                <NewsletterContainer>
                    <h3>Newsletter</h3>
                    <p css={css `margin: 40px 0 30px 0;`}>Sign up with your email address to receive news and updates.</p>
                </NewsletterContainer>
                <ContactContainer>
                    <h3>Contact</h3>
                    <p css={css `margin-top: 40px;`}>Wehrmühlenweg 8
                        <br/>
                        16359 Biesenthal (near Berlin)
                        <br/><br/>
                        mail@wehrmuehle.de<br/>
                        +49 175 5038587</p>
                </ContactContainer>
            </FollowBottomContainer>

            <DirectionsWrapper id="location-desktop">

                <Hr bg="white" css={css `margin-bottom: 100px;`}/>

                <h3 css={css `color: white;`}>How to get to</h3>
                <h1 css={css `text-align: right; justify-self: end; margin: 70px 0 100px 0;`}>Wehrmuehle Biesenthal</h1>

                <ValuesContainer>
                    <ValueWrapper>
                        <IcLocation
                            css={css `width: 31px; height: auto; filter: invert(1); margin-bottom: 40px;`}/>
                        <p>Wehrmühlenweg 8
                            <br/>
                            16359 Biesenthal</p>
                    </ValueWrapper>
                    <ValueSpacer/> {Directions.map((direction) => (
                        <React.Fragment key={direction[0]}>
                            <ValueWrapper css={css `justify-self: end;`}>
                                <h3 css={css `margin-bottom: 40px; color: white;`}>{direction[0]}</h3>
                                <p>{direction[1]}</p>

                            </ValueWrapper>
                            <ValueSpacer/>
                        </React.Fragment>
                    ))}
                </ValuesContainer>
            </DirectionsWrapper>

        </Wrapper>
    )
}
