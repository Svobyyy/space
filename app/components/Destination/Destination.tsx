"use client";
import { destinations } from "@/app/constants/constants";
import Image from "next/image";
import { useState } from "react";
import Options from "./Options/Options";

export default function Destination() {
  const [d, setD] = useState(0);

  const {
    images: { webp },
    name,
    description,
    distance,
    travel,
  } = destinations[d];

  return (
    <section
      className="
    flex flex-col w-full items-center lg:mt-[76px] md:mt-[40px] mt-[24px]
    lg:px-[55px] px-6 pb-[55px]"
    >
      <div className="w-full max-w-[1110px] lg:ml-0 md:ml-[55px] md:text-start text-center">
        <h5 className="heading-5">
          <span className="opacity-25 font-bold">01</span> PICK YOUR DESTINATION
        </h5>
      </div>

      <div
        className="
        flex max-w-[1110px] w-full justify-between items-center lg:mt-[64px] md:mt-[60px] mt-[32px]
        lg:flex-row flex-col"
      >
        <Image
          width={445}
          height={445}
          quality={100}
          src={`${webp}`}
          alt={`${name}`}
          className="lg:w-[445px] lg:h-[445px] md:w-[300px] md:h-[300px] w-[170px] h-[170px]"
        />

        <div>
          <Options destinations={destinations} setD={setD} d={d} />
          <h2 className="heading-2 lg:text-start text-center">
            {name.toUpperCase()}
          </h2>
          <p className="text-[#D0D6F9] body-text md:mb-[54px] mb-[32px] lg:text-start text-center lg:max-w-[444px] md:max-w-[573px]">
            {description}
          </p>

          <div
            className="
            lg:max-w-[444px] md:max-w-[573px] border-t-[#383B4B] border-t md:gap-20 gap-8 md:pt-7 pt-8
            flex md:flex-row flex-col items-center lg:items-start lg:text-left text-center
            justify-center lg:justify-start"
          >
            <div className="flex flex-col gap-3">
              <h6 className="subheading-2 text-[#D0D6F9]">AVG. DISTANCE</h6>
              <p className="subheading-1">{distance.toUpperCase()}</p>
            </div>

            <div className="flex flex-col gap-3">
              <h6 className="subheading-2 text-[#D0D6F9]">EST. TRAVEL TIME</h6>
              <p className="subheading-1">{travel.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
