import Header from '../components/Header';
import "tailwindcss/tailwind.css";
import '../styles/global.css'
import '../styles/home.scss'
import SizeObserver from '../utils/size-observer'
import ScrollObserver from '../utils/scroll-observer'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import loginReducer from '../hooks/loginSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SizeObserver>
        <ScrollObserver>
          <Component {...pageProps} />
        </ScrollObserver>
      </SizeObserver>
    </Provider>

  )
}

export default MyApp
