import React from "react";
import { useSelector } from "react-redux";
import { selectProductsById } from "../features/product/productApiSlice";
import keyboardSample from "../assets/keyboard-sample.jpg";
import { Link } from "react-router-dom";

export default function TopRatedProduct({ productId }) {
  const product = useSelector((state) => selectProductsById(state, productId));
  if (product) {
    return (
      <Link
        to="/product"
        className="lg:h-[400px] xl:h-[500px] flex flex-col gap-2 shadow-lg"
      >
        <img
          className="lg:h-[400px] xl:h-[500px]"
          src={keyboardSample}
          alt=""
        />
        <p className="text-xs font-semibold p-1 lg:text-blue-500 lg:text-md xl:text-xl xl:font-semibold">
          {product.name}
        </p>
        <p className="text-xs font-semibold p-2 lg:text-md xl:text-xl xl:font-semibold">
          ${product.price}
        </p>
      </Link>
    );
  } else {
    return null;
  }
}
