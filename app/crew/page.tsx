import Image from "next/image";
import Nav from "../components/Nav/Nav";
import Crew from "../components/Crew/Crew";

export default function page() {
  return (
    <main>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-[-5]">
        <Image
          src="/crew/background-crew-desktop.jpg"
          fill
          alt="backgrouncrews"
          quality={100}
          className="object-cover z-[-2] lg:inline-block hidden"
        />
        <Image
          src="/crew/background-crew-tablet.jpg"
          fill
          quality={100}
          alt="backgrouncrews"
          className="object-cover z-[-2] lg:hidden md:inline-block hidden"
        />
        <Image
          src="/crew/background-crew-mobile.jpg"
          fill
          quality={100}
          alt="backgrouncrews"
          className="object-cover z-[-2] md:hidden"
        />
      </div>
      <Nav />
      <Crew/>
    </main>
  );
}
