import React from 'react'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import DownloadImage from './DownloadImage';

const Values = [
    [
        "Logos", {
            url: "https://drive.google.com/uc?export=download&id=1Y8pU1c_d7NBKHsNRk-kS-pssZ3RWhPio",
            title: "Logos bundle",
            linkText: "Download Bundle"
        }
    ],
    [
        "Press Texts", {
            url: "https://drive.google.com/uc?export=download&id=1Y8pU1c_d7NBKHsNRk-kS-pssZ3RWhPio",
            title: "Logos bundle",
            linkText: "Download Bundle"
        }
    ],
    [
        "Presentation", {
            url: "https://drive.google.com/uc?export=download&id=1Y8pU1c_d7NBKHsNRk-kS-pssZ3RWhPio",
            title: "Logos bundle",
            linkText: "Download Bundle"
        }
    ],
    [
        "Pictures", {
            url: "https://drive.google.com/uc?export=download&id=1Y8pU1c_d7NBKHsNRk-kS-pssZ3RWhPio",
            title: "Logos bundle",
            linkText: "Download Bundle"
        }
    ],
    [
        "All Bundles", {
            url: "https://drive.google.com/uc?export=download&id=1Y8pU1c_d7NBKHsNRk-kS-pssZ3RWhPio",
            title: "Logos bundle",
            linkText: "Download Bundle"
        }
    ]
];

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`

const Wrapper = styled("div")`
width: 100%;

`

const ValuesWrapper = styled("div")`
width: 100%;
margin-bottom: 70px;
`

const ValuesMapped = Values.map((value) => (
    <ValuesWrapper >
        <h1 css={css `margin-bottom: 20px;`}>{value[0]}</h1>
        <DownloadImage
            url={value[1].url}
            linkText={value[1].linkText}
            title={value[0]}
            image={false}/>

    </ValuesWrapper>
))

export default function BundlesMobile() {
    return (

        <Wrapper>

            <h1 css={css `margin-bottom: 50px;`}>Values</h1>
            <Hr css={css `margin-bottom: 60px;`}/> {ValuesMapped}

        </Wrapper>

    )
}
