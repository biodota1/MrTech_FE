import React from "react";
import FeaturedProduct from "../subcomponents/FeaturedProduct";
import { useGetProductsQuery } from "../features/product/productApiSlice";

export default function HomeFeatured() {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = products;

    const listOfProducts = ids?.length
      ? ids
          .slice(0, 4)
          .map((productId) => (
            <FeaturedProduct key={productId} productId={productId} />
          ))
      : null;
    content = (
      <div className="m-[25px] md:m-[50px] lg:m[75px] xl:m-[100px] text-black">
        <h1 className="text-md md:text-3xl font-semibold">Featured</h1>
        <ul className="grid grid-cols-2 lg:grid-cols-5 gap-10 my-6">
          {listOfProducts}
        </ul>
      </div>
    );
  }
  return content;
}
