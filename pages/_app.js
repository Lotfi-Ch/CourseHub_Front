import Layout from '../components/layout'
import '../styles/index.css'
import React from 'react';




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
