"use client";

import "./Header.css";
import germanyLogo from "@/public/icons8-germany-96.png";
import usaLogo from "@/public/icons8-usa-96.png";
import Image from "next/image";
import Logo from "@/public/logoHeader.png";
import NightLogo from "@/public/nightLogo.svg";
import ServiceLogo from "@/public/icons8-provider-100.png";
import ProjectLogo from "@/public/icons8-project-100.png";
import ExpLogo from "@/public/icons8-experience-100.png";
import ContactLogo from "@/public/icons8-contact-100.png";
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
  const [barStat, setBarStat] = useState(window.innerWidth < 500);
  const [showLangs, setShowLangs] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setBarStat(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lang = usePathname();

  return (
    <>
      {/* Desktop Header */}
      <div className="flex justify-center items-center 2xl:gap-40 xl:gap-20 lg:gap-2 max-md:hidden">
        <Link to="home" smooth={true} duration={500}>
          <Image className="w-36 h-28" src={Logo} alt="header_logo" />
        </Link>

        <ul className="list-none flex items-center gap-8 lg:gap-10 xl:gap-20 text-lg">
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
        </ul>

        <div className="options flex items-center gap-8">
          {/* Language selector */}
          <div className="languageSelector relative">
            <Image
              className="w-12 h-12 cursor-pointer"
              src={lang === "/de" ? germanyLogo : usaLogo}
              alt="Language"
              onClick={() => setShowLangs(!showLangs)}
            />
            {showLangs && (
              <div className="languagesOptions w-44 bg-stone-200 absolute rounded-xl z-20 mx-auto right-1/2 left-1/2 -translate-x-1/2 mt-2">
                <a
                  href="/de"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={germanyLogo} alt="German" /> German
                </a>
                <a
                  href="/en"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={usaLogo} alt="English" /> English
                </a>
              </div>
            )}
          </div>

          {/* Download CV Button */}
          <a
            href={'/AliAshouriyoun-CV.pdf'}
            download
            className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer"
          >
            {dict.cv}
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="w-full flex max-md:justify-around md:justify-start h-20 items-center md:p-6 md:hidden">
        <Link to="home" smooth={true} duration={500}>
          <Image className="max-md:w-32 max-md:h-24" src={Logo} alt="header_logo" />
        </Link>

        <div className="options flex items-end gap-4">
          <div className="languageSelector relative">
            <Image
              className="w-12 h-12 cursor-pointer"
              src={lang === "/de" ? germanyLogo : usaLogo}
              alt="Language"
              onClick={() => setShowLangs(!showLangs)}
            />
            {showLangs && (
              <div className="languagesOptions w-44 bg-stone-200 absolute rounded-xl z-20 mx-auto right-1/2 left-1/2 -translate-x-1/2 mt-2">
                <a
                  href="/de"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={germanyLogo} alt="German" /> German
                </a>
                <a
                  href="/en"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={usaLogo} alt="English" /> English
                </a>
              </div>
            )}
          </div>

          {/* Download CV Button Mobile */}
          <a
            href={'/AliAshouriyoun-CV.pdf'}
            download
            className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer"
          >
            {dict.cv}
          </a>
        </div>
      </div>

      {/* MiniBar (wenn barStat true) */}
      {barStat && (
        <div className="miniBar rounded-xl md:hidden p-4 z-20 w-full h-18 fixed left-0 bottom-0 bg-[rgba(158,197,213,0.88)]">
          <ul className="list_menu text-black flex flex-row gap-4 max-sm:text-sm md:text-xl list-none justify-between">
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <Link to="services" smooth={true} duration={500}>
                <Image className="item_logo" src={ServiceLogo} alt="Services" />
                {/* {dict.services} */}
              </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <Link to="projects" smooth={true} duration={500}>
                <Image className="item_logo" src={ProjectLogo} alt="Projects" />
                {/* {dict.projects} */}
              </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <Link to="experices" smooth={true} duration={700}>
                <Image className="item_logo" src={ExpLogo} alt="Experiences" />
                {/* {dict.experiences} */}
              </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <Link to="contact" smooth={true} duration={500}>
                <Image className="item_logo" src={ContactLogo} alt="Contact" />
                {/* {dict.contact} */}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
