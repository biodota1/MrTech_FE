import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { store } from "../app/store";
import { productsApiSlice } from "../features/product/productApiSlice";

export default function Prefetch() {
  // useEffect(() => {
  //   console.log("subscribing");

  //   const products = store.dispatch(
  //     productsApiSlice.endpoints.getProducts.initiate()
  //   );
  //   const productsbyCategory = store.dispatch(
  //     productsApiSlice.endpoints.getProductsByCategory.initiate()
  //   );

  //   return () => {
  //     console.log("unsubscribing");
  //     products.unsubscribe();
  //     productsbyCategory.unsubscribe();
  //   };
  // });

  return <Outlet />;
}
