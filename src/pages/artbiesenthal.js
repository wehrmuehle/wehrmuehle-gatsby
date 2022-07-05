import React from 'react'
import {graphql} from "gatsby"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ArtBiesenthalDesktop from '../components/ArtBiesenthalPage/ArtBiesenthalDesktop'
import ArtBiesenthalMobile from '../components/ArtBiesenthalPage/ArtBiesenthalMobile';
import Seo from '../components/seo';

export default function ArtBiesenthalPage({data}) {
    const breakpoints = useBreakpoint();
    const dataEdges = data.allContentfulSingleEvents.edges;
    return (
        <>
        <Seo title="Art Biesenthal"></Seo>
            {breakpoints.md && <ArtBiesenthalMobile eventData={dataEdges}/>}
            {!breakpoints.md && <ArtBiesenthalDesktop eventData={dataEdges}/>}

        </>
    )
}

export const pageQuery = graphql `
query AbQuery {
  allContentfulSingleEvents {
    edges {
      node {
        id
        dateCode
        eventName
        dateAndTime
        timeSlot
      }
    }
  }
}
`