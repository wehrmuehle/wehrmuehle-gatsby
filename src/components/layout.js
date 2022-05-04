import React from 'react'
import {Link} from "gatsby"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import BrandMark from '../vectors/BrandMark.svg'
import IcInstagram from '../vectors/IcInstagram.svg'
import IcLocation from '../vectors/IcLocation.svg'
import IcTicket from '../vectors/IcTicket.svg'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import TextLink from './UI/TextLink';

const LayoutWrapper = styled("div")`
width: 100vw;
position: relative;
`

const MainMobile = styled("main")`
padding:7rem 4rem 10rem 4rem;
`

const MainDesktop = styled("main")`
padding: 0 164px;
`

const HeaderMobile = styled("header")`
position: fixed;
top: 0;
z-index: 4;
width: 100%;
background-color: transparent;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 4rem;
`

const BottomBar = styled("nav")`
position: fixed;
bottom: 0;
z-index: 4;
width: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 1.5rem 4rem;
`
const SideBar = styled("nav")`
writing-mode: vertical-rl;
text-orientation: sideways-right;
transform: scale(-1, 1) scale(1, -1);
position: fixed;
right: 60px;
top: 30vh;
display: flex;
& > * {
    margin-top: 20px;
    
}
`

export default function Layout({children}) {

    const breakpoints = useBreakpoint();
    return (
        <LayoutWrapper>
            <HeaderMobile>

                <Link to="/"><BrandMark css={css `width: 40px; height: auto;`}/></Link>

                <IcInstagram css={css `width: 26px; height: auto;`}/>
            </HeaderMobile>

            {breakpoints.sm && <MainMobile>
                {children}
            </MainMobile>}

            {breakpoints.l && <MainDesktop>{children}</MainDesktop>}

            {breakpoints.sm && <BottomBar>
                <Link to="/">
                    <IcLocation css={css `width: 18px; height: auto; margin-right: 8rem;`}/>
                </Link>

                <Link to="/">
                    <IcTicket css={css `width: 18px; height: auto;`}/>
                </Link>
            </BottomBar>}

            {breakpoints.l && <SideBar>
                <TextLink>
                    <p>Get Tickets</p>
                </TextLink>
                <TextLink to="#location-desktop">
                    <p>Get there</p>
                </TextLink>

            </SideBar>}

        </LayoutWrapper>
    )
}
