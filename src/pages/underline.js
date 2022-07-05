import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';

const Text = styled("h1")`

`

const OtherText = styled("h1")`
  
`
const Underline = styled("h1")`

  background-image: linear-gradient(transparent calc(100% - 7px), black 7px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 1s;
  



  &:hover {
    background-size: 100% 100%;
    background-blend-mode: difference;
  }
`

export default function underline() {
    return (
        <div css={css `height: 100vh; padding-top: 20vh;`}>
            <Text className='outer-underline'>
                <span class="inner-underline">That was easy</span>

            </Text>

        </div>
    )
}
