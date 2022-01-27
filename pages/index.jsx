import styled from 'styled-components'
import Head from 'next/head'
import Accordion from '../components/Accordion'
import HentaiLogo from '../public/svg/hentaios.svg'

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
  @media only screen and (min-width: 768px) {
    margin-top: 60px;
    width: 60%;
  }
  .header {
    @media only screen and (min-width: 768px) {
      font-size: 3.5rem;
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
`
const Logo = styled(HentaiLogo)`
  width: 50vw;
  margin: 40px;
  @media only screen and (min-width: 768px) {
    height: 6rem;
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
        <Box>
          <Logo />
            <h1 className='header'>Get started with your lewd phone.</h1>
          <Accordion /> 
        </Box>
      </Main>
    </div>
  )
}