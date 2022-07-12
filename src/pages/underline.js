// import React, {useState} from 'react'
// import { CSSTransition } from 'react-transition-group';
// import styled from "@emotion/styled";
// import {css, jsx} from '@emotion/react';
// import {InView} from 'react-intersection-observer';

// const Text = styled("h1")`

// `

// export default function Underline() {
//     // const {ref, entry} = useInView({
//     //     /* Optional options */
//     //     threshold: 1,
//     //     rootMargin: "100px 0px -100px 0px"
//     // });

//     const [inProp, setInProp] = useState("");

//     return (
//         <div css={css `height: 200vh; padding-top: 120vh;`}>
//             <InView>
//               <Text className='outer-underline' ref={ref} onChange={(inView, entry) => console.log(inView)}>
//                   <span class="inner-underline">{`That was easy ${inView}`}</span>
  
//               </Text>
//             </InView>

//             {/* <CSSTransition in={inProp} timeout={200} classNames="my-node">
//                 <div>
//                     {"I'll receive my-node-* classes"}
//                 </div>
//             </CSSTransition> */}

//         {/* </div> */}
//     )
// }
