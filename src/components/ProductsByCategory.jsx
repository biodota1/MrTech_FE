import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../features/public/publicApicSlice";
import keyboardSample from "../assets/keyboard-sample.jpg";

export default function ProductsByCategory() {
  const { category } = useParams();
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductByCategoryQuery(category);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    content = (
      <div className="min-h-screen my-10">
        <h2 className="font-semibold xl:text-xl p-2">
          {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
          <span className="text-slate-500">{`(${products?.ids?.length})`}</span>
        </h2>
        <ul className="grid grid-cols-2 gap-3">
          {products && products.ids.length > 0 ? (
            products.ids.map((id) => (
              <Link
                key={id}
                to="/product"
                className="flex flex-col h-[400px] gap-2 shadow-lg"
              >
                <img className="h-3/5" src={keyboardSample} alt="" />
                <p className="h-1/5 p-3 text-sm xl:text-xl font-semibold">
                  {products.entities[id].name}
                </p>
                <p className="h-1/5 p-3 text-lg xl:text-xl font-semibold">
                  ${products.entities[id].price}
                </p>
              </Link>
            ))
          ) : (
            <div>No products found in this category</div>
          )}
        </ul>
      </div>
    );
  }
  return content;
}
