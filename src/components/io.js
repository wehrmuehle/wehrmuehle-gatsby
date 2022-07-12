// import React, {useState, useEffect} from 'react'
// import {useInView} from 'react-intersection-observer';
// import styled from "@emotion/styled";
// import {css, jsx} from '@emotion/react';
// import {CSSTransition} from 'react-transition-group';

// const InnerUnderline = styled("span")`
// `

// export default function Io() {

//     const {ref, inView, entry} = useInView({
//         /* Optional options */
//         threshold: 1,
//         rootMargin: '-100px 0px -100px 0px'
//     });

//     const [inProp,
//         setInProp] = useState("");

//     useEffect(() => {
//         setInProp(inView)
//     }, [inView])

//     return (

//         <div css={css `height: 200vh; padding-top: 150vh;`}>

//             <CSSTransition in={inProp} timeout={800} classNames="my-node">
//                 <h2 ref={ref} css={css `color: black;`}>
//                     {`Header inside viewport`}
//                 </h2>

//             </CSSTransition>

//         </div>

//     );
// }
