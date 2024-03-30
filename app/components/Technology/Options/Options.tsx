import { Technology } from "@/app/constants/constants";
import { Dispatch, SetStateAction } from "react";

type Props = {
  technology: Array<Technology>;
  setT: Dispatch<SetStateAction<number>>;
  t: number;
};

export default function Options({ technology, setT, t }: Props) {
  return (
    <ul className="flex gap-[24px] lg:text-start lg:justify-start justify-center md:my-10 align my-[32px] lg:flex-col flex-row">
      {technology instanceof Array &&
        technology.map((tech: Technology, index) => {
          return (
            <li
              key={tech.name}
              onClick={() => setT(index)}
              className={`
              cursor-pointer relative lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full 
              flex justify-center items-center
              ${index === t ? "bg-white text-black" : "border border-[#ffffff40] text-white"} 
              transition-all hover:opacity-50
              `}
            >
              {index}
            </li>
          );
        })}
    </ul>
  );
}
