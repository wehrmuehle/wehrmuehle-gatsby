import React, {useState} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {StaticImage} from "gatsby-plugin-image"

const Wrapper = styled("div")`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
`

const SponsorName = styled("h2")`
display: inline-block;
text-decoration: underline;

&:hover {
    text-decoration: none;
}
`

const NameBlock = styled("div")`
width: 65%;
max-width: 900px;
`

const Sponsors = [
    [
        "first-sponsor", "Doktor Hauschka"
    ],
    [
        "second-sponsor", "Nespresso"
    ],
    [
        "third-sponsor", "Ostmost"
    ],
    [
        "fourth-sponsor", "Waysa"
    ],
    [
        "fifth-sponsor", "Campari"
    ],
    ["sixth-sponsor", "Conmoto"]
]

export default function SponsorsSectionComponent() {

    const [firstNameVisible,
        setFirstNameVisible] = useState(false);
    const [secondNameVisible,
        setSecondNameVisible] = useState(false);
    const [thirdNameVisible,
        setThirdNameVisible] = useState(false);
    const [fourthNameVisible,
        setFourthNameVisible] = useState(false);
    const [fifthNameVisible,
        setFifthNameVisible] = useState(false);
    const [sixthNameVisible,
        setSixthNameVisible] = useState(false);
    const [seventhNameVisible,
        setSeventhNameVisible] = useState(false);

    const handlesponsorsVisibility = (e) => {

        
        switch (e.target.id) {
            case "first-sponsor":
                setFirstNameVisible(true);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);

                break;

            case "second-sponsor":
                setFirstNameVisible(false);
                setSecondNameVisible(true);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);

                break;

            case "third-sponsor":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(true);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);

                break;
            case "fourth-sponsor":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(true);
                setFifthNameVisible(false);
                setSixthNameVisible(false);

                break;

            case "fifth-sponsor":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(true);
                setSixthNameVisible(false);

                break;

            case "sixth-sponsor":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(true);

                break;

            case "seventh-sponsor":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);

                break;

            default:
                break;
        }
    }

    const sponsorsMapped = Sponsors.map((sponsor) => {
        return sponsor[0] === "sixth-sponsor"
            ? <a
                    key={sponsor[1]}
                    href={sponsor[2]}
                    target="_blank"
                    css={css `text-decoration: none; font-size: 3.75rem;`}>
                    <SponsorName onMouseOver={handlesponsorsVisibility} id={sponsor[0]}>
                        {`${sponsor[1]}`}
                    </SponsorName>
                </a>
            : <a
                key={sponsor[1]}
                href={sponsor[2]}
                target="_blank"
                css={css `text-decoration: none; font-size: 3.75rem;`}>
                <SponsorName onMouseOver={handlesponsorsVisibility} id={sponsor[0]}>
                    {`${sponsor[1]}`}
                </SponsorName>{`${ ','}`}&nbsp;</a>

    })
    return (
        <Wrapper>

            <h3 css={css `margin-bottom: 100px;`}>Sponsors</h3>
            <NameBlock>{sponsorsMapped}</NameBlock>

            <StaticImage
                src="../../images/DrHauschka.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1600}
                height={700}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${firstNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/Nespresso.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1080}
                height={1080}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${secondNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/Ostmost.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={686}
                height={650}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${thirdNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/Waysa.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1500}
                height={1082}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${fourthNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/Campari.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={3840}
                height={2160}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${fifthNameVisible
                ? "visible"
                : "none"};`}/>
            <StaticImage
                src="../../images/Conmoto.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1747}
                height={263}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${sixthNameVisible
                ? "visible"
                : "none"};`}/>

        </Wrapper>
    )
}
