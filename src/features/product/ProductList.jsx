import React from "react";
// import { useGetProductsQuery } from "./productApiSlice";
import Product from "./Product";

export default function ProductList() {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
    // } = useGetProductsQuery("productsList", {
    //   pollingInterval: 6000,
    //   refetchOnFocus: true,
    //   refetchOnMountOrArgChange: true,
    // });
  } = useGetProductsQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = products;

    const tableContent = ids?.length
      ? ids.map((productId) => (
          <Product key={productId} productId={productId} />
        ))
      : null;

    content = (
      <div className="overflow-x-auto text-slate-900 flex flex-col gap-10">
        <h2 className="font-semibold text-2xl">Productlist</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-slate-900">Image</th>
              <th className="text-slate-900">Name</th>
              <th className="text-slate-900">Category</th>
              <th className="text-slate-900">Price</th>
              <th className="text-slate-900">Description</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th className="text-slate-900">Image</th>
              <th className="text-slate-900">Name</th>
              <th className="text-slate-900">Category</th>
              <th className="text-slate-900">Price</th>
              <th className="text-slate-900">Description</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
  return content;
}
