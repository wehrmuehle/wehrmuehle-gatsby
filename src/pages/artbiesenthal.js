import React from 'react'
import {graphql} from "gatsby"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import ArtBiesenthalDesktop from '../components/ArtBiesenthalPage/ArtBiesenthalDesktop'

export default function ArtBiesenthalPage({data}) {
    const breakpoints = useBreakpoint();
    return (
        <React.Fragment>
            {(breakpoints.l && !breakpoints.sm) && <ArtBiesenthalDesktop eventData={data.allContentfulSingleEvents.edges}/>}
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
      }
    }
  }
}

`