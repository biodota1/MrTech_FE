import React from "react";
import keyboardSample from "../assets/keyboard-sample.jpg";
import { Link } from "react-router-dom";

export default function HomeTopRated() {
  return (
    <div className="m-[100px] text-black">
      <h1 className="text-3xl font-semibold">Top Rated Products</h1>
      <ul className="grid grid-cols-4 gap-10 my-6">
        <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
          <img className="h-[500px]" src={keyboardSample} alt="" />
          <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
          <p className="text-xl font-semibold">$400</p>
        </Link>
        <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
          <img className="h-[500px]" src={keyboardSample} alt="" />
          <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
          <p className="text-xl font-semibold">$400</p>
        </Link>
        <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
          <img className="h-[500px]" src={keyboardSample} alt="" />
          <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
          <p className="text-xl font-semibold">$400</p>
        </Link>
        <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
          <img className="h-[500px]" src={keyboardSample} alt="" />
          <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
          <p className="text-xl font-semibold">$400</p>
        </Link>
      </ul>
    </div>
  );
}
