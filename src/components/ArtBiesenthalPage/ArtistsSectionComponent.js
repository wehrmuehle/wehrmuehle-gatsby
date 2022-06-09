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
max-width: 900px;
`

const Artists = [
    [
        "first-artist", "Jakob Kudsk Steensen", "http://www.jakobsteensen.com/"
    ],
    [
        "second-artist", "Fragment.in", "https://www.fragment.in/"
    ],
    [
        "third-artist", "Simon Heijdens", "http://www.simonheijdens.com/indexbig.php"
    ],
    [
        "fourth-artist", "Julian Charriere", "http://julian-charriere.net/"
    ],
    [
        "fifth-artist", "Quayola", "https://quayola.com/"
    ],
    [
        "sixth-artist", "Andreas Greiner", "https://www.andreasgreiner.com/"
    ],
]

export default function ArtistsSectionComponent() {

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

        console.log(e.target)
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

            default:
                break;
        }
    }

    const artistsMapped = Artists.map((artist) => {
        return artist[0] === "sixth-artist"
            ? <a href={artist[2]} target="_blank" css={css`text-decoration: none; font-size: 3.75rem;`}><ArtistName onMouseOver={handleArtistsVisibility} id={artist[0]}>
                    {`${artist[1]}`}
                </ArtistName></a>
            : <a href={artist[2]} target="_blank" css={css`text-decoration: none; font-size: 3.75rem;`}><ArtistName onMouseOver={handleArtistsVisibility} id={artist[0]}>
                {`${artist[1]}`}
            </ArtistName>{`${ ','}`}&nbsp;</a>

    })
    return (
        <Wrapper>

            <h3 css={css `position: absolute; top: 80px;`}>/w</h3>
            <NameBlock>{artistsMapped}</NameBlock>

            <StaticImage
                src="../../images/jks.jpeg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={2500}
                height={1668}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${firstNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/fi.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1000}
                height={667}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${secondNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/sh.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1415}
                height={1358}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${thirdNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/jc.jpeg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1920}
                height={2560}
                css={css `width: 50%; max-height: 800px; z-index: -1; position: absolute; right: 0; display: ${fourthNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/q.jpg"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1620}
                height={1080}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${fifthhNameVisible
                ? "visible"
                : "none"};`}/>

            <StaticImage
                src="../../images/ag.png"
                alt="An Artwork"
                layout="constrained"
                placeholder='blurred'
                width={1186}
                height={1158}
                css={css `width: 50%; z-index: -1; position: absolute; right: 0; display: ${sixthNameVisible
                ? "visible"
                : "none"};`}/>


        </Wrapper>
    )
}
