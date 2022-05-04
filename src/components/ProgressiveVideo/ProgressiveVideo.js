import React, {useContext} from "react"
import "./ProgressiveVideo.css";
import {StaticImage} from "gatsby-plugin-image"
import AutoPlaySilentVideo from "./AutoPlaySilentVideo"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'

const Box = styled("div")`
width: 100%;
min-height: 100vh;
overflow: hidden;
position: ${props => props.position};
background-image: url(${props => props.bg});
`

const ProgressiveVideo = (props) => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <Box bg={props.bgColour}>
            {/* <Box
                className="video-thumb"
                position="absolute"
                bg={props.desktopThumbnail}
                css={css `opacity: ${isVideoLoaded
                ? 0
                : 1};`}/> */}

            <StaticImage
                src="../../images/TemporaryThumbnail.jpeg"
                alt="Video Thumbnail"
                layout="constrained"
                placeholder="blurred"
                width={1920}
                height={1300}
                css={css `width: 100%; opacity: ${isVideoLoaded
                ? 0
                : 1}; position: absolute; top: 0; left: 0;`}/>

            <AutoPlaySilentVideo
                onLoadedData={handleVideoLoaded}
                video={props.video}
                className="progressive-video"
                css={css `opacity: ${isVideoLoaded
                ? 1
                : 0};`}/>
        </Box>
    )
}

export default ProgressiveVideo