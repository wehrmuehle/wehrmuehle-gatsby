import React from 'react'
import {graphql} from "gatsby"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ArtBiesenthalDesktop from '../components/ArtBiesenthalPage/ArtBiesenthalDesktop'
import ArtBiesenthalMobile from '../components/ArtBiesenthalPage/ArtBiesenthalMobile';

export default function ArtBiesenthalPage({data}) {
    const breakpoints = useBreakpoint();
    return (
        <React.Fragment>
            {breakpoints.sm && <ArtBiesenthalMobile/>}
            {!breakpoints.md && <ArtBiesenthalDesktop eventData={data.allContentfulSingleEvents.edges}/>}

        </React.Fragment>
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