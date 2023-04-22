import SidebarProvider from "../contexts/SidebarContext"
import CartProvider from "../contexts/CartContext"
import ProductProvider from "../contexts/ProductContext"
import "../styles/globals.css"
import Layout from "./components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  )
}

export default MyApp
