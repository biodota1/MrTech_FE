import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const productsAdapter = createEntityAdapter({});

const initialState = productsAdapter.getInitialState();

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/public/products",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        if (!Array.isArray(responseData)) {
          throw new Error("Response data is not an array");
        }
        const loadedProducts = responseData.map((product) => {
          product.id = product._id;
          return product;
        });
        return productsAdapter.setAll(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "List" },
            ...result.ids.map((id) => ({ type: "Product" })),
          ];
        } else return [{ type: "Product", id: "List" }];
      },
    }),
    addNewProduct: builder.mutation({
      query: (initialProductData) => ({
        url: "/products",
        method: "POST",
        body: { ...initialProductData },
      }),
      invalidatesTags: [{ type: "Product", id: "List" }],
    }),
  }),
});

export const { useGetProductsQuery, useAddNewProductMutation } =
  productsApiSlice;

export const selectProductsResult =
  productsApiSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data ?? initialState
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductsById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
