import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import {Link} from "gatsby"

export default function TextLink({children, mb, to}) {
    return (
        <Link to={to} css={css `text-decoration: underline; margin-bottom: ${mb};`}>
            {children}
        </Link>
    )
}
