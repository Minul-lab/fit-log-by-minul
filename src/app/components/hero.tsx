
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto mt-6 grid grid-cols-1 items-center gap-8 rounded-2xl bg-[#222630] px-6 py-8 sm:px-8 sm:py-10 lg:mt-10 lg:grid-cols-2 lg:gap-4 lg:px-12 lg:py-12">
      
      {/* Left side */}
      <div>
        <p className="mb-4 text-sm font-bold tracking-wide text-[#c2f800] sm:mb-5">
          WORKOUT LIBRARY
        </p>

        <h1 className="max-w-xl text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400 sm:mt-5 sm:text-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>

        <button className="mt-6 rounded-md bg-[#c2f800] px-5 py-3 text-sm font-bold text-black hover:bg-lime-300 sm:mt-7 sm:px-6">
          BROWSE WORKOUTS
        </button>
      </div>

      {/* Right side */}
      <div className="flex justify-center">
        <Image
          src="/banner.png"
          alt="banner image"
          width={500}
          height={500}
          className="w-full max-w-[350px] object-contain sm:max-w-[400px] lg:max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;

