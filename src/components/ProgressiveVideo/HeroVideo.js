import React from "react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import TemporaryGradientVideo from "../../images/TemporaryGradientVideo.webm"
import TemporaryThumbnail from "../../images/TemporaryThumbnail.jpg"
import {useBreakpoint} from "gatsby-plugin-breakpoints";
import ResponsiveProgressiveVideo from "./ResponsiveProgressiveVideo"

const HeroVideo = () => {
    const breakpoints = useBreakpoint();

    return (
        <ResponsiveProgressiveVideo mobileVideo={undefined} desktopVideo={TemporaryGradientVideo} desktopThumbnail={TemporaryThumbnail}/>
    )

}

export default HeroVideo
