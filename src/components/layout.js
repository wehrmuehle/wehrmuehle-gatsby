import React from 'react'
import {Link} from "gatsby"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import BrandMark from '../vectors/BrandMark.svg'
import IcInstagram from '../vectors/IcInstagram.svg'
import IcFacebook from '../vectors/IcFacebook.svg'
import IcLocation from '../vectors/IcLocation.svg'
import IcAnd from '../vectors/IcAnd.svg'
import WehrmuehleLogoSmallWhite from '../vectors/WehrmuehleLogoSmallWhite.svg'
import IcTicket from '../vectors/IcTicket.svg'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import TextLink from './UI/TextLink';
import FooterDesktop from './FooterDesktop'

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

const FooterWrapper = styled("footer")`
width: 100%;
padding: 0 164px;
`

const metaNavItems = [
    [
        "contact", "/contact"
    ],
    [
        "imprint", "/imprint"
    ],
    [
        "privacy policy", "/privacy"
    ],
    ["cookie guideline", "cookies"]
]

const metaNavItemsMapped = metaNavItems.map((item) => (
    <Link
        key={item[0]}
        to={item[1]}
        css={css `text-decoration: none; font-size: 22px; font-weight: 500; margin-bottom: 10px;`}>{item[0]}</Link>
))

export default function Layout({children}) {

    const breakpoints = useBreakpoint();
    return (
        <LayoutWrapper>
            <HeaderMobile>

                <Link to="/"><BrandMark css={css `width: 40px; height: auto;`}/></Link>

                <a href="https://www.instagram.com/wehrmuehle/" target="_blank" css={css `text-decoration: none;`}><IcInstagram css={css `width: 26px; height: auto;`}/></a>
            </HeaderMobile>

            {breakpoints.sm && <MainMobile>
                {children}
            </MainMobile>}

            {!breakpoints.md && <MainDesktop>{children}</MainDesktop>}

            {breakpoints.sm && <BottomBar>
                <Link to="/">
                    <IcLocation css={css `width: 18px; height: auto; margin-right: 8rem;`}/>
                </Link>

                <Link to="/">
                    <IcTicket css={css `width: 18px; height: auto;`}/>
                </Link>
            </BottomBar>}

            {!breakpoints.md && <SideBar>
                <TextLink>
                    <p>Get Tickets</p>
                </TextLink>
                <TextLink to="#location-desktop">
                    <p>Get there</p>
                </TextLink>

            </SideBar>}

            <FooterWrapper>
                {!breakpoints.md && <FooterDesktop/>}
                {!breakpoints.md && <div
                    css={css `height: 30vh; background: #000; display: flex; justify-content: space-between; width: calc(100% + 328px); margin:0 -164px; padding: 0 164px; padding-top: 4rem;`}>
                    <WehrmuehleLogoSmallWhite css={css `height: 35px;`}/>
                    <div css={css `width: 40%; display: flex;`}>
                        <nav
                            css={css `width: 60%; display: flex; flex-direction: column; color: white;`}>
                            {metaNavItemsMapped}
                        </nav>
                        <div
                            css={css `width: 40%; display: flex; flex-direction: column; filter: invert(1);`}>
                            <div css={css `width: 100%; display: flex; justify-content: space-between;`}>
                                <a href=""><IcFacebook css={css `width: 16px; height: auto;`}/></a>
                                <a href="">
                                    <IcInstagram css={css `width: 33px; height: auto;`}/></a>
                            </div>
                            <div css={css `width: 100%; display: flex; justify-content: start;`}>
                                <a href="">
                                    <IcAnd
                                        css={css `width: 47px; height: auto; filter: invert(1); padding-top: 3rem; margin-left: -13px;`}/></a>
                            </div>
                        </div>
                    </div>
                </div>}
            </FooterWrapper>
        </LayoutWrapper>
    )
}
