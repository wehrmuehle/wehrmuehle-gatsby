import React, {useRef, useState, useEffect} from "react";
import TextLink from "../UI/TextLink";
import IcArrowRight from "../../vectors/IcArrowRight.svg"

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'

const EventSpacer = styled("div")`
height: 60vh;
& > * {
margin-bottom: 30px;
}
`
const ArrowsWrapper = styled("div")`
position: absolute; 
top: 45vh;
display: flex;
justify-content: space-evenly;
width: 100%;
margin: 0 auto;
`

export default function App() {

    const [currentSlideNumber,
        setCurrentSlideNumber] = useState(1)

    const [totalSlide,
        setTotalSlides] = useState(0)

    useEffect(() => {
        const swiper = document.getElementsByClassName("mySwiper")

        setTotalSlides(swiper[0].swiper.slidesSizesGrid.length)

    }, [])

    return (
        <div css={css `position: relative;`}>

            <ArrowsWrapper>
                <IcArrowRight
                    css={css `width: 30px; height: auto; transform: rotate(180deg);`}/>
                <h3>0{currentSlideNumber}
                    / 0{totalSlide}</h3>
                <IcArrowRight css={css `width: 30px; height: auto;`}/>
            </ArrowsWrapper>

            <Swiper
                className="mySwiper"
                onSlideChange={(swiperCore) => {
                const {realIndex} = swiperCore;
                const nonDevIndex = realIndex + 1;
                setCurrentSlideNumber(nonDevIndex);
            }}>

                <SwiperSlide>
                    <EventSpacer>

                        <TextLink to="/">
                            <h3 css={css `margin-bottom: 30px;`}>Art Biesenthal 2022</h3>
                        </TextLink>

                        <h3>02. Juli – 29. August</h3>

                        <h3>Get your ticket via
                            <br/>
                            <TextLink>
                                Ticket Tailor
                            </TextLink>
                        </h3>

                    </EventSpacer>

                    <h3 css={css `font-weight: bold; margin-bottom: 100px;`}>
                        <TextLink to="/artbiesenthal">Art Biesenthal</TextLink>
                        {` is an annual art exhibition and summer program that focuses on bringing international emerging and established artists together to exhibit.`}</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <EventSpacer>

                        <TextLink to="/">
                            <h3 css={css `margin-bottom: 30px;`}>Aerial Palettes</h3>
                        </TextLink>

                        <h3>04. September – 08. October</h3>

                        {/* <h3>Get your ticket via
                            <br/>
                            <TextLink>
                                Ticket Tailor
                            </TextLink>
                        </h3> */}

                    </EventSpacer>

                    <h3 css={css `font-weight: bold; margin-bottom: 100px;`}>
                        {/* <TextLink to="/">Art Biesenthal</TextLink> */}
                        {` Aerial Palettes is an interdisciplinary exhibition at the Wehrmuehle Biesenthal. This event aims to exhibit young and emerging artists together with established artists. Paul Ćinske-Moulden (Berlin Atonal & OHM Berlin) and curators Tom Esam and Camilla Lucii have selected an interesting mix of site-specific work, large-scale installations and private concerts to be displayed in the garden of the Wehrmuehle. `}</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}