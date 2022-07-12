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

const PartnerName = styled("h2")`
display: ${props => props.d
    ? props.d
    : "inline-block"};
text-decoration: underline;

&:hover {
    text-decoration: none;
}
`

const NameBlock = styled("div")`
width: 65%;
max-width: 900px;
`

const Partners = [
    [
        "first-partner", "Dittrich & Schlechtriem", "https://dittrich-schlechtriem.com/"
    ],
    [
        "second-partner", "Superblue", "https://www.superblue.com/"
    ],
    [
        "third-partner", "Trekantfest", "https://www.trekantfest.dk/"
    ],
    [
        "fourth-partner", "Acte", "https://actetm.com/"
    ],
    ["fifth-partner", "FH Potsdam - University of Applied Sciences", "https://www.fh-potsdam.de/"]
]

export default function PartnersSectionComponent() {

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

    const handlepartnersVisibility = (e) => {

        switch (e.target.id) {
            case "first-partner":
                setFirstNameVisible(true);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                break;

            case "second-partner":
                setFirstNameVisible(false);
                setSecondNameVisible(true);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                break;

            case "third-partner":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(true);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                break;
            case "fourth-partner":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(true);
                setFifthNameVisible(false);
                break;

            case "fifth-partner":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(true);
                break;

            default:
                break;
        }
    }

    const partnersMapped = Partners.map((partner) => {
        return partner[0] === "fifth-partner"
            ? <a
                    key={partner[1]}
                    href={partner[2]}
                    target="_blank"
                    css={css `text-decoration: none; font-size: 3.75rem; display: inline-block;`}>
                    <PartnerName d="inline" onMouseOver={handlepartnersVisibility} id={partner[0]}>
                        {`${partner[1]}`}
                    </PartnerName>{`${ ', and more'}`}
                </a>
            : <a
                key={partner[1]}
                href={partner[2]}
                target="_blank"
                css={css `text-decoration: none; font-size: 3.75rem; display: inline-block;`}>
                <PartnerName
                    d="inline-block"
                    onMouseOver={handlepartnersVisibility}
                    id={partner[0]}>
                    {`${partner[1]}`}
                </PartnerName>{`${ ','}`}&nbsp;</a>

    })
    return (
        <Wrapper>

            <h3 css={css `margin-bottom: 100px;`}>Partners</h3>
            <NameBlock>{partnersMapped}

            </NameBlock>

            <StaticImage
                src="../../images/DS.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={2168}
                height={1148}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${firstNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/SuperBlue.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1818}
                height={1080}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${secondNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/Trekant.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1024}
                height={576}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${thirdNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/ActeTM.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1497}
                height={1058}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${fourthNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/UAS.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={3200}
                height={1800}
                css={css `width: 35%; z-index: -1; position: absolute; right: 0; display: ${fifthNameVisible
                ? "visible"
                : "none"};`}/>

        </Wrapper>
    )
}
