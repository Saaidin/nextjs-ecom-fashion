import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/img/logo.svg"
import { BsBag } from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link href={"/"}>
          <div>
            <Image src={Logo} alt="Logo" width={40} height={40} />
          </div>
        </Link>
        {/* cart */}
        <div>
          <BsBag />
        </div>
      </div>
    </header>
  )
}

export default Header
