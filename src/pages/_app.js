// import '@/styles/globals.scss
import {SessionProvider} from 'next-auth/react'
import localFont from 'next/font/local'
import Layout from "@/layouts";
import "@/assets/styles/main/globals.scss";
const myFont = localFont({ src: '../assets/fonts/Gotham-Black.woff' }, {
  family: 'Gotham Black'
});
export default function App({ Component, pageProps }) {
  return(
    <Layout style={{fontFamily :"myFont"}}> 
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />  
    </SessionProvider>
    </Layout>
  )
}
