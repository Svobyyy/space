import Image from "next/image";
import Nav from "../components/Nav/Nav";
import Destination from "../components/Destination/Destination";

export default function page() {
  return (
    <main>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-[-5]">
        <Image
          src="/destination/background-destination-desktop.jpg"
          fill
          alt="backgroundestinations"
          quality={100}
          className="object-cover z-[-2] lg:inline-block hidden"
        />
        <Image
          src="/destination/background-destination-tablet.jpg"
          fill
          quality={100}
          alt="backgroundestinations"
          className="object-cover z-[-2] lg:hidden md:inline-block hidden"
        />
        <Image
          src="/destination/background-destination-mobile.jpg"
          fill
          quality={100}
          alt="backgroundestinations"
          className="object-cover z-[-2] md:hidden"
        />
      </div>
      <Nav />
      <Destination />
    </main>
  );
}
