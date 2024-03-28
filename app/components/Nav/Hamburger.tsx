"use client";

import Image from "next/image";
import hamburger from "@/public/shared/icon-hamburger.svg";
import close from "@/public/shared/icon-close.svg";
import { useState } from "react";
import NavLink from "./NavLink";

export default function Hamburger() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Image
        src={hamburger}
        width={24}
        height={21}
        quality={100}
        alt="hamburger"
        className={`md:hidden inline-block cursor-pointer transition-opacity ${
          menu ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => {
          setMenu(true);
        }}
      />

      <div
        className={`
        absolute w-[254px] h-full backdrop-blur-2xl z-10 bg-[#ffffff08]
        right-0 top-0 transition-transform
        ${menu ? "translate-x-0" : "translate-x-full"}
        inline-block md:hidden
      `}
      >
        <div className="w-full flex justify-end">
          <Image
            src={close}
            width={19}
            height={19}
            quality={100}
            className="mr-[26px] mt-[33px] mb-[65px] cursor-pointer"
            alt="close"
            onClick={() => {
              setMenu(false);
            }}
          />
        </div>

        <ul className="flex gap-[32px] text-nowrap flex-col items-start ml-[32px]">
          <li
            className="
            flex relative h-full items-start justify-start nav-text w-full"
          >
            <NavLink href="home" span="00" />
          </li>
          <li
            className="
            flex relative h-full items-start justify-start nav-text w-full"
          >
            <NavLink href="destination" span="01" />
          </li>
          <li
            className="
            flex relative h-full items-start justify-start nav-text w-full"
          >
            <NavLink href="crew" span="02" />
          </li>

          <li
            className="
            flex relative h-full items-start justify-start nav-text w-full"
          >
            <NavLink href="technology" span="02" />
          </li>
        </ul>
      </div>
    </>
  );
}
