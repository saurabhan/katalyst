import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import {AuthProvider} from '../context/auth-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
  <NextUIProvider>
      <Component {...pageProps} />
  </NextUIProvider>
    </AuthProvider>
  )
}

export default MyApp
