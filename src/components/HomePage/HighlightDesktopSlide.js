import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import TextLink from '../UI/TextLink';
import IcTicket from '../../vectors/IcTicket.svg'

const UpcomingContainer = styled("div")`
width: 100%;
position: relative;
background-color: white;
`

export default function HighlightDesktopSlide({
    children,
    title,
    dates,
    link,
    ticketLink,
    descriptionName,
    description
}) {
    return (
        <UpcomingContainer>

            <div css={css `height: 110vh; position: relative; @media (min-width: 1600px) {height: 90vh} @media (min-width: 1900px) {height: 80vh}`}>

                <div css={css `width: 70%; margin-bottom: 30px; position: absolute; right: 0; z-index: 0;`}>{children}</div>

                <h1 css={css `font-size:150px; z-index: 1; position: relative;`}>{title}</h1>

                {link && <h6 css={css `margin: 100px 0 40px 0;`}>
                    <TextLink to={link}>{title}</TextLink>
                </h6>}

                <h6 >{dates}</h6>

                {ticketLink && <h6 css={css `margin: 40px 0 40px 0;`}>{"Get your ticket via "}
                    <IcTicket css={css `transform: translateY(1px); height: 15px;`}/>
                    <a
                        href={ticketLink}
                        target="_blank"
                        css={css `text-decoration: underline; &:hover {text-decoration: none;}`}>Ticket Tailor</a>
                </h6>
}
            </div>

            <h2 css={css `margin: 200px 0 200px 0;`}>
                <TextLink to={link}>{descriptionName}</TextLink>
                {description}</h2>

        </UpcomingContainer>
    )
}
