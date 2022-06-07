import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';

const width = 100;

const height = width / 3.744;

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
`
export default function IconMobileComponent({icon}) {
    return (
        <PillarContainer>
            <SmallShortPillar
                opacity={icon === "first"
                ? "100%"
                : "30%"}/>
            <BigShortPillar
                opacity={icon === "second"
                ? "100%"
                : "30%"}/>
            <BigShortPillar
                opacity={icon === "third"
                ? "100%"
                : "30%"}/>
            <LongPillar
                opacity={icon === "fourth"
                ? "100%"
                : "30%"}/>
        </PillarContainer>
    )
}
