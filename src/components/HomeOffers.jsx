import React from "react";
import offers from "../assets/discount.jpg";

export default function HomeOffers() {
  return (
    <div className="m-5 xl:m-[100px]">
      <img className="w-full h-[300px]" src={offers} alt="" />
    </div>
  );
}
