import React from 'react'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import DownloadImage from './DownloadImage'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';

const Caption = styled("div")`
display: flex;
justify-content: space-between;
`

const CaptionColumn = styled("div")`
display: flex;
flex-direction: column;
width: ${props => props.w};

&>* {
    margin-bottom: 20px;
}
`

export default function PicturesComponent({image, url, title, description, copyright}) {
    const breakpoints = useBreakpoint();

    return (
        <div>
            <GatsbyImage image={image} alt={description}/>

            <Caption css={css `margin: 50px 0 70px 0;`}>

                {!breakpoints.md && <React.Fragment>
                    <CaptionColumn w="30%">
                        <p>{title}</p>
                        <p>{description}</p>
                        <p css={css `margin-top: 50px;`}>© {copyright}</p>
                    </CaptionColumn>

                    <CaptionColumn w="auto">
                        <DownloadImage url={url} title={title} linkText={"Download highres JPG"}/>
                        <DownloadImage url={url} title={title} linkText={"Download lowres JPG"}/>
                    </CaptionColumn>
                </React.Fragment>}

                {breakpoints.sm && 
                    <div css={css `display: flex; flex-direction: column;`}>
                    <p css={css `margin-bottom: 20px;`}>{title}</p>
                    <p>{description}</p>
                    <p css={css `margin: 50px 0;`}>© {copyright}</p>

                    <DownloadImage url={url} title={title} linkText={"Download highres JPG"} css={css `margin-bottom: 50px;`}/>
                    <DownloadImage url={url} title={title} linkText={"Download lowres JPG"}/>

                </div>}

            </Caption>
        </div>
    )
}
