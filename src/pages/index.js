import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import BrandMark from '../vectors/BrandMark.svg'

const Shield = styled("div")`
position: absolute;
width: calc(100vw + 328px);
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: white;
z-index: 999999;
display: flex;
justify-content: center;
align-items: center;
margin-left: -164px;
`

export default function IndexPage() {
  return (
    <Shield>
      <BrandMark css={css `width: 200px; height: auto;`}/>
    </Shield>
  )
}
