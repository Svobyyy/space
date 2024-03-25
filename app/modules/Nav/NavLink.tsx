"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

type props = {
  href: string;
  span: string;
};

export default function NavLink({ href, span }: props) {
  const pathname = usePathname();

  const hrefNavigation = href === "home" ? "/" : href;

  console.log(pathname);

  return (
    <Link
      href={hrefNavigation}
      className={`
         before:absolute before:w-full before:h-[3px]
       before:bg-white before:bottom-0 before:hover:opacity-50
         before:transition-all
        ${
          pathname == hrefNavigation ? "before:opacity-100" : "before:opacity-0"
        }
       `}
    >
      <span className="font-bold">{`${span}`}</span> {`${href.toUpperCase()}`}
    </Link>
  );
}
