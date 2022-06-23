import React from "react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {useBreakpoint} from "gatsby-plugin-breakpoints";


const Box = styled("div")`
width: 100%;
position: ${props => props.position};
background-color: ${props => props.bg};
`

const ResponsiveProgressiveVideo = (props) => {
const {mobileVideo, desktopVideo, desktopThumbnail, desktopVideoFallback, mobileVideoFallback} = props;

    const breakpoints = useBreakpoint();

    return (
        <Box>
            {breakpoints.md && <ProgressiveVideo video={mobileVideo} fallbackVideo={mobileVideoFallback}/>}
            {!breakpoints.md && <ProgressiveVideo video={desktopVideo} fallbackVideo={desktopVideoFallback} desktopThumbnail={desktopThumbnail} />}

        </Box>
    )

}

export default ResponsiveProgressiveVideo
