import React, {useRef, useState, useEffect} from "react";
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import IcArrowRight from "../../vectors/IcArrowRight.svg"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles-desktop.css";

// import required modules
import {EffectFade, Navigation, Pagination} from "swiper";
import HighlightDesktopSlide from "./HighlightDesktopSlide";

export default function HighlightsDesktop() {

    const [currentSlideNumber,
        setCurrentSlideNumber] = useState(1)

    const [totalSlide,
        setTotalSlides] = useState(0)

    useEffect(() => {
        const swiper = document.getElementsByClassName("mySwiper")

        setTotalSlides(swiper[0].childElementCount)

    }, [])

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div css={css `position: relative;`}>
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
                spaceBetween={30}
                effect={"fade"}
                loop={true}
                navigation={false}
                modules={[EffectFade, Navigation]}
                className="mySwiper"
                onSlideChange={(swiperCore) => {
                const {realIndex} = swiperCore;
                const nonDevIndex = realIndex + 1;
                setCurrentSlideNumber(nonDevIndex);
            }}>
                <SwiperSlide>
                    <HighlightDesktopSlide
                        title="Art Biesenthal 2022"
                        link="/artbiesenthal"
                        dates="02. Juli – 29. August"
                        ticketLink="https://biesenthal.aikencura.de/#tickets"
                        descriptionName="Art Biesenthal"
                        description=" is an annual art exhibition and summer program that focuses on bringing international emerging and established artists together to exhibit.">
                        <StaticImage
                            src="../../images/ABKeyVisual.jpg"
                            alt="A person looking at an artwork"
                            layout="constrained"
                            placeholder='blurred'
                            width={875}
                            height={789}/>
                    </HighlightDesktopSlide>
                </SwiperSlide>

                <SwiperSlide>
                    <HighlightDesktopSlide
                        title="Aerial Palettes"
                        link="/aerialpalettes"
                        dates="04. September – 08. October"
                        // ticketLink="https://biesenthal.aikencura.de/#tickets"
                        descriptionName="Aerial Palettes"
                        description=" is an interdisciplinary exhibition at the Wehrmuehle Biesenthal featuring an exciting mix of site-specific work, large-scale installations, and private concerts. ">
                        <StaticImage
                            src="../../images/AerialPalettes.jpg"
                            alt="A person looking at an artwork"
                            layout="constrained"
                            placeholder='blurred'
                            width={875}
                            height={789}/>
                    </HighlightDesktopSlide>
                </SwiperSlide>

                <div
                    css={css `display: flex; align-items: center; position: absolute; top: 145vh; z-index: 2; &>* {margin-right: 15px;}  @media (min-width: 1600px) {top: 110vh;} @media (min-width: 1900px) {top: 100vh;}`}>

                    <div ref={prevRef}>
                        <IcArrowRight
                            css={css `width: 30px; height: auto; transform: rotate(180deg);`}/></div>
                    <h3>0{currentSlideNumber}
                        / 0{totalSlide}</h3>
                    <div ref={nextRef}>
                        <IcArrowRight css={css `width: 30px; height: auto;`}/></div>
                </div>

            </Swiper>
        </div>
    );
}
