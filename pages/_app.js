import '../styles/globals.css'
import { createContext } from 'react'
import { fetchAPI } from '@/lib/api'
import App from 'next/app'
import Head from 'next/head'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { FloatingSocialButtons } from '@/components/FloatingSocialButtons'

export const GlobalContext = createContext({})

function MyApp({ Component, pageProps }) {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={global.data.attributes.Favicon.data.attributes.url}
        />
        <title>{global.data.attributes.SiteName}</title>
      </Head>
      <Navigation />
      <FloatingSocialButtons />

      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
      <Footer />
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  const global = await fetchAPI('/global')
  return { ...appProps, pageProps: { global } }
}

export default MyApp
