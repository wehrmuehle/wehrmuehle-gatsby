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
                            src="../../images/ExhibitionsPillar.jpg"
                            alt="Some people chatting during an art exhibition"
                            layout="constrained"
                            width={517}
                            height={396}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>Wehrmuehle opens its doors to international artists from every stage of their
                        career and hosts Art Biesenthal, an exhibition and summer program held over
                        August and September. Art Biesenthal has exhibited early careers by Alicja
                        Kwade, Norbert Bisky, and Thomas Rentmeister in 2008 and established artists
                        like Julian Rosefeldt, Michael Sailstorfer, Andreas Muehe, Gregor Hildebrandt,
                        and Jonas Burgert in more recent years.</p>

                </ContentContainer>

                <ContentContainer
                    display={secondPillarVisibility
                    ? "visible"
                    : "none"}
                    mt={"-200px"}>
                    <div>
                        <StaticImage
                            src="../../images/ResidencyPillar.jpg"
                            alt="Some people chatting during an art exhibition"
                            layout="constrained"
                            width={337}
                            height={484}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>The residency is home to a cross-section of disciplines such as sculpture,
                        video, sound, painting, printmaking, sculpture, photography, and performance. In
                        the lead-up to the exhibition, all artists are invited to use Wehrmuehle as
                        their creative studio to experiment, workshop, foster collaboration, and
                        facilitate their own art practice.</p>

                </ContentContainer>

                <ContentContainer
                    display={thirdPillarVisibility
                    ? "visible"
                    : "none"}
                    mt={"-200px"}>
                    <div>
                        <StaticImage
                            src="../../images/CollaborationPillar.jpg"
                            alt="Some people chatting during an art exhibition"
                            layout="constrained"
                            width={337}
                            height={421}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>Wehrmuehle has collaborated on a wide variety of projects, such as hosting
                        events for Opera Antwerp and Innervisions or participating in fashion campaigns
                        with Gucci, Saint Laurent, and Valentino. Among their collaborators or
                        Gastro-partners in the food and drink area are Oto, Nobelhart & Schmutzig, and
                        Cookies & Cream.</p>

                </ContentContainer>

                <ContentContainer
                    display={fourthPillarVisibility
                    ? "visible"
                    : "none"}
                    mt={"-200px"}>
                    <div>
                        <StaticImage
                            src="../../images/NaturePillar.jpg"
                            alt="Some people chatting during an art exhibition"
                            layout="constrained"
                            width={516}
                            height={351}
                            css={css `margin-bottom: 50px;`}/>
                    </div>

                    <p>What we know today as Wehrmuehle was once a weir to control the flow nearby
                        the river Finow to fill the moat of a nearby castle. Subsequently, at the
                        beginning of the 20th century, the property was held by the Jewish Mühsam
                        family, only to be seized and misused in the 1930s with the rise of the Nazi
                        regime. Today, Wehrmuehle stands as one of Europe’s leading establishments in
                        integrating arts, cultural and educational institutions through site-specific
                        art.</p>

                </ContentContainer>
            </BottomContainer>

        </Wrapper>
    )
}
