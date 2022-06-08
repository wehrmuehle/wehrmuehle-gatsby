import React, {useState} from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {StaticImage} from "gatsby-plugin-image"

const Wrapper = styled("div")`
width: 100%;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
`

const ArtistName = styled("h2")`
display: inline-block;
text-decoration: underline;

&:hover {
    text-decoration: none;
}
`

const NameBlock = styled("div")`
width: 70%;
`

const Artists = [
    [
        "first-artist", "Alicja Kwade"
    ],
    [
        "second-artist", "Norbert Bisky"
    ],
    [
        "third-artist", "Thomas Rentmeister"
    ],
    [
        "fourth-artist", "Michael Sailstorfer"
    ],
    [
        "fifth-artist", "Andreas Muehe"
    ],
    [
        "sixth-artist", "Gregor Hilderbrandt"
    ],
    ["seventh-artist", "Jonas Burgert"]
]

export default function DatesSectionComponent() {

    const [firstNameVisible,
        setFirstNameVisible] = useState(false);
    const [secondNameVisible,
        setSecondNameVisible] = useState(false);
    const [thirdNameVisible,
        setThirdNameVisible] = useState(false);
    const [fourthNameVisible,
        setFourthNameVisible] = useState(false);
    const [fifthhNameVisible,
        setFifthNameVisible] = useState(false);
    const [sixthNameVisible,
        setSixthNameVisible] = useState(false);
    const [seventhNameVisible,
        setSeventhNameVisible] = useState(false);

    const handleArtistsVisibility = (e) => {

        switch (e.target.id) {
            case "first-artist":
                setFirstNameVisible(true);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);
                setSeventhNameVisible(false);

                break;

            case "second-artist":
                setFirstNameVisible(false);
                setSecondNameVisible(true);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);
                setSeventhNameVisible(false);
                break;

            case "third-artist":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(true);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);
                setSeventhNameVisible(false);
                break;
            case "fourth-artist":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(true);
                setFifthNameVisible(false);
                setSixthNameVisible(false);
                setSeventhNameVisible(false);
                break;
            case "fifth-artist":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(true);
                setSixthNameVisible(false);
                setSeventhNameVisible(false);
                break;
            case "sixth-artist":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(true);
                setSeventhNameVisible(false);
                break;
            case "seventh-artist":
                setFirstNameVisible(false);
                setSecondNameVisible(false);
                setThirdNameVisible(false);
                setFourthNameVisible(false);
                setFifthNameVisible(false);
                setSixthNameVisible(false);
                setSeventhNameVisible(true);
                break;

            default:
                break;
        }
    }

    const artistsMapped = Artists.map((artist) => {
        return artist[0] === "seventh-artist"
            ? <ArtistName onMouseOver={handleArtistsVisibility} id={artist[0]}>{`${artist[1]}`}</ArtistName>
            : <ArtistName onMouseOver={handleArtistsVisibility} id={artist[0]}>{`${artist[1]}${ ','}`}&nbsp;</ArtistName>

    })
    return (
        <Wrapper>

            <h3 css={css `position: absolute; top: 80px;`}>/w</h3>
            <NameBlock>{artistsMapped}</NameBlock>

            <StaticImage
                src="../../images/ak.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1300}
                height={974}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${firstNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/nb.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1566}
                height={2048}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${secondNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/tr.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={827}
                height={550}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${thirdNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/ms.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1500}
                height={995}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${fourthNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/am.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1500}
                height={1000}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${fifthhNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/gh.jpeg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1080}
                height={1349}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${sixthNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/jb.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1300}
                height={1618}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${seventhNameVisible
                ? "visible"
                : "none"};`}/>

        </Wrapper>
    )
}
