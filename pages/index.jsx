import styled from 'styled-components'
import Head from 'next/head'
import Accordion from '../components/Accordion'
import ScrollableLogo from '../components/ScrollableLogo'
import HentaiLogo from '../public/svg/logotype.svg'
import Bloody from '../public/svg/bloody.svg'
import Xda from '../public/svg/xda.svg'
import Xiaomeme from '../public/svg/meme.svg'
import Bb from '../public/svg/bb.svg'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Box = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 10%;
  @media only screen and (min-width: 768px) {
    margin-top: 60px;
    width: 60%;
  }
  .header {
    @media only screen and (min-width: 768px) {
      font-size: 3rem;
      line-height: 58px;
    }
    font-size: 2rem;
    margin: 0 0 40px 0;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.06em;
    text-align: center;
    padding-bottom: 10px;
  }
  .distort {
    height: 40px;
    margin: 0;
    padding: 0;
    position: relative;
    top: 10px;
  }
`
const Logo = styled(HentaiLogo)`
  * {
    fill: var(--foreground-main);
  }
  min-width: 50vw;
  min-height: 2rem;
  height: 3rem;
  margin: 40px;
  @media only screen and (min-width: 768px) {
    min-height: 3rem;
  }
`

const SecondaryHeaders = styled.a`
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
    color: #696969;
  }
  .first {
    color: #D30F54;
  }
  .bloody {
    color: transparent;
  }
`

export default function Home(props) {
  console.log("props: ", props)
  return (
    <div>
      <Head>
        <title>helluvaOS</title>
        <meta name="description" content="HelluvaOS - Pixel from Hell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <ScrollableLogo />
        <Box>
          <Logo />
          <h1 className='header'>Get started with your lewd phone.</h1>
          <Accordion />
          <SecondaryHeaders href="https://goolag.com" target="_blank">
            <h1 className='first'>Leave your boring life, Join us in the <Bloody id='bloody' className='distort'/> school.</h1>
            <h1 className='second'>You’ll not regret it, unlike what <Xda className='distort' id="xda"/> or <Xiaomeme className='distort' id="meme"/> said.</h1>
            <h1 className='third'>Also watch Otokonoko Delivery.</h1>
          </SecondaryHeaders>
        </Box>

      </Main>
    </div>
  )
}