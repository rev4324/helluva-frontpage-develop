import { useState } from 'react';
import '../styles/globals.css'
import Header from '../components/Header'
import Settings from '../components/Settings'

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <Header />
        <Component {...pageProps } />
      <Settings theme={theme} setTheme={setTheme} />
    </>

  )
}

export default App
