import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import backgroundPc from "@/public/home/background-home-desktop.jpg";
import backgroundTablet from "@/public/home/background-home-tablet.jpg";
import backgroundMobile from "@/public/home/background-home-mobile.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <Image
        src={backgroundPc}
        fill
        quality={100}
        alt="backgroundpc"
        className="z-[-1] object-cover hidden lg:inline-block"
      />
      <Image
        src={backgroundTablet}
        fill
        quality={100}
        alt="backgroundtablet"
        className="z-[-1] object-cover hidden md:inline-block lg:hidden"
      />
      <Image
        src={backgroundMobile}
        fill
        quality={100}
        alt="backgroundmobile"
        className="z-[-1] object-cover inline-block md:hidden"
      />
      <Nav />
      <Home />
    </main>
  );
}
