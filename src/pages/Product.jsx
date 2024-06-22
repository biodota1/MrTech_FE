import React, { useEffect, useState } from "react";
import keyboardSample from "../assets/keyboard-sample.jpg";

export default function Product() {
  const [quantity, setQuantity] = useState(0);
  const handleDecrement = () => {
    setQuantity((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="min-h-screen m-[150px] text-black ">
      <div className="flex gap-16 h-screen">
        <img className="border-2 h-2/3" src={keyboardSample} alt="" />
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold pb-[20px]">
            Red Dragon XCL Robust 12
          </h2>
          <div className="rating pb-[20px]">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h3 className="text-2xl font-semibold">Description </h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            deserunt magnam itaque quaerat ad! Beatae modi commodi laboriosam
            odio aut tenetur, dolorum nisi molestiae rem facilis, consequuntur
            cumque excepturi at.
          </p>
          <p className="py-[50px] text-4xl font-bold">$99.99</p>
          <div className="flex items-center gap-5">
            <p>Quantity</p>
            <button className="btn text-xl" onClick={handleDecrement}>
              {"<"}
            </button>
            <p>{quantity}</p>
            <button className="btn text-xl" onClick={handleIncrement}>
              {">"}
            </button>
            <button className="btn bg-btn-primary border-none text-black">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
