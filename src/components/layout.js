import React from 'react'
import {Link} from "gatsby"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'
import BrandMark from '../vectors/BrandMark.svg'
import IcInstagram from '../vectors/IcInstagram.svg'
import IcFacebook from '../vectors/IcFacebook.svg'
import IcLocation from '../vectors/IcLocation.svg'
import IcAnd from '../vectors/IcAnd.svg'
import AndWavy from '../vectors/AndWavy.svg'
import IntroLogo from '../vectors/IntroLogo.svg'
import IcTicket from '../vectors/IcTicket.svg'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import TextLink from './UI/TextLink';
import FooterDesktop from './FooterDesktop'

const LayoutWrapper = styled("div")`
width: 100vw;
position: relative;
`

const MainMobile = styled("main")`
padding: 7rem 4rem 0 4rem;
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


@media (min-width: 420px) {
    background-color: transparent;
      }
`

const BottomBar = styled("nav")`
position: fixed;
bottom: 0;
z-index: 15;
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
align-items: center;
& > * {
    margin-top: 20px;
    
}
`

const FooterWrapper = styled("footer")`
width: 100%;
padding: 0 164px;
`

const SideBarItem = styled("div")`
display: flex;
align-items: center;
`

const metaNavItems = [
    [
        "contact", "/contact"
    ],
    [
        "imprint", "/imprint"
    ],
    ["privacy policy", "/privacy"]
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

                <a
                    href="https://www.instagram.com/wehrmuehle/"
                    target="_blank"
                    css={css `text-decoration: none;`}><IcInstagram css={css `width: 26px; height: auto;`}/></a>
            </HeaderMobile>

            {breakpoints.md && <MainMobile>
                {children}
            </MainMobile>}

            {!breakpoints.md && <MainDesktop>{children}</MainDesktop>}

            {breakpoints.md && <BottomBar>
                <Link to="#directions-mobile">
                    <IcLocation css={css `width: 18px; height: auto; margin-right: 8rem;`}/>
                </Link>

                <a
                    target="_blank"
                    href="https://www.tickettailor.com/events/artbiesenthal2022"
                    target="_blank">
                    <IcTicket css={css `width: 18px; height: auto;`}/>
                </a>
            </BottomBar>}

            {!breakpoints.md && <SideBar>
                <a
                    target="_blank"
                    href="https://www.tickettailor.com/events/artbiesenthal2022"
                    target="_blank">
                    <SideBarItem>
                        <IcTicket css={css `transform: rotate(90deg) translateY(1px); height: 15px;`}/>
                        <p>Get Tickets</p>
                    </SideBarItem>
                </a>
                <Link to="#location-desktop">
                    <SideBarItem>
                        <IcLocation
                            css={css `transform: rotate(90deg) translateY(1px); height: 15px;`}/>
                        <p>Get there</p>
                    </SideBarItem>
                </Link>

            </SideBar>}

            <FooterWrapper>
                {!breakpoints.md && <FooterDesktop/>}
                {!breakpoints.md && <div
                    css={css `height: 30vh; background: #000; display: flex; justify-content: space-between; width: calc(100% + 328px); margin:0 -164px; padding: 0 164px; padding-top: 4rem;`}>
                    <div css={css `display: flex; flex-direction: column;`}>
                        <IntroLogo css={css `height: 12rem; filter: invert(1);`}/>

                        <div css={css `display: flex; align-items: center; padding: 3rem 0;`}>
                            <p
                                css={css `opacity: .5; font-size: .8rem; color: white; margin-right: 10px; `}>?? 2022 | MADE WITH LOVE BY</p>
                            <a target="_blank" href="https://anewday.studio/">
                                <AndWavy css={css `width: 8rem; height: auto;`}/></a>
                        </div>

                    </div>
                    <div css={css `width: 40%; display: flex;`}>
                        <nav
                            css={css `width: 60%; display: flex; flex-direction: column; color: white;`}>
                            {metaNavItemsMapped}
                        </nav>
                        <div
                            css={css `width: 40%; display: flex; flex-direction: column; filter: invert(1);`}>
                            <div css={css `width: 100%; display: flex; justify-content: space-between;`}>
                                <a target="_blank" href="https://www.facebook.com/artbiesenthal/"><IcFacebook css={css `width: 16px; height: auto;`}/></a>
                                <a target="_blank" href="https://www.instagram.com/wehrmuehle/">
                                    <IcInstagram css={css `width: 33px; height: auto;`}/></a>
                            </div>
                            <div css={css `width: 100%; display: flex; justify-content: start;`}></div>
                        </div>
                    </div>
                </div>}

            </FooterWrapper>

            {breakpoints.md && <div css={css `background-color: black; width: 100%; padding: 0 4rem 15rem;`}>
                <IntroLogo css={css `height: 2.2rem; margin: 70px 0 50px; filter: invert(1);`}/>

                <nav
                    css={css `width: 60%; display: flex; flex-direction: column; color: white;`}>
                    {metaNavItemsMapped}
                </nav>

                <div
                    css={css `display: flex; filter: invert(1); width: 70%; justify-content: space-between; align-items: center; margin-top: 30px;`}>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/pages/Wehrm%C3%BChle/481248098607579/"><IcFacebook css={css `width: 16px; height: auto;`}/></a>
                    <a target="_blank" href="https://www.instagram.com/wehrmuehle/">
                        <IcInstagram css={css `width: 33px; height: auto;`}/></a>
                    <a target="_blank" href="https://anewday.studio/">
                        <IcAnd css={css `width: 38px; height: auto; filter: invert(1);`}/></a>
                </div>

            </div>}
        </LayoutWrapper>
    )
}
