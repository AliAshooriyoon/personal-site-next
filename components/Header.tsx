"use client"
import Image from "next/image"
import Logo from "@/public/logoHeader.png"
import NightLogo from "@/public/nightLogo.svg"
// import Link from "next/link"
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-40">
        <Link to="home" smooth={true} duration={500}>
          <Image className="w-36 h-28" src={Logo} alt="header_logo" />
        </Link>
        <div className="list list-none flex items-center gap-20 text-lg">
          <li className="cursor-pointer"> <Link to="services" smooth={true} duration={500}>Services
          </Link> </li>
          <li className="cursor-pointer"> <Link to="projects" smooth={true} duration={500}>Projekte</Link> </li>
          <li className="cursor-pointer"> <Link to="experices" smooth={true} duration={700}>Erfahrungen
          </Link> </li>
          <li className="cursor-pointer"> <Link to="contact" smooth={true} duration={500}>Kontakt</Link> </li>
        </div>
        <div className="options flex items-center gap-8">
          <Image className="w-16 h-16 cursor-pointer" src={NightLogo} alt='Night mode' />
          <button className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer"> Lebenslauf </button>
        </div>
      </div>
    </>
  )
}

