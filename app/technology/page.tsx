import Image from "next/image";
import Nav from "../components/Nav/Nav";
import Technology from "../components/Technology/Technology";

export default function page() {
  return (
    <main>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-[-5]">
        <Image
          src="/technology/background-technology-desktop.jpg"
          fill
          alt="backgrountechnologys"
          quality={100}
          className="object-cover z-[-2] lg:inline-block hidden"
        />
        <Image
          src="/technology/background-technology-tablet.jpg"
          fill
          quality={100}
          alt="backgrountechnologys"
          className="object-cover z-[-2] lg:hidden md:inline-block hidden"
        />
        <Image
          src="/technology/background-technology-mobile.jpg"
          fill
          quality={100}
          alt="backgrountechnologys"
          className="object-cover z-[-2] md:hidden"
        />
      </div>
      <Nav />
      <Technology/>
    </main>
  );
}
