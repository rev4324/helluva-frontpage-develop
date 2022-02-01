import { useState } from 'react';
import '../styles/globals.css'
import Header from '../components/Header'
import Settings from '../components/Settings'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")
  const motionValues = () => {
    theme === "light" ? {
      
    } : {

    }
  }
  return (
    <ThemeProvider>
      <Header theme={theme}/>
        <Component {...pageProps } />
      <Settings theme={theme} setTheme={setTheme} />
    </ThemeProvider>

  )
}

export default App
