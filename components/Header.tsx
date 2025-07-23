import Image from "next/image"
import Logo from "@/public/logoHeader.png"
import NightLogo from "@/public/nightLogo.svg"
import Link from "next/link"
export const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-40">
        <Link href={'/'}>
          <Image className="w-36 h-28" src={Logo} alt="header_logo" />
        </Link>
        <div className="list list-none flex items-center gap-20 text-lg">
          <li className="cursor-pointer"> <Link href={'/'}>Services
          </Link> </li>
          <li className="cursor-pointer"> <Link href={'/'}>Portfolios</Link> </li>
          <li className="cursor-pointer"> <Link href={'/'}>Experience
          </Link> </li>
          <li className="cursor-pointer"> <Link href={'/'}>Blog</Link> </li>
        </div>
        <div className="options flex items-center gap-8">
          <Image className="w-16 h-16 cursor-pointer" src={NightLogo} alt='Night mode' />
          <button className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer"> Lebenslauf </button>
        </div>
      </div>
    </>
  )
}

