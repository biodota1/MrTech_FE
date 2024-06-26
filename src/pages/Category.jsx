import React from "react";
import { useParams } from "react-router-dom";
import ProductsByCategory from "../components/ProductsByCategory";

export default function Category() {
  return (
    <div className="min-h-screen text-black m-auto w-5/6 mt-10">
      <ProductsByCategory />
    </div>
  );
}
