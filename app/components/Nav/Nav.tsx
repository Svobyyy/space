import Image from "next/image";
import logo from "@/public/shared/logo.svg";
import NavLink from "./NavLink";
import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Nav() {
  return (
    <header className="flex items-center justify-between md:m-0 md:ml-[55px] md:mt-[40px] gap-10 m-6">
      <Link href="/" className="h-[48px] w-full max-w-[48px]">
        <Image src={logo} width={48} height={48} quality={100} alt="logo" />
      </Link>

      <div className="w-full h-[1px] color-white bg-white opacity-25 ml-[64px] translate-x-16 z-10 hidden lg:inline-block" />
      <nav
        className="
      w-full max-w-[650px] lg:max-w-[830px] h-24 backdrop-blur-2xl items-center 
      justify-center px-[48px] bg-[#ffffff08] hidden md:flex"
      >
        <ul className="flex gap-[46px] h-full text-nowrap">
          <li className="flex lg:nav-text relative h-full items-center justify-center text-[14px] tracking-[2.36px] font-barlowCondensed text-white">
            <NavLink href="home" span="00" />
          </li>
          <li className="flex lg:nav-text relative h-full items-center justify-center text-[14px] tracking-[2.36px] font-barlowCondensed text-white">
            <NavLink href="destination" span="01" />
          </li>
          <li className="flex lg:nav-text relative h-full items-center justify-center text-[14px] tracking-[2.36px] font-barlowCondensed text-white">
            <NavLink href="crew" span="02" />
          </li>
          <li className="flex lg:nav-text relative h-full items-center justify-center text-[14px] tracking-[2.36px] font-barlowCondensed text-white">
            <NavLink href="technology" span="03" />
          </li>
        </ul>
      </nav>

      <Hamburger />
    </header>
  );
}
