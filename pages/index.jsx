import styled from 'styled-components'
import Head from 'next/head'
import Accordion from '../components/Accordion'
import MainBox from '../components/MainBox'
import Box from '../components/Box'
import ScrollableLogo from '../components/ScrollableLogo'
import HentaiLogo from '../public/svg/logotype.svg'
import Bloody from '../public/svg/bloody.svg'
import Xda from '../public/svg/xda.svg'
import Xiaomeme from '../public/svg/meme.svg'
import BloodyDark from '../public/svg/bloodydark.svg'
import XdaDark from '../public/svg/xdadark.svg'
import XiaomemeDark from '../public/svg/memedark.svg'
import ButtonSection from '../components/ButtonSection'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { css } from 'styled-components'



const Logo = styled(HentaiLogo)`
  * {
    fill: var(--foreground-main);
  }
  min-width: 50vw;
  min-height: 2rem;
  height: 3rem;
  margin: 20px;
  margin-top: 50px;
  @media only screen and (min-width: 768px) {
    min-height: 3rem;
  }
  `
const SecondaryHeadersStyled = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
    h1 {
      font-family: Inter;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 60,97px;
      margin-block: 5px;
      text-align: center;
      letter-spacing: -0.05em;
      color: var(--foreground-secondary);
    }
    .first {
      color: var(--accent-main);
    }
  `

const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.05em;
    text-align: center;
    @media only screen and (min-width: 800px) {
      background: var(--lore-visible) no-repeat;
      background-size: 100%;
      aspect-ratio: 16/9;
    }
    @media only screen and (max-width: 800px) {
      height: 40vmax;
    }
    * {
        color: var(--lore-text);
        text-underline-offset: 3px;
    }
    .link {
        font-size: 2rem;
    }
    .portal {
      width: 50%;
      margin-top: auto;
      @media only screen and (max-width: 800px) {
        width: 90%;
      }
    }
    .copyright {
      margin-top: auto;
      padding-bottom: 20px;
      * {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -0.07em;
        text-align: center;
        margin: 5px;
      }
      #rights {
        font-size: 15px;
        line-height: 18px;
      }
      #property {
        font-size: 12px;
        line-height: 15px;
      }
    }
`

const SecondaryHeaders = (props) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <SecondaryHeadersStyled href="https://goolag.com" target="_blank" rel='noreferrer' style={props.style}>
      <h1 className='first'>
        Leave your boring life, Join us in the {resolvedTheme === 'light' ?
          <Bloody id='bloody' className='distort' /> :
          <BloodyDark id='bloody' className='distort' />} school.
      </h1>
      <h1 className='second'>
        You’ll not regret it, unlike what {resolvedTheme === 'light' ?
          <Xda id='xda' className='distort' /> :
          <XdaDark id='xda' className='distort' />} or {resolvedTheme === 'light' ?
            <Xiaomeme id='meme' className='distort' /> :
            <XiaomemeDark id='meme' className='distort' />} said.
      </h1>
      <h1 className='third'>Also watch Otokonoko Delivery.</h1>
    </SecondaryHeadersStyled>
  )
}


export default function Landing() {
  return (
    <div>
      <Head>
        <title>helluvaOS</title>
        <meta name="description" content="HelluvaOS - Pixel from Hell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBox>
        <ScrollableLogo />
        <Box>
          <Logo />
          <h1 className='header'>Get started with your lewd phone.</h1>
          <Accordion />
          <SecondaryHeaders />
          <ButtonSection />
        </Box>
        <Footer>
            <div className='portal'>
              <a href='#' target='_blank' rel='noreferrer' className='link'>Mitarbeiterportal</a>
              <p>Zugänglich innerhalb des internen Netzwerks der Bundesakademie der Roten Winter.
                Nur für Lehrkräfte, Mitarbeiter und autorisiertes Personal. Bei Problemen wenden Sie sich bitte an <a href='mailto: netztechnik@hentaios.com'>netztechnik@hentaios.com</a></p>
            </div>
            <div className='copyright'>
              <p id='rights'>© 2022 Raphielscape Company. All rights reserved.</p>
              <p id='property'>Property of the Red Winter Federal Academy.</p>
            </div>
        </Footer>
      </MainBox>
    </div>
  )
}