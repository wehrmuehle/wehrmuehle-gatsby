import React from 'react'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import DownloadImage from './DownloadImage'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';

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

    return (
        <div>
            <GatsbyImage image={image} alt={description}/>

            <Caption css={css`margin: 50px 0 70px 0;`}>

                <CaptionColumn w="30%">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p css={css`margin-top: 50px;`}>© {copyright}</p>
                </CaptionColumn>

                <CaptionColumn w="auto">
                    <DownloadImage url={url} title={title} linkText={"Download highres JPG"}/>
                    <DownloadImage url={url} title={title} linkText={"Download lowres JPG"}/>
                </CaptionColumn>

            </Caption>
        </div>
    )
}
