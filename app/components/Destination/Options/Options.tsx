import { Destination } from "@/app/constants/constants";
import { Dispatch, SetStateAction } from "react";

type Props = {
  destinations: Array<{
    name: string;
    images: {
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  }>;
  setD: Dispatch<SetStateAction<number>>;
  d: number;
};

export default function Options({ destinations, setD, d }: Props) {
  return (
    <ul
      className="
      nav-text lg:mb-[20px] md:mb-[32px] mb-[20px] flex gap-[26px] lg:text-start lg:justify-start justify-center lg:mt-0 md:mt-[53px] mt-[26px]
      "
    >
      {destinations instanceof Array &&
        destinations.map((destination: Destination, index) => {
          return (
            <li
              key={destination.name}
              onClick={() => setD(index)}
              className={`
              cursor-pointer relative pb-[12px]
              ${index === d ? "before:opacity-100" : "before:opacity-0"}
              ${index === d ? "text-white" : "text-[#D0D6F9]"}
              before:absolute before:w-full before:h-[3px]
            before:bg-white before:bottom-0 before:hover:opacity-50
              before:transition-all before:right-0
              `}
            >
              {destination.name.toUpperCase()}
            </li>
          );
        })}
    </ul>
  );
}
