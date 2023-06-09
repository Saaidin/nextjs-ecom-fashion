import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json()

  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const res = await fetch("https://fakestoreapi.com/products/" + id)
  const data = await res.json()

  return {
    props: {
      product: data,
    },
  }
}

export default function ProductDetails({ product }) {
  const { id, title, price, description, image } = product

  const { addToCart } = useContext(CartContext)

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto sm:w-11/12">
        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <Image
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
              width={200}
              height={200}
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center self-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              ${price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, id)}
              className="bg-primary py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
