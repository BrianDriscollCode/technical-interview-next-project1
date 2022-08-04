import '../styles/globals.css'
import Head from "next/head";
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {

  return (
  
    <Layout> 

      <Head>
        <title> Best Fakesite Ever! </title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Component {...pageProps} />

    </Layout>
    
    
  )

}

export default MyApp
