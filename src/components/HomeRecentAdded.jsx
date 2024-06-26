import React from "react";
import { useGetProductsQuery } from "../features/product/productApiSlice";
import RecentProduct from "../subcomponents/RecentProduct";

export default function HomeRecentAdded() {
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
          .slice(0, 6)
          .map((productId) => (
            <RecentProduct key={productId} productId={productId} />
          ))
      : null;
    content = (
      <div className="m-[25px] md:m-[50px] lg:m[75px] xl:m-[100px] text-black">
        <h1 className="text-md md:text-3xl font-semibold">Recently added</h1>
        <ul className="grid grid-cols-2 lg:grid-cols-5 gap-10 my-6">
          {listOfProducts}
        </ul>
      </div>
    );
  }
  return content;
}
