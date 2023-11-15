import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  // For identifying query
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  // giving a name for cached data
  tagTypes: ["products"],
  endpoints: (builder) => ({
    // custom name
    getAllProducts: builder.query({
      query: () => "value",
      // for auto caching
      providesTags: ["products"],
    }),
    searchProduct: builder.query({
      query: (id) => `value/${id}`,
      providesTags: ["products"],
    }),
    addEntry: builder.mutation({
      query: (entry) => ({
        // value or /value (line 18) is your wish
        url: "value",
        method: "POST",
        body: entry,
      }),
      invalidatesTags: ["products"],
    }),
    deleteEntry: builder.mutation({
      query: (id) => ({
        url: `/value/${id}`,
        method: "DELETE",
      }),
      // to trigger refetching of cached item
      invalidatesTags: ["products"],
    }),
  }),
});

//these hooks will be customly made for you byt rtk query.
export const {
  useGetAllProductsQuery,
  useSearchProductQuery,
  useAddEntryMutation,
  useDeleteEntryMutation,
} = usersApi;
