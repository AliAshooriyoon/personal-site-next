"use client";

import "./Header.css";
import germanyLogo from "@/public/icons8-germany-96.png";
import usaLogo from "@/public/icons8-usa-96.png";
import Image from "next/image";
import Logo from "@/public/logoHeader.png";
import ServiceLogo from "@/public/icons8-provider-100.png";
import ProjectLogo from "@/public/icons8-project-100.png";
import ExpLogo from "@/public/icons8-experience-100.png";
import ContactLogo from "@/public/icons8-contact-100.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

// React Scroll nur im Client importieren
const ScrollLink = dynamic(
  () => import("react-scroll").then((mod) => mod.Link),
  { ssr: false }
);

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
  const [barStat, setBarStat] = useState(false); // SSR-safe
  const [showLangs, setShowLangs] = useState(false);

  useEffect(() => {
    // window existiert jetzt sicher
    setBarStat(window.innerWidth < 500);

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
        <ScrollLink to="home" smooth={true} duration={500}>
          <Image className="w-36 h-28" src={Logo} alt="header_logo" />
        </ScrollLink>

        <ul className="list-none flex items-center gap-8 lg:gap-10 xl:gap-20 text-lg">
          <li className="cursor-pointer">
            <ScrollLink to="services" smooth={true} duration={500}>
              {dict.services}
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="projects" smooth={true} duration={500}>
              {dict.projects}
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="experices" smooth={true} duration={700}>
              {dict.experiences}
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="contact" smooth={true} duration={500}>
              {dict.contact}
            </ScrollLink>
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
                <Link
                  href="/de"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={germanyLogo} alt="German" /> German
                </Link>
                <Link
                  href="/en"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={usaLogo} alt="English" /> English
                </Link>
              </div>
            )}
          </div>

          {/* Download CV Button */}
          <Link
            href={'/AliAshouriyoun-CV.pdf'}
            download
            className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer"
          >
            {dict.cv}
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="w-full flex max-md:justify-around md:justify-start h-20 items-center md:p-6 md:hidden">
        <ScrollLink to="home" smooth={true} duration={500}>
          <Image className="max-md:w-32 max-md:h-24" src={Logo} alt="header_logo" />
        </ScrollLink>

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
                <Link
                  href="/de"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={germanyLogo} alt="German" /> German
                </Link>
                <Link
                  href="/en"
                  className="cursor-pointer flex flex-row justify-start pl-2 py-1 items-center border-2 text-black gap-2"
                >
                  <Image className="w-8 h-8" src={usaLogo} alt="English" /> English
                </Link>
              </div>
            )}
          </div>

          {/* Download CV Button Mobile */}
          <Link
            href={'/AliAshouriyoun-CV.pdf'}
            download
            className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer"
          >
            {dict.cv}
          </Link>
        </div>
      </div>

      {/* MiniBar (wenn barStat true) */}
      {barStat && (
        <div className="miniBar rounded-xl md:hidden p-4 z-20 w-full h-18 fixed left-0 bottom-0 bg-[rgba(158,197,213,0.88)]">
          <ul className="list_menu text-black flex flex-row gap-4 max-sm:text-sm md:text-xl list-none justify-between">
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <ScrollLink to="services" smooth={true} duration={500}>
                <Image className="item_logo" src={ServiceLogo} alt="Services" />
              </ScrollLink>
            </li>
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Image className="item_logo" src={ProjectLogo} alt="Projects" />
              </ScrollLink>
            </li>
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <ScrollLink to="experices" smooth={true} duration={700}>
                <Image className="item_logo" src={ExpLogo} alt="Experiences" />
              </ScrollLink>
            </li>
            <li className="cursor-pointer flex items-center gap-2 flex-wrap">
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Image className="item_logo" src={ContactLogo} alt="Contact" />
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
