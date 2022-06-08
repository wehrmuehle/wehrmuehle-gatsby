import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import IcInstagram from '../vectors/IcInstagram.svg'

const Wrapper = styled("div")`
width: 100%;
`

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 6px;
width: 100%;
`





const FollowBottomContainer = styled("div")`
display: flex;
justify-content: space-between;
`

const NewsletterContainer = styled("div")`
display: flex;
flex-direction: column;
width: 50%;
`

const ContactContainer = styled("div")`
display: flex;
flex-direction: column;
width: 35%;
`



export default function HomePageDekstop({text, link}) {

    return (
        <Wrapper>

            <Hr/>

            <h3 css={css `margin: 100px 0 80px 0;`}>Follow us</h3>

            <p
                css={css `font-size: 130px; font-weight: bold; margin-right: 20px; margin-bottom: 50px;`}>{text}</p>
            <a href={link} target="_blank" css={css`text-decoration: none;`}>
                <div css={css `display: flex;`}>

                    <h6 css={css `margin-right: 20px;`}>Instagram</h6>
                    <IcInstagram css={css `width: 26px; height: auto;`}/>

                </div>
            </a>

            <FollowBottomContainer css={css `margin:100px 0 150px 0;`}>
                <NewsletterContainer>
                    <h3>Newsletter</h3>
                    <p css={css `margin: 40px 0 30px 0;`}>Sign up with your email address to receive news and updates.</p>
                </NewsletterContainer>
                <ContactContainer>
                    <h3>Contact</h3>
                    <p css={css `margin-top: 40px;`}>Wehrmühlenweg 8
                        <br/>
                        16359 Biesenthal (near Berlin)
                        <br/><br/>
                        mail@wehrmuehle.de<br/>
                        +49 175 5038587</p>
                </ContactContainer>
            </FollowBottomContainer>

        </Wrapper>
    )
}
