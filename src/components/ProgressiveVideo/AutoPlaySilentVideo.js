import React, {useRef, useEffect} from "react"

export default function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className={props.className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            onLoadedData={props.onLoadedData
            ? props.onLoadedData
            : () => null}>
            <source src={props.video} style={props.style} type="video/webm"/>
        </video>
    );
}