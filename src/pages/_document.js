import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
    <Head ><link rel="preload" href="assets\fonts\Gotham-Black.woff" as="font" type="font/woff" crossOrigin="anonymous" /></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
