import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';

const ContentDivider = styled("div")`
display: flex;
flex-direction: column;

@media (min-width: 420px) {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 50px;
        margin-top: 90px;
      }
`

const ContentBlock = styled("div")`
display: flex;
flex-direction: column;
margin-bottom: 50px;

@media (min-width: 420px) {
        width: 40%;
      }
`

export default function GastronomySectionComponent() {
    return (
        <ContentDivider>
            <ContentBlock>
                <h3 css={css`margin-bottom: 40px;`}>Gastronomy by</h3>
                <StaticImage
                    src="../../images/gastronomy.png"
                    alt="Some fancy food"
                    layout="constrained"
                    placeholder='blurred'
                    width={795}
                    height={530}
                    css={css ``}/>
            </ContentBlock>
            <ContentBlock>
                <StaticImage
                    src="../../images/gastronomyLogo.png"
                    alt="Some fancy food"
                    layout="constrained"
                    placeholder='blurred'
                    width={517}
                    height={193}
                    css={css ` width: 80%; height: auto; margin-bottom: 40px;`}/>
                <p>Baldon founders, Cäcilia Baldszus and Jessica-Joyce Sidon enhance their
                    appetite for sharp creativity, sensorial experiences, multi-faceted
                    inspirations, and above all, locally sourced seasonal products that echo a
                    genuine concern for climate change and sustainable use of resources. For this
                    years edition of Art Biesenthal you can expect exclusive Friday dinners, a small
                    but ever changing menu on Saturdays and Sundays cooked over open fire, natural
                    wines and good vibes only.</p>
            </ContentBlock>
        </ContentDivider>
    )
}
