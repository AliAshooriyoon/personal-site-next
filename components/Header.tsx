"use client";
import "./Header.css"
import germanyLogo from "@/public/icons8-germany-96.png"
import usaLogo from "@/public/icons8-usa-96.png"
import Image from "next/image";
import Logo from "@/public/logoHeader.png";
import NightLogo from "@/public/nightLogo.svg";
import ServiceLogo from "@/public/icons8-provider-100.png"
import ProjectLogo from "@/public/icons8-project-100.png"
import ExpLogo from "@/public/icons8-experience-100.png"
import ContactLogo from "@/public/icons8-contact-100.png"
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type HeaderProps = {
  dict: {
    services: string;
    projects: string;
    experiences: string;
    contact: string;
    cv: string;
  };
};

export const Header = ({ dict }: HeaderProps) => {
  const [barStat, setBarStat] = useState(window.innerWidth < 500 ? true : false);
  const [showLangs, setShowLangs] = useState(false)
  useEffect(() => {
    window.addEventListener("load", () => {

      console.log("--------------")
      console.log(window.innerHeight)
      console.log(window.innerWidth)
      setBarStat(window.innerWidth < 500 ? true : false)
    })
  }, [])
  const lang = usePathname()
  console.log(lang)
  return (
    <>
      <div className="flex justify-center items-center 2xl:gap-40 xl:gap-20 lg:gap-2 max-md:hidden ">
        <Link to="home" smooth={true} duration={500}>
          <Image className="w-36 h-28" src={Logo} alt="header_logo" />
        </Link>

        <div className="list list-none flex items-center gap-8 lg:gap-10 xl:gap-20 text-lg">
          <li className="cursor-pointer">
            <Link to="services" smooth={true} duration={500}>
              {dict.services}
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              {dict.projects}
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="experices" smooth={true} duration={700}>
              {dict.experiences}
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              {dict.contact}
            </Link>
          </li>
        </div>
        <div className="options flex items-center gap-8">
          <div className="languageSelector relative">
            <Image
              className=" w-12 h-12 cursor-pointer"
              src={lang == "/de" ? germanyLogo : usaLogo}
              alt="Night mode"
              onClick={() => setShowLangs(!showLangs)}
            />
            {
              showLangs && <div className="languagesOptions w-44  bg-stone-200 absolute rounded-xl z-20 mx-auto right-1/2 left-1/2 -translate-x-1/2 mt-2">
                <a href="/de" className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2">
                  <Image className="w-8 h-8" src={germanyLogo} alt='' /> German
                </a>
                <a href="/en" className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2">
                  <Image className="w-8 h-8" src={usaLogo} alt='' /> English
                </a>
              </div>
            }
          </div>
          <button className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer">
            {dict.cv}
          </button>
        </div>
      </div >


      <div className="w-full flex max-md:justify-around md:justify-start h-20 items-center md:p-6 md:hidden">
        {/* <div className="cursor-pointer" onClick={() => setBarStat(!barStat)}> */}
        {/*   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10"> */}
        {/*     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> */}
        {/*   </svg> */}
        {/* </div> */}
        <Link to="home" smooth={true} duration={500}>
          <Image className="max-md:w-32 max-md:h-24" src={Logo} alt="header_logo" />
        </Link>
        <div className="options flex items-end gap-4">
          <div className="languageSelector relative">
            <Image
              className=" w-12 h-12 cursor-pointer"
              src={lang == "/de" ? germanyLogo : usaLogo}
              alt="Night mode"
              onClick={() => setShowLangs(!showLangs)}
            />
            {
              showLangs && <div className="languagesOptions w-44  bg-stone-200 absolute rounded-xl z-20 mx-auto right-1/2 left-1/2 -translate-x-1/2 mt-2">
                <a href="/de" className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2">
                  <Image className="w-8 h-8" src={germanyLogo} alt='' /> German
                </a>
                <a href="/en" className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2">
                  <Image className="w-8 h-8" src={usaLogo} alt='' /> English
                </a>
              </div>
            }
          </div>
          <button className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer">
            {dict.cv}
          </button>
        </div>
      </div>
      {
        barStat && <div className="miniBar rounded-xl md:hidden p-4 z-20 w-full h-18 fixed  left-0 bottom-0  bg-[rgb(158,197,213,88%)]">
          <div className="list_menu text-black flex flex-row gap-4 max-sm:text-sm md:text-xl list-none justify-between">
            <li className="item cursor-pointer">

              <li className="cursor-pointer flex items-center gap-2 flex-wrap">
                <Link to="services" smooth={true} duration={500}>
                  <Image className="item_logo" src={ServiceLogo} alt='' />
                  {/* {dict.services} */}
                </Link>
              </li>
            </li>
            <li className="item cursor-pointer">

              <li className="cursor-pointer flex items-center gap-2 flex-wrap">

                <Link to="projects" smooth={true} duration={500}>
                  <Image className="item_logo" src={ProjectLogo} alt='' />
                  {/* {dict.projects} */}
                </Link>
              </li>
            </li>
            <li className="item cursor-pointer">
              <li className="cursor-pointer flex items-center gap-2 flex-wrap">

                <Link to="experices" smooth={true} duration={700}>
                  <Image className="item_logo" src={ExpLogo} alt='' />
                  {/* {dict.experiences} */}
                </Link>
              </li>
            </li>
            <li className="item cursor-pointer">
              <li className="cursor-pointer flex items-center gap-2 flex-wrap">

                <Link to="contact" smooth={true} duration={500}>
                  <Image className="item_logo" src={ContactLogo} alt='' />
                  {/* {dict.contact} */}
                </Link>
              </li>
            </li>
            <li className="item">
              {/* <Image className="w-6 h-6 " src={NightLogo} alt='' /> */}
            </li>
          </div>
        </div>
      }
    </>
  );
};
