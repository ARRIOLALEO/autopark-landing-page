import '../styles/globals.css'
import {AppWraper} from '../Components/context'

function MyApp({ Component, pageProps }) {
  return (
    <AppWraper>
  <Component {...pageProps} />
  </AppWraper>
  )
}

export default MyApp
