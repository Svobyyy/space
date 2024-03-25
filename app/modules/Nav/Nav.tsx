import Image from "next/image";
import logo from "@/public/shared/logo.svg";
import backgroundPc from "@/public/home/background-home-desktop.jpg";
import backgroundTablet from "@/public/home/background-home-tablet.jpg";
import backgroundMobile from "@/public/home/background-home-mobile.jpg";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex items-center justify-between ml-[55px] mt-[40px]">
      <Link href="/">
        <Image src={logo} width={48} height={48} quality={100} alt="logo" />
      </Link>
      
      <Image
        src={backgroundPc}
        fill
        objectFit="cover"
        quality={100}
        alt="logo"
        className="z-[-1]"
      />
      <div className="w-full h-[1px] color-white bg-white opacity-25 ml-[64px] translate-x-8 z-10" />
      <nav className="w-full max-w-[830px] h-24 flex backdrop-blur-2xl items-center justify-center px-4">
        <ul className="flex gap-[46px] h-full text-nowrap">
          <li className="flex nav-text relative h-full items-center justify-center">
            <NavLink href="home" span="00" />
          </li>
          <li className="flex nav-text relative h-full items-center justify-center">
            <NavLink href="destination" span="01" />
          </li>
          <li className="flex nav-text relative h-full items-center justify-center">
            <NavLink href="CREW" span="02" />
          </li>
          <li className="flex nav-text relative h-full items-center justify-center">
            <NavLink href="TECHNOLOGY" span="03" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
