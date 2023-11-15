import React from "react";
import {
  useAddEntryMutation,
  useDeleteEntryMutation,
  useGetAllProductsQuery,
  useSearchProductQuery,
} from "../store/rtkQuerySlice";
import { isFulfilled } from "@reduxjs/toolkit";
const addedData = {
  id: 36952,
  name: "Xavier",
  age: 42,
  year: 2019,
};
export default function Data() {
  const { data, isError, isLoading, isSuccess , refetch } = useGetAllProductsQuery("");
  const { data: searchData } = useSearchProductQuery("");
  const [addEntr] = useAddEntryMutation();
  const [deleteEntry] = useDeleteEntryMutation();
  console.log( isError, data, isLoading);
  console.log(searchData);
  console.log("/*****************************/");
  return (
    <div>
      Data
      {data &&
        data.map((item: any) => (
          <div>
            {item.name} {item.id}
          </div>
        ))}
      <button onClick={refetch}>Refetch</button>
      <button onClick={() => addEntr(addedData)}>Post Entry</button>
      <button onClick={() => deleteEntry(addedData.id)}>Delete </button>
    </div>
  );
}
