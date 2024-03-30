import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-[-5]">
        <Image
          src="/home/background-home-desktop.jpg"
          fill
          quality={100}
          alt="backgroundpc"
          className="z-[-1] object-cover hidden lg:inline-block"
        />
        <Image
          src={"/home/background-home-tablet.jpg"}
          fill
          quality={100}
          alt="backgroundtablet"
          className="z-[-1] object-cover hidden md:inline-block lg:hidden"
        />
        <Image
          src={"/home/background-home-mobile.jpg"}
          fill
          quality={100}
          alt="backgroundmobile"
          className="z-[-1] object-cover inline-block md:hidden"
        />
      </div>
      <Nav />
      <Home />
    </main>
  );
}
