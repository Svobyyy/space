"use client";
import { crew } from "@/app/constants/constants";
import { useState } from "react";
import Options from "./Options/Options";

export default function Crew() {
  const [c, setC] = useState(0);

  const {
    name,
    role,
    bio,
    images: { webp },
  } = crew[c];

  return (
    <section
      className="
    flex flex-col w-full items-center lg:mt-[76px] md:mt-[40px] mt-[24px]
    lg:px-[55px] px-6"
    >
      <div className="w-full max-w-[1110px] lg:ml-0 md:ml-[55px] md:text-start text-center">
        <h5 className="heading-5">
          <span className="opacity-25 font-bold">02</span> MEET YOUR CREW
        </h5>
      </div>

      <div
        className="
        flex max-w-[1110px] w-full justify-between items-center lg:mt-[64px] md:mt-[60px] mt-[32px]
        lg:flex-row-reverse md:flex-col-reverse flex-col"
      >
        <img
          src={`${webp}`}
          alt={`${name}`}
          className="w-[70%] max-w-max md:mb-0 mb-8"
        />

        <div className="lg:inline-block flex flex-col items-center">
          <h4 className="heading-4 opacity-50 lg:text-start text-center">{role.toUpperCase()}</h4>
          <h2 className="heading-3 lg:text-start text-center lg:mt-[15px] mt-2 lg:mb-[27px] mb-4"> 
            {name.toUpperCase()}
          </h2>
          <p className="text-[#D0D6F9] body-text lg:text-start text-center lg:max-w-[444px] md:max-w-[458px]">
            {bio}
          </p>

          <Options crew={crew} c={c} setC={setC} />
        </div>
      </div>
    </section>
  );
}
