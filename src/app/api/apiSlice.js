import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:2777",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://mrtech-be.onrender.com" }),
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({}),
});
