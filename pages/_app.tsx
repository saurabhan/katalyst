import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from '../context/auth-context'

import { store } from '../app/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <AuthProvider>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
