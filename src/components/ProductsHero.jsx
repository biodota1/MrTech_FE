import React from "react";
import heroBg from "../assets/products-hero.jpg";

export default function ProductsHero() {
  return (
    <div className="relative min-h-screen mx-10 hidden xl:flex xl:w-[1000px]">
      <p className="absolute top-[20%] left-[5%] m-auto text-2xl font-bold text-white">
        Discover Innovation <br />
        <span>Latest Gadgets Now!</span>
      </p>
      <img className="w-full" src={heroBg} alt="" />
    </div>
  );
}
