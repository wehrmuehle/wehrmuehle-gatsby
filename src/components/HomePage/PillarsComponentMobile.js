import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import SinglePillar from './SinglePillar';
import {StaticImage} from "gatsby-plugin-image"

const PillarsContent = {
    ex: [
        "Exhibitions", "Wehrmuehle focuses on bringing international emerging and established artists to" +
                "gether to exhibit, hosting site-specific installations, performances, and panel " +
                "discussions that spotlight creators in all stages of their careers.",
        "Housing international art practices"
    ],
    re: [
        "Residency", "The Wehrmuehle Art residency in June 2022 features disciplines like sculpture, v" +
                "ideo, sound, painting, photography, and performance. In the lead-up to the exhib" +
                "ition, artists can use Wehrmuehle as their studio for research, workshops, colla" +
                "borations, and experiments.",
        "Connecting all art disciplines"
    ],
    co: [
        "Collaborations", "As a brand partner, Wehrmuehle has contributed to the creation of unparalleled e" +
                "xperiences across a variety of fields ranging from music, fashion, and entertain" +
                "ment to unique culinary events, always open to creative collaborations.",
        "Inviting creative collaborations"
    ],
    na: [
        "Nature", "From its construction in the 14th century to its most recent reconstruction in 2" +
                "002 by the Hecken Family, Wehrmuehle has developed into a Kulturort of outstandi" +
                "ng natural, historical, and cultural significance, becoming a forum for internat" +
                "ional art practice.",
        "Wehrmuehle’s constant evolution "
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
                smallHeader={PillarsContent.ex[2]}
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
                smallHeader={PillarsContent.re[2]}
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
                smallHeader={PillarsContent.co[2]}
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
                smallHeader={PillarsContent.na[2]}
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
