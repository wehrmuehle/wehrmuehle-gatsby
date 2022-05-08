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
const {mobileVideo, desktopVideo, desktopThumbnail, fallbackVideo} = props;

    const breakpoints = useBreakpoint();

    return (
        <Box>
            {breakpoints.sm && <ProgressiveVideo video={mobileVideo} />}
            {!breakpoints.sm && <ProgressiveVideo video={desktopVideo} desktopThumbnail={desktopThumbnail} />}

        </Box>
    )

}

export default ResponsiveProgressiveVideo
