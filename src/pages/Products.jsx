import React from "react";
import { Link } from "react-router-dom";
import ProductsHero from "../components/ProductsHero";

export default function Products() {
  return (
    <div className="min-h-screen text-black m-auto w-5/6 mt-10">
      <div className="flex flex-col gap-5">
        <div className="font-semibold w-[250px]">
          <h2 className="xl:text-xl p-2">All Categories</h2>
          <ul className="flex flex-col">
            <Link
              to="monitor"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Monitor
            </Link>
            <Link
              to="headphone"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Headphone
            </Link>
            <Link
              to="keyboard"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Keyboard
            </Link>
            <Link
              to="mouse"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Mouse
            </Link>
            <Link
              to="cpu"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Cpu
            </Link>
            <Link
              to="motherboard"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Motherboard
            </Link>
            <Link
              to="ram"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Ram
            </Link>
            <Link
              to="powersupply"
              className="text-sm xl:text-xl shadow-md border-1 p-2"
            >
              Power Supply
            </Link>
          </ul>
        </div>
        <ProductsHero />
      </div>
    </div>
  );
}
