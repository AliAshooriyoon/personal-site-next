"use client";

import Image from "next/image";
import Logo from "@/public/logoHeader.png";
import NightLogo from "@/public/nightLogo.svg";
import { Link } from "react-scroll";

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
  return (
    <div className="flex justify-center items-center gap-40">
      <Link to="home" smooth={true} duration={500}>
        <Image className="w-36 h-28" src={Logo} alt="header_logo" />
      </Link>

      <div className="list list-none flex items-center gap-20 text-lg">
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
        <Image
          className="w-16 h-16 cursor-pointer"
          src={NightLogo}
          alt="Night mode"
        />
        <button className="text-white px-6 py-2.5 border-2 rounded-xl hover:bg-white hover:text-black delay-100 cursor-pointer">
          {dict.cv}
        </button>
      </div>
    </div>
  );
};
