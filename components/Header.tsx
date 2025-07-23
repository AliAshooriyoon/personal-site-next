import Image from "next/image"
import Logo from "@/public/logoHeader.png"
import NightLogo from "@/public/nightLogo.svg"
export const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-40">
        <Image className="w-36 h-28" src={Logo} alt="header_logo" />
        <div className="list list-none flex items-center gap-16 text-lg">
          <li> Services </li>
          <li> Portfolios </li>
          <li> Experience </li>
          <li> Blog </li>
        </div>
        <div className="options flex items-center gap-8">
          <Image className="w-16 h-16" src={NightLogo} alt='Night mode' />
          <button className="text-white px-6 py-2.5 border-2 rounded-xl"> Lebenslauf </button>
        </div>
      </div>
    </>
  )
}

