import Head from 'next/head'
import Accordion from '../components/Accordion'
import HentaiLogo from '../public/svg/hentaios.svg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>helluvaOS</title>
        <meta name="description" content="HelluvaOS - Pixel from Hell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.box_fluid}>
          <HentaiLogo className={styles.logo} />
          <h1>Get started with your lewd phone.</h1>
          <Accordion /> 
        </div>
      </main>

    </div>
  )
}
