import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import Image from "next/image"
import Link from "next/link"
import { BsEyeFill, BsPlus } from "react-icons/bs"

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  const { id, image, category, title, price } = product

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] max-auto flex justify-center items-center">
            <Image
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
              width={160}
              height={160}
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            href={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link href={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  )
}

export default Product
