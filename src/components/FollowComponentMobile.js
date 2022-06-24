import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import IcInstagram from '../vectors/IcInstagram.svg'
import Mailchimp from './UI/Mailchimp'

const Wrapper = styled("div")`
width: 100%;
padding-bottom: 60px;
`
const NewsletterContainer = styled("div")`
display: flex;
flex-direction: column;
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

            <NewsletterContainer>
                <h1>Newsletter</h1>
                <p css={css `margin: 40px 0 50px 0;`}>Sign up with your email address to receive news and updates.</p>
                <Mailchimp mobile="true"/>
            </NewsletterContainer>

            <h1 css={css `margin: 50px 0 30px;`}>Contact</h1>

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
