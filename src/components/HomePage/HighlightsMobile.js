import React, {useRef, useState, useEffect} from "react";
import TextLink from "../UI/TextLink";
import IcArrowRight from "../../vectors/IcArrowRight.svg"
import {StaticImage} from "gatsby-plugin-image"

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'

import {Navigation} from "swiper";

const EventSpacer = styled("div")`
padding: 0 4rem !important;
& > * {
margin-bottom: 30px;
}
`
const ArrowsWrapper = styled("div")`
display: flex;
justify-content: space-evenly;
width: 50%;
`

export default function App() {

    const [currentSlideNumber,
        setCurrentSlideNumber] = useState(1)

    const [totalSlide,
        setTotalSlides] = useState(0)

    useEffect(() => {
        const swiper = document.getElementsByClassName("mySwiper")
        console.log(swiper)

        setTotalSlides(2)

    }, [])

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div css={css `position: relative; width: calc(100% + 8rem); margin: 0 -4rem;`}>

            <div
                css={css `display: flex; align-items: center; margin-bottom: 40px; padding: 0 4rem; justify-content:space-between;`}>
                <p css={css `font-size: 20px; font-weight: bold;`}>Upcoming</p>
                <ArrowsWrapper>
                    <div ref={prevRef} css={css`display: flex; justify-content: center; align-items: center;`}>
                        <IcArrowRight
                            css={css `width: 20px; height: auto; transform: rotate(180deg);`}/></div>
                    <h3>0{currentSlideNumber}
                        / 0{totalSlide}</h3>
                    <div ref={nextRef} css={css`display: flex; justify-content: center; align-items: center;`}><IcArrowRight css={css `width: 20px; height: auto;`}/></div>
                </ArrowsWrapper>
            </div>

            <Swiper
                onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper
                    .navigation
                    .init();
                swiper
                    .navigation
                    .update();
            }}
                navigation={false}
                modules={[Navigation]}
                className="mySwiper"
                loop={true}
                onSlideChange={(swiperCore) => {
                const {realIndex} = swiperCore;
                const nonDevIndex = realIndex + 1;
                setCurrentSlideNumber(nonDevIndex);
            }}>

                <SwiperSlide>
                    <EventSpacer>

                        <StaticImage
                            src="../../images/ABKeyVisual.jpg"
                            alt="Art Bisenthal's Key Visuakl"
                            layout="constrained"
                            placeholder='blurred'
                            width={875}
                            height={789}
                            css={css ` `}/>

                        <TextLink to="/artbiesenthal">
                            <h3 css={css `margin-bottom: 30px;`}>Art Biesenthal 2022</h3>
                        </TextLink>

                        <h3>09. July – 28. August</h3>

                        <h3>Get your ticket via
                            <br/>
                            <TextLink>
                                Ticket Tailor
                            </TextLink>
                        </h3>

                    </EventSpacer>

                    <h3
                        css={css `font-weight: bold; margin-bottom: 100px; padding: 0 4rem !important;`}>
                        <TextLink to="/artbiesenthal">Art Biesenthal</TextLink>
                        {` is an annual art exhibition and summer program that focuses on bringing international emerging and established artists together to exhibit.`}</h3>
                </SwiperSlide>

                <SwiperSlide>

                    <EventSpacer>
                        <StaticImage
                            src="../../images/AerialPalettes.jpg"
                            alt="A person looking at an artwork"
                            layout="constrained"
                            placeholder='blurred'
                            width={875}
                            height={789}/>
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

                    <h3
                        css={css `font-weight: bold; margin-bottom: 100px; padding: 0 4rem !important;`}>
                        {/* <TextLink to="/">Art Biesenthal</TextLink> */}
                        <TextLink to="/aerialpalettes">Aerial Palettes</TextLink>
                        {` is an interdisciplinary exhibition at the Wehrmuehle Biesenthal. This event aims to exhibit young and emerging artists together with established artists. Paul Ćinske-Moulden (Berlin Atonal & OHM Berlin) and curators Tom Esam and Camilla Lucii have selected an interesting mix of site-specific work, large-scale installations and private concerts to be displayed in the garden of the Wehrmuehle. `}</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}