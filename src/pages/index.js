import React from 'react'
import HomePageMobile from '../components/HomePage/HomePageMobile'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import HomePageDekstop from '../components/HomePage/HomePageDekstop';

export default function IndexPage() {
    const breakpoints = useBreakpoint();

    return (
      <>
        {breakpoints.sm && <HomePageMobile/>}
        {breakpoints.l && <HomePageDekstop/>}
      </>
    )
}
