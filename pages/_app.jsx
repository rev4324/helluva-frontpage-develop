import '../styles/globals.css'
import Header from '../components/Header'
import Settings from '../components/Settings'

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Settings />
    </>
  )
}

export default App
