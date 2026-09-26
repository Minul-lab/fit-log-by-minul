import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="w-full bg-[#0a0a0a] border-t border-gray-800/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Side: Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={35}></Image>{" "}
            <span className="text-white font-bold tracking-wide text-lg">
              FIT<span className="text-[#a3e635]">LOG</span>
            </span>
          </div>

          {/* Right Side: Copyright Text */}
          <div className="text-gray-400 text-sm text-center sm:text-right">
            &copy; 2026 FitLog &mdash; Workout Library. Train hard, log honest.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
