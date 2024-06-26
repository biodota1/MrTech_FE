import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const productsAdapter = createEntityAdapter({});

const initialState = productsAdapter.getInitialState();

export const publicProductsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductByCategory: builder.query({
      query: (category) => `/public?category=${category}`,
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
        console.log(responseData);

        console.log(loadedProducts);
        return productsAdapter.setAll(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "List" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ];
        } else return [{ type: "Product", id: "List" }];
      },
    }),
  }),
});

export const { useGetProductByCategoryQuery } = publicProductsApiSlice;

export const selectPublicProductsResult =
  publicProductsApiSlice.endpoints.getProductByCategory.select();

const selectPublicProductsData = createSelector(
  selectPublicProductsResult,
  (publicProductsResult) => publicProductsResult.data ?? initialState
);

export const {
  selectAll: selectAllPublicProducts,
  selectById: selectPublicProductsById,
  selectIds: selectPublicProductIds,
} = productsAdapter.getSelectors(
  (state) => selectPublicProductsData(state) ?? initialState
);
