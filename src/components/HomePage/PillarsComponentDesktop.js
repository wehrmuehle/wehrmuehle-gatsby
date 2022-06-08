import React, {useState} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {StaticImage} from "gatsby-plugin-image"

const width = 300;

const height = width / 3.744;

const Wrapper = styled("div")`
padding-top: 100px;
padding-bottom: 150px;
width: 100%;
min-height: 100vh;
`

const SmallShortPillar = styled("div")`
width: 19.23%;
height: 89.6%;
background-color: black;
opacity: ${props => props.opacity};
`
const BigShortPillar = styled("div")`
width: 21.15%;
height: 89.6%;
background-color: black;
opacity: ${props => props.opacity};
`
const LongPillar = styled("div")`
width: 19.23%;
height: 100%;
background-color: black;
opacity: ${props => props.opacity};
`
const PillarContainer = styled("div")`
width: ${width}px;
height: ${height}px;
display: inline-flex;
align-items: start;
justify-content: space-between;
margin-bottom: 150px;
`

const TextPillarContainer = styled("div")`
display: flex;
flex-direction: column;
align-items: start;
width: 40%;
`

const TextPillar = styled("h1")`
font-size: 60px;
text-decoration: ${props => props.td};
margin-bottom: 30px;
opacity: ${props => props.opacity};


`

const BottomContainer = styled("div")`
display: flex;
justify-content:space-between ;
`

const ContentContainer = styled("div")`
width: 50%;
display: ${props => props.display};
margin-top: ${props => props.mt};
`

export default function PillarsComponentDesktop() {
    const [descriptionVisibility,
        setDescriptionVisibility] = useState(true);
    const [firstPillarVisibility,
        setFirstPillarVisibility] = useState(false);
    const [secondPillarVisibility,
        setSecondPillarVisibility] = useState(false);
    const [thirdPillarVisibility,
        setThirdPillarVisibility] = useState(false);
    const [fourthPillarVisibility,
        setFourthPillarVisibility] = useState(false);

    const handlePillarVisibility = (e) => {
        switch (e.target.id) {
            case "first-pillar":
                setDescriptionVisibility(false);
                setFirstPillarVisibility(true);
                setSecondPillarVisibility(false);
                setThirdPillarVisibility(false);
                setFourthPillarVisibility(false);
                break;
            case "second-pillar":
                setDescriptionVisibility(false);
                setFirstPillarVisibility(false);
                setSecondPillarVisibility(true);
                setThirdPillarVisibility(false);
                setFourthPillarVisibility(false);
                break;
            case "third-pillar":
                setDescriptionVisibility(false);
                setFirstPillarVisibility(false);
                setSecondPillarVisibility(false);
                setThirdPillarVisibility(true);
                setFourthPillarVisibility(false);
                break;

            case "fourth-pillar":
                setDescriptionVisibility(false);
                setFirstPillarVisibility(false);
                setSecondPillarVisibility(false);
                setThirdPillarVisibility(false);
                setFourthPillarVisibility(true);
                break;

            default:
                break;
        }
    }

    const handlePillarStateAssignment = (id) => {
        switch (id) {
            case "first-pillar":
                return firstPillarVisibility
            case "second-pillar":
                return secondPillarVisibility
            case "third-pillar":
                return thirdPillarVisibility

            case "fourth-pillar":
                return fourthPillarVisibility

            default:
                break;
        }
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

    const pillars = [
        [
            "Exhibitions", "first-pillar"
        ],
        [
            "Residency", "second-pillar"
        ],
        [
            "Collaborations", "third-pillar"
        ],
        ["Nature", "fourth-pillar"]
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

    const pillarsMapped = pillars.map((pillar) => {
        const stateCheck = handlePillarStateAssignment(pillar[1]);
        const opacityValue = stateCheck
            ? "100%"
            : (descriptionVisibility
                ? "100%"
                : "30%")
        const textDecorationValue = stateCheck
            ? "none"
            : (descriptionVisibility
                ? "underline"
                : "underline")
        return (
            <TextPillar
                onMouseOver={handlePillarVisibility}
                id={pillar[1]}
                opacity={opacityValue}
                td={textDecorationValue}>{pillar[0]}</TextPillar>
        )
    })

    return (
        <Wrapper>

            <PillarContainer>
                <SmallShortPillar
                    opacity={firstPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}/>
                <BigShortPillar
                    opacity={secondPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}/>
                <BigShortPillar
                    opacity={thirdPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}/>
                <LongPillar
                    opacity={fourthPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}/>
            </PillarContainer>

            <BottomContainer>
                <TextPillarContainer>
                    {pillarsMapped}
                </TextPillarContainer>

                <ContentContainer
                    display={descriptionVisibility
                    ? "visible"
                    : "none"}
                    id="description">
                    <div>
                        <p css={css `margin-bottom: 50px;`}>Wehrmuehle is comprised of three buildings,
                            The Gallery, The Guesthouse and The Mill. Onsite facilities include
                            accommodation, gastronomy, studio and co-working space, exhibition space, and
                            storage.</p>

                    </div>

                    <div>
                        {spacesMapped}
                    </div>

                </ContentContainer>

                <ContentContainer
                    display={firstPillarVisibility
                    ? "visible"
                    : "none"}
                    mt={"-200px"}>
                    <div>
                        <StaticImage
                            src="../../images/exhibitions.jpg"
                            alt="Wehrmuehle Location's"
                            layout="constrained"
placeholder='blurred'
                            width={6240}
                            height={4160}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>Wehrmuehle presents site-specific installations, performances, and panel
                        discussions that spotlight international artists at all stages of their careers.</p>

                </ContentContainer>

                <ContentContainer
                    display={secondPillarVisibility
                    ? "visible"
                    : "none"}
                    mt={"-200px"}>
                    <div>

                        <StaticImage
                            src="../../images/residency.jpg"
                            alt="Wehrmuehle Location's"
                            layout="constrained"
placeholder='blurred'
                            width={1440}
                            height={1920}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>The Wehrmuehle Art residency in June 2022 will feature a cross-section of
                        disciplines, including sculpture, video, sound, painting, photography, and
                        performance. In the lead up to the exhibition, all artists are invited to use
                        Wehrmuehle as their studio to conduct research, workshops, facilitate
                        collaborations, and experiment.</p>

                </ContentContainer>

                <ContentContainer
                    display={thirdPillarVisibility
                    ? "visible"
                    : "none"}
                    mt={"-200px"}>
                    <div>
                        <StaticImage
                            src="../../images/collaborations.jpg"
                            alt="Wehrmuehle Location's"
                            layout="constrained"
placeholder='blurred'
                            width={3324}
                            height={2236}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>Wehrmuehle has partnered with brands in a wide range of fields, from fashion
                        to entertainment to culinary events, to help create unparalleled experiences.</p>

                </ContentContainer>

                <ContentContainer
                    display={fourthPillarVisibility
                    ? "visible"
                    : "none"}
                    mt={"-200px"}>
                    <div>
                        <StaticImage
                            src="../../images/nature.jpg"
                            alt="Wehrmuehle Location's"
                            layout="constrained"
placeholder='blurred'
                            width={3575}
                            height={2433}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>Located in the middle of a UNESCO nature reserve titled "Human and
                        Biosphere," Wehrmuehle is a historical and cultural site dating back to the 14th
                        century.</p>

                </ContentContainer>
            </BottomContainer>

        </Wrapper>
    )
}
