import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'

const DownloadLink = styled("p")`
cursor: pointer;
text-decoration: underline;

&:hover {
    text-decoration: none;
}
`

export default function DownloadImage({
    url,
    linkText,
    title,
    image = true
}) {

    const prova = title

    async function downloadImage(imageSrc) {
        const image = await fetch(imageSrc)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a')
        link.href = imageURL;
        link.download = prova;
        document
            .body
            .appendChild(link)
        link.click()
        document
            .body
            .removeChild(link)
    }
    return (
        <React.Fragment>
            {image && <DownloadLink onClick={() => downloadImage(url)}>{linkText}</DownloadLink>}
            {!image && <DownloadLink>
                <a href={url}>{linkText}</a>
            </DownloadLink>}
        </React.Fragment>
    )
}
