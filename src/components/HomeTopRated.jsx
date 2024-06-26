import React from "react";
import { useGetProductsQuery } from "../features/product/productApiSlice";
import FeaturedProduct from "../subcomponents/FeaturedProduct";
import TopRatedProduct from "../subcomponents/TopRatedProduct";

export default function HomeTopRated() {
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
            <TopRatedProduct key={productId} productId={productId} />
          ))
      : null;
    content = (
      <div className="m-[25px] md:m-[50px] lg:m[75px] xl:m-[100px] text-black">
        <h1 className="text-md md:text-3xl font-semibold">Top Rated</h1>
        <ul className="grid grid-cols-2 lg:grid-cols-5 gap-10 my-6">
          {listOfProducts}
        </ul>
      </div>
    );
  }
  return content;
  // return (
  //   <div className="m-[100px] text-black">
  //     <h1 className="text-3xl font-semibold">Top Rated Products</h1>
  //     <ul className="grid grid-cols-4 gap-10 my-6">
  //       <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
  //         <img className="h-[500px]" src={keyboardSample} alt="" />
  //         <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
  //         <p className="text-xl font-semibold">$400</p>
  //       </Link>
  //       <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
  //         <img className="h-[500px]" src={keyboardSample} alt="" />
  //         <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
  //         <p className="text-xl font-semibold">$400</p>
  //       </Link>
  //       <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
  //         <img className="h-[500px]" src={keyboardSample} alt="" />
  //         <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
  //         <p className="text-xl font-semibold">$400</p>
  //       </Link>
  //       <Link to="/product" className="flex flex-col gap-2 shadow-lg p-5">
  //         <img className="h-[500px]" src={keyboardSample} alt="" />
  //         <p className="text-xl font-semibold">Red Dragon XCL Robust 12</p>
  //         <p className="text-xl font-semibold">$400</p>
  //       </Link>
  //     </ul>
  //   </div>
  // );
}
