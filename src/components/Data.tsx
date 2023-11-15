import React from "react";
import {
  useGetAllProductsQuery,
  useSearchProductQuery,
} from "../store/rtkQuerySlice";

export default function Data() {
  const { data, isError, isLoading } = useGetAllProductsQuery({});
  const { data: searchData } = useSearchProductQuery("iphone");
  console.log(data, isError, data, isLoading);
  console.log(searchData);
  return <div style={{ color: "white" }}>Data</div>;
}
