import React from 'react'
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

const ValueWrapper = styled("div")`
width: 22.22%;
margin-bottom: 80px;
`

const ValueSpacer = styled("div")`
width: 11.11%;
`

const ValuesContainer = styled("div")`
display: flex;
flex-wrap: wrap;
justify-content: end;
`

export default function BundlesDesktop() {
    return (
        <ValuesContainer>
            <ValueWrapper>
                <h3 css={css `margin-bottom: 40px; width: 120%;`}>Download Bundles</h3>
                <Hr css={css `width: 120%;`}/>
            </ValueWrapper>
            <ValueSpacer/> {Values.map((value) => (
                <React.Fragment key={value[0]}>
                    <ValueWrapper >
                        <h3 css={css `margin-bottom: 40px;`}>{value[0]}</h3>
                        <DownloadImage
                            url={value[1].url}
                            linkText={value[1].linkText}
                            title={value[1].title}
                            image={false}/>

                    </ValueWrapper>
                    <ValueSpacer/>
                </React.Fragment>
            ))}
        </ValuesContainer>

    )
}
