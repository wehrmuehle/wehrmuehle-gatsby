import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import LogoStandardBlack from '../../vectors/LogoStandardBlack.svg'
import LogoMediumBlack from '../../vectors/LogoMediumBlack.svg'
import LogoSmallBlack from '../../vectors/LogoSmallBlack.svg'
import DownloadImage from './DownloadImage';

const Wrapper = styled("div")`
width: 100%;
display: flex;
height: 338px;
`

const SideWrapper = styled("div")`
width: 20%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: ${props => props.align};
`
const CentralWrapper = styled("div")`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
`

const LogoWrapper = styled("div")`
height: 20vw;
max-width: 300px;
max-height: 300px;
width: 20vw;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.bg};
border:1px solid black;
`

export default function LogosDesktop() {
    return (
        <React.Fragment>

            <h2 css={css `margin-bottom: 60px;`}>Logos</h2>
            <Wrapper>
                <SideWrapper align="start">
                    <p>Logo standard</p>
                </SideWrapper>
                <CentralWrapper>
                    <LogoWrapper bg="white">
                        <LogoStandardBlack css={css `height: 143px;`}/>
                    </LogoWrapper>

                    <LogoWrapper bg="black">
                        <LogoStandardBlack css={css `height: 143px; filter: invert(1);`}/>
                    </LogoWrapper>
                </CentralWrapper>

                <SideWrapper align="end">
                    <DownloadImage url={"https://drive.google.com/uc?export=download&id=1W3DVSa9PKzy7dsvsF6XWffSOGpyT1Wvs"} linkText={"Download"} image={false}/>
                </SideWrapper>
            </Wrapper>

            <Wrapper>
                <SideWrapper align="start">
                    <p>Logo medium</p>
                </SideWrapper>
                <CentralWrapper>
                    <LogoWrapper bg="white">
                        <LogoMediumBlack css={css `height: 53px;`}/>
                    </LogoWrapper>

                    <LogoWrapper bg="black">
                        <LogoMediumBlack css={css `height: 53px; filter: invert(1);`}/>
                    </LogoWrapper>
                </CentralWrapper>

                <SideWrapper align="end">
                    <DownloadImage url={"https://drive.google.com/uc?export=download&id=1wdS8MOxHm0iyAOLmx4183fSM5X9Yhe4g"} linkText={"Download"} image={false}/>
                </SideWrapper>
            </Wrapper>

            <Wrapper>
                <SideWrapper align="start">
                    <p>Logo small</p>
                </SideWrapper>
                <CentralWrapper>
                    <LogoWrapper bg="white">
                        <LogoSmallBlack css={css `height: 15px;`}/>
                    </LogoWrapper>

                    <LogoWrapper bg="black">
                        <LogoSmallBlack css={css `height: 15px; filter: invert(1);`}/>
                    </LogoWrapper>
                </CentralWrapper>

                <SideWrapper align="end">
                    <DownloadImage url={"https://drive.google.com/uc?export=download&id=14CTw1YeY1iq4-JI8yI8XxtPTYjH9kHtH"} linkText={"Download"} image={false}/>
                </SideWrapper>
            </Wrapper>

            <div css={css `width: 100%; display: flex; justify-content: center; margin-top: 80px;`}><DownloadImage
                url="https://drive.google.com/uc?export=download&id=15JTGtvedNUNj9Fhh_nbUwnG_xKGTwsUk"
                linkText="Download all logos"
                title="Download all logos"
                image={false}/></div>

        </React.Fragment>
    )
}
