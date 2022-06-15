import React from 'react'
import {graphql} from "gatsby"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ArtBiesenthalDesktop from '../components/ArtBiesenthalPage/ArtBiesenthalDesktop'
import ArtBiesenthalMobile from '../components/ArtBiesenthalPage/ArtBiesenthalMobile';

export default function ArtBiesenthalPage({data}) {
    const breakpoints = useBreakpoint();
    const dataEdges = data.allContentfulSingleEvents.edges;
    return (
        <React.Fragment>
            {breakpoints.md && <ArtBiesenthalMobile eventData={dataEdges}/>}
            {!breakpoints.md && <ArtBiesenthalDesktop eventData={dataEdges}/>}

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