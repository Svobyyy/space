export default function Home() {
  return (
    <section className="w-full flex justify-center lg:px-[55px] px-6 pb-[55px]">
      <div
        className="
      w-full flex max-w-[1110px] lg:justify-between lg:items-end lg:mt-[251px] md:mt-[106px] mt-12 lg:flex-row flex-col
      items-center lg:text-start text-center justify-center lg:gap-0 md:gap-[156px] gap-[81px]
      "
      >
        <div className="lg:inline-block flex flex-col items-center">
          <h5 className="heading-5 text-[#D0D6F9]">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="heading-1">SPACE</h1>
          <p className="body-text text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div
          className="
      lg:w-[274px] lg:h-[274px] md:w-[242px] md:h-[242px] w-[150px] h-[150px]
      md:text-[32px] text-[20px] md:tracking-[2px] tracking-[1.5px]
    bg-white rounded-full text-black justify-center items-center flex
      relative before:absolute before:bg-[#979797] before:z-[-1]
      lg:before:w-[450px] lg:before:h-[450px] md:before:w-[320px] md:before:h-[320px]
      before:w-[250px] before:h-[250px]
      before:rounded-full before:transition-all before:opacity-0 hover:before:opacity-100
      before:scale-0 hover:before:scale-100 cursor-pointer
      "
        >
          EXPLORE
        </div>
      </div>
    </section>
  );
}
