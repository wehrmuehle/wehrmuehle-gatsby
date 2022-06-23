import React, {useState} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {StaticImage} from "gatsby-plugin-image"

const width = 300;

const height = width / 3.744;

const Wrapper = styled("div")`
padding-top: 100px;
width: 100%;
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
            case("first-pillar" || "first-p"):
                setDescriptionVisibility(false);
                setFirstPillarVisibility(true);
                setSecondPillarVisibility(false);
                setThirdPillarVisibility(false);
                setFourthPillarVisibility(false);
                break;
            case("second-pillar" || "second-p"):
                setDescriptionVisibility(false);
                setFirstPillarVisibility(false);
                setSecondPillarVisibility(true);
                setThirdPillarVisibility(false);
                setFourthPillarVisibility(false);
                break;
            case("third-pillar" || "third-p"):
                setDescriptionVisibility(false);
                setFirstPillarVisibility(false);
                setSecondPillarVisibility(false);
                setThirdPillarVisibility(true);
                setFourthPillarVisibility(false);
                break;

            case("fourth-pillar" || "fourth-p"):
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

    const resetHandler = (e) => {
        if (e.target.localName !== "h1") {
            setDescriptionVisibility(true);
            setFirstPillarVisibility(false);
            setSecondPillarVisibility(false);
            setThirdPillarVisibility(false);
            setFourthPillarVisibility(false);
        }
    }

    return (
        <Wrapper onClick={resetHandler}>

            <PillarContainer>
                <SmallShortPillar
                    id="first-p"
                    opacity={firstPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}
                    onMouseOver={handlePillarVisibility}/>
                <BigShortPillar
                    id="second-p"
                    opacity={secondPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}
                    onMouseOver={handlePillarVisibility}/>
                <BigShortPillar
                    id="third-p"
                    opacity={thirdPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}
                    onMouseOver={handlePillarVisibility}/>
                <LongPillar
                    id="fourth-p"
                    opacity={fourthPillarVisibility
                    ? "100%"
                    : (descriptionVisibility
                        ? "100%"
                        : "30%")}
                    onMouseOver={handlePillarVisibility}/>
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
                    <div css={css `max-width: 600px;`}>
                        <p css={css `margin-bottom: 50px;`}>Wehrmuehle is comprised of three buildings,
                            The Gallery, The Guesthouse and The Mill. Onsite facilities include
                            accommodation, gastronomy, studio and co-working space, exhibition space, and
                            storage.</p>

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

                    <h4 css={css`margin-bottom: 20px;`}>Housing international art practices</h4>

                    <p>Wehrmuehle focuses on bringing international emerging and established artists
                        together to exhibit, hosting site-specific installations, performances, and
                        panel discussions that spotlight creators in all stages of their careers.
                    </p>

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
                            width={1170}
                            height={1009}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <h4 css={css`margin-bottom: 20px;`}>Connecting all art disciplines</h4>
                    <p>The Wehrmuehle Art residency in June 2022 features disciplines like
                        sculpture, video, sound, painting, photography, and performance. In the lead-up
                        to the exhibition, artists can use Wehrmuehle as their studio for research,
                        workshops, collaborations, and experiments.</p>

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

                    <h4 css={css`margin-bottom: 20px;`}>Inviting creative collaborations</h4>
                    <p>As a brand partner, Wehrmuehle has contributed to the creation of
                        unparalleled experiences across a variety of fields ranging from music, fashion,
                        and entertainment to unique culinary events, always open to creative
                        collaborations.</p>

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

                    <h4 css={css`margin-bottom: 20px;`}>Wehrmuehle’s constant evolution</h4>
                    <p>From its construction in the 14th century to its most recent reconstruction
                        in 2002 by the Hecken Family, Wehrmuehle has developed into a Kulturort of
                        outstanding natural, historical, and cultural significance, becoming a forum for
                        international art practice.</p>

                </ContentContainer>
            </BottomContainer>

        </Wrapper>
    )
}
