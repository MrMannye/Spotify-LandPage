import Header from '../components/Header';
import "tailwindcss/tailwind.css";
import '../styles/global.css'
import '../styles/home.scss'
import SizeObserver from '../utils/size-observer'
import ScrollObserver from '../utils/scroll-observer'

function MyApp({ Component, pageProps }) {
  return(
      <SizeObserver>
        <ScrollObserver>
          {/* <Header /> */}
          <Component {...pageProps} />
        </ScrollObserver>
      </SizeObserver>
  )}

export default MyApp
