import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import SinglePillar from './SinglePillar';
import {StaticImage} from "gatsby-plugin-image"

const PillarsContent = {
    ex: [
        "Exhibitions", "Wehrmuehle presents site-specific installations, performances, and panel discuss" +
                "ions that spotlight international artists at all stages of their careers.",
        "first"
    ],
    re: [
        "Residency", "The Wehrmuehle Art residency in June 2022 will feature a cross-section of discip" +
                "lines, including sculpture, video, sound, painting, photography, and performance" +
                ". In the lead up to the exhibition, all artists are invited to use Wehrmuehle as" +
                " their studio to conduct research, workshops, facilitate collaborations, and exp" +
                "eriment.",
        "second"
    ],
    co: [
        "Collaborations", "Wehrmuehle has partnered with brands in a wide range of fields, from fashion to " +
                "entertainment to culinary events, to help create unparalleled experiences.",
        "third"
    ],
    na: [
        "Nature", 'Located in the middle of a UNESCO nature reserve titled "Human and Biosphere," W' +
                'ehrmuehle is a historical and cultural site dating back to the 14th century.',
        "fourth"
    ]
}

const spaces = [
    [
        "The Gallery", "300 m²"
    ],
    [
        "The Guesthouse", "400 m²"
    ],
    [
        "The Mill", "300 m²"
    ],
    ["The Park", "10.000 m²"]
]

const spacesMapped = spaces.map((space) => {
    return (
        <div
            key={space[0]}
            css={css `width: 100%; display: flex; justify-content: space-between;`}>
            <p>{space[0]}</p>
            <p>{space[1]}</p>
        </div>
    )
})

export default function PillarsComponentMobile() {
    return (
        <div>
            <h3 css={css `font-size: 20px; margin: 50px 0;`}>Pillars</h3>
            <p css={css `margin-bottom: 50px;`}>Wehrmuehle is comprised of three buildings,
                The Gallery, The Guesthouse and The Mill. Onsite facilities include
                accommodation, gastronomy, studio and co-working space, exhibition space, and
                storage.</p>

            <div css={css `margin-bottom: 70px;`}>{spacesMapped}</div>

            <SinglePillar
                title={PillarsContent.ex[0]}
                text={PillarsContent.ex[1]}
                icon={PillarsContent.ex[2]}>
                <StaticImage
                    src="../../images/exhibitions.jpg"
                    alt="Wehrmuehle Location's"
                    layout="constrained"
placeholder='blurred'
                    width={6240}
                    height={4160}/>
            </SinglePillar>

            <SinglePillar
                title={PillarsContent.re[0]}
                text={PillarsContent.re[1]}
                icon={PillarsContent.re[2]}>
                <StaticImage
                    src="../../images/residency.jpg"
                    alt="Wehrmuehle Location's"
                    layout="constrained"
placeholder='blurred'
                    width={1440}
                    height={1920}/>
            </SinglePillar>

            <SinglePillar
                title={PillarsContent.co[0]}
                text={PillarsContent.co[1]}
                icon={PillarsContent.co[2]}>
                <StaticImage
                    src="../../images/collaborations.jpg"
                    alt="Wehrmuehle Location's"
                    layout="constrained"
placeholder='blurred'
                    width={3324}
                    height={2236}/>
            </SinglePillar>

            <SinglePillar
                title={PillarsContent.na[0]}
                text={PillarsContent.na[1]}
                icon={PillarsContent.na[2]}>
                <StaticImage
                    src="../../images/nature.jpg"
                    alt="Wehrmuehle Location's"
                    layout="constrained"
placeholder='blurred'
                    width={3575}
                    height={2433}/>
            </SinglePillar>
        </div>
    )
}
