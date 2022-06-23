import React from "react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import MobileLightVideo from "../../images/MobileLightVideo.webm"
import DesktopVideoFallback from "../../images/DesktopVideoFallback.mp4"
import MobileVideoFallback from "../../images/MobileVideoFallback.mp4"
// import TemporaryFallbackVideo from "../../images/TemporaryFallbackVideo.mp4"
import TemporaryThumbnail from "../../images/TemporaryThumbnail.jpg"
import {useBreakpoint} from "gatsby-plugin-breakpoints";
import ResponsiveProgressiveVideo from "./ResponsiveProgressiveVideo"
import {css, jsx} from '@emotion/react'

const HeroVideo = () => {
    const breakpoints = useBreakpoint();

    console.log("maybe")

    return (
        <div>
            <ResponsiveProgressiveVideo
                mobileVideo={MobileLightVideo}
                desktopVideo={TemporaryGradientVideo}
                desktopVideoFallback={DesktopVideoFallback}
                mobileVideoFallback={MobileVideoFallback}
                desktopThumbnail={TemporaryThumbnail}/>
        </div>
    )

}

export default HeroVideo
