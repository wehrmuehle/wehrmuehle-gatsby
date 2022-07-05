import React from 'react'
import HomePageMobile from '../components/HomePage/HomePageMobile'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import HomePageDekstop from '../components/HomePage/HomePageDekstop';
import Seo from '../components/seo';

export default function IndexPage() {
    const breakpoints = useBreakpoint();

    return (
        <>
        <Seo title="Home" />
            {breakpoints.md && <HomePageMobile/>}
            {!breakpoints.md && <HomePageDekstop/>}
        </>
    )
}
