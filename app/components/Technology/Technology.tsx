"use client";
import { technology } from "@/app/constants/constants";
import { useState } from "react";
import Options from "./Options/Options";
import Image from "next/image";

export default function Technology() {
  const [t, setT] = useState(0);

  const {
    name,
    description,
    images: { portrait, landscape },
  } = technology[t];

  return (
    <section
      className="
    flex flex-col w-full items-center lg:mt-[76px] md:mt-[40px] mt-[24px]
    lg:px-[55px]"
    >
      <div className="w-full max-w-[1110px] lg:ml-0 md:ml-[55px] md:text-start text-center">
        <h5 className="heading-5 lg:px-0 px-6">
          <span className="opacity-25 font-bold">03</span> SPACE LAUNCH 101
        </h5>
      </div>

      <div
        className="
        flex max-w-[1275px] w-full justify-between items-center lg:mt-[64px] md:mt-[60px] mt-[32px]
        lg:flex-row-reverse flex-col gap-5  mb-5" 
      >
        <Image
          src={`${portrait}`}
          alt={`${name}`}
          width={515}
          height={527}
          quality={100}
          className="max-w-max md:mb-0 mb-8 lg:inline-block hidden xl:w-[515px] xl:h-[527px] w-[380px] h-[389px]"
        />

        <Image
          src={`${landscape}`}
          alt={`${name}`}
          width={768}
          height={310}
          quality={100}
          className="w-[100%] inline-block lg:hidden"
        />

        <div className="flex justify-center lg:items-start lg:gap-20 md:gap-4 lg:flex-row flex-col lg:px-0 px-6">
          <Options technology={technology} t={t} setT={setT} />

          <div className="lg:inline-block flex flex-col items-center">
            <h5 className="nav-text text-[#D0D6F9] opacity-50 lg:text-start text-center">
              THE TERMINOLOGY…
            </h5>
            <h2 className="heading-3 lg:text-start text-center lg:mt-[11px] md:mt-4 mt-[9px] mb-4">
              {name.toUpperCase()}
            </h2>
            <p className="text-[#D0D6F9] body-text lg:text-start text-center lg:max-w-[444px] md:max-w-[458px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
