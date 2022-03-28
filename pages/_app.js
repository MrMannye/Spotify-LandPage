import '../styles/globals.css'
import Header from './components/Header';
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return(
    <div className=''>
      <Header />
      <Component {...pageProps} />
    </div>
  )}

export default MyApp
