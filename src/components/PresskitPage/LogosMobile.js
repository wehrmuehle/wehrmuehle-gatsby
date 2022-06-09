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
flex-direction: column;
`

const SideWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;


`
const CentralWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 30px 0;
`

const LogoWrapper = styled("div")`
height: 70vw;
width: 70vw;
margin-bottom: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.bg};
border:1px solid black;
`

const LogoTitle = styled("p")`
margin: 70px 0 40px;
`

export default function LogosMobile() {
    return (
        <React.Fragment>

            <h2 css={css`margin: 50px 0 0;`}>Logos</h2>
            <Wrapper>
                <SideWrapper align="start">
                    <LogoTitle>Logo standard</LogoTitle>
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
                    <DownloadImage url={""} linkText={"Download EPS"} image={false}/>
                    <DownloadImage url={""} linkText={"Download PNG"} image={false}/>
                </SideWrapper>
            </Wrapper>

            <Wrapper>
                <SideWrapper align="start">
                    <LogoTitle>Logo medium</LogoTitle>
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
                    <DownloadImage url={""} linkText={"Download EPS"} image={false}/>
                    <DownloadImage url={""} linkText={"Download PNG"} image={false}/>
                </SideWrapper>
            </Wrapper>

            <Wrapper>
                <SideWrapper align="start">
                    <LogoTitle>Logo small</LogoTitle>
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
                    <DownloadImage url={""} linkText={"Download EPS"} image={false}/>
                    <DownloadImage url={""} linkText={"Download PNG"} image={false}/>
                </SideWrapper>
            </Wrapper>

        </React.Fragment>
    )
}
