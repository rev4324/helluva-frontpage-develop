import '../styles/globals.css'
import Header from '../components/Header'
import Settings from '../components/Settings'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps } />
      <Settings />
    </ThemeProvider>

  )
}

export default App
