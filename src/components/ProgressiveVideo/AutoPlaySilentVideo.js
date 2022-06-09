import React, {useRef, useEffect} from "react"

export default function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <div id="video-container">
            <video
                className={props.className}
                id="hero-video"
                ref={videoRef}
                loop
                autoPlay
                muted
                playsInline
                onLoadedData={props.onLoadedData
                ? props.onLoadedData
                : () => null}>
                <source src={props.video} style={props.style} type="video/webm"/> {/* <source src={props.fallbackVideo} style={props.style} type="video/mp4"/> */}
            </video>
        </div>
    );
}