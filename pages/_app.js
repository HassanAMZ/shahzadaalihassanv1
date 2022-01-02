import '@/css/tailwind.css'
import '@/css/prism.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import MailChimpHeadCode from '@/components/MailChimpHeadCode'
import StyleWaves from '@/components/StyleWaves'
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta
            name="google-site-verification"
            content="LOmgcQtS3n4SzA1wUbtCUBeOyVp1Kq8d4XWHvWAf51Y"
          />
          <script
            data-ad-client="ca-pub-1593692039645752"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

          <MailChimpHeadCode />
        </Head>

        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
        <StyleWaves />
      </ThemeProvider>
    </>
  )
}
