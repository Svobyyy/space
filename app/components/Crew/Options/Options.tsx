import { Crew } from "@/app/constants/constants";
import { Dispatch, SetStateAction } from "react";

type Props = {
  crew: Array<Crew>;
  setC: Dispatch<SetStateAction<number>>;
  c: number;
};

export default function Options({ crew, setC, c }: Props) {
  return (
    <ul className="flex gap-[24px] lg:text-start lg:justify-start justify-center lg:mt-[120px] md:my-10 align my-[32px]">
      {crew instanceof Array &&
        crew.map((member: Crew, index) => {
          return (
            <li
              key={member.name}
              onClick={() => setC(index)}
              className={`
              cursor-pointer relative w-[15px] h-[15px] rounded-full bg-white
              ${
                index === c ? "opacity-100" : "opacity-[17%]"
              } transition-all hover:opacity-50
              `}
            ></li>
          );
        })}
    </ul>
  );
}
