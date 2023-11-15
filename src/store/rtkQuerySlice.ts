import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  // For identifying query
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    // custom name
    getAllProducts: builder.query({
      query: () => "products",
    }),
    searchProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

//these hooks will be customly made for you byt rtk query.
export const { useGetAllProductsQuery, useSearchProductQuery } = productsApi;
