import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import BrandMark from '../vectors/BrandMark.svg'
import Seo from '../components/seo';

const Shield = styled("div")`

width: calc(100% + 328px);
height: 100vh;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:0 -164px;

&>* {
  margin-bottom: 70px;
}
`

export default function AerialPage() {
    return (
        <>
        <Seo title="Aerial Palettes"></Seo>
            <Shield>
                <BrandMark css={css `width: 200px; height: auto;`}/>
                <h1>Coming soon</h1>
            </Shield>
        </>
    )
}
