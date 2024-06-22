import React from "react";
import heroBg from "../assets/hero_bg.jpg";

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white">
      <img
        className="absolute z-0 h-full w-full object-cover"
        src={heroBg}
        alt=""
      />
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-blue-500 to-slate-900 opacity-15"></div>
      <div className="absolute h-full w-full flex items-center justify-center">
        <div className="m-auto">
          <p className="font-bold text-2xl text-center sm:text-4xl lg:text-5xl xl:text-6xl">
            Empowering Your Digital Lifestyle
          </p>
          <p className="font-semibold text-lg text-center py-3 sm:text-2xl lg:text-3xl xl:text-4xl">
            Explore our vast collection of the newest gadgets and electronics
          </p>
        </div>
      </div>
    </div>
  );
}
