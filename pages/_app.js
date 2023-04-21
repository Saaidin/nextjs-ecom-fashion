import ProductProvider from "../contexts/ProductContext"
import "../styles/globals.css"
import Layout from "./components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  )
}

export default MyApp
