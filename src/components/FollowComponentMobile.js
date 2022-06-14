import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import IcInstagram from '../vectors/IcInstagram.svg'

const Wrapper = styled("div")`
width: 100%;
padding-bottom: 60px;
`



export default function FollowComponentMobile({text, link}) {

    return (
        <Wrapper id="follow-mobile"> 
     

            <h3 css={css `margin-bottom: 50px;`}>Follow us</h3>

            <h1 css={css `margin-bottom: 100px;`}>{text}</h1>

            <a href={link} target="_blank" css={css `text-decoration: none; `}>
                <div css={css `display: flex; align-items: center; margin-bottom: 50px;`}>

                    <h3 css={css `margin-right: 20px;`}>instagram</h3>
                    <IcInstagram css={css `width: 26px; height: auto;`}/>

                </div>
            </a>

            <h1 css={css `margin-bottom: 50px;`}>Contact</h1>

            <p>Wehrmühlenweg 8
                <br/>
                16359 Biesenthal (near Berlin)
                <br/>
                <br/>
                mail@wehrmuehle.de
                <br/>
                +49 175 5038587</p>

        </Wrapper>
    )
}
