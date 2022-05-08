import React from 'react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ArtBiesenthalDesktop from '../components/ArtBiesenthalPage/ArtBiesenthalDesktop'

export default function ArtBiesenthalPage() {
    const breakpoints = useBreakpoint();

    return (
      <>
        {/* {breakpoints.sm &&  <HomePageMobile/>} */}
        {(breakpoints.l && !breakpoints.sm) && <ArtBiesenthalDesktop/>}
      </>
    )
}
