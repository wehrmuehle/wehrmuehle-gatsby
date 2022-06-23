import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import IconMobileComponent from './IconMobileComponent';

export default function SinglePillar({title, children, text, icon, smallHeader}) {
    return (
        <div>
            <IconMobileComponent icon={icon} />
            <h3 css={css `margin: 40px 0;`}>{title}</h3>
            <div css={css `margin-bottom: 40px;`}>{children}</div>
            <h4>{smallHeader}</h4>
            <p css={css`margin-bottom: 70px;`}>{text}</p>
        </div>
    )
}
