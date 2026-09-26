import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-2 items-center rounded-2xl bg-[#222630]  px-12 py-12">
      {/* Left side */}
      <div>
        <p className="mb-5 text-sm font-bold tracking-wide text-[#c2f800]">
          WORKOUT LIBRARY
        </p>

        <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] text-white">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>

        <button className="mt-7 rounded-md bg-[#c2f800] px-6 py-3 text-sm font-bold text-black hover:bg-lime-300">
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
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
