import React, { useState } from "react";
import {
  useAddEntryMutation,
  useDeleteEntryMutation,
  useGetAllProductsQuery,
  useSearchProductQuery,
} from "../store/rtkQuerySlice";
const addedData = {
  id: 36952,
  name: "Xavier",
  age: 42,
  year: 2019,
};
export default function Data() {
  const { data, isError, isLoading, isSuccess, refetch } =
    useGetAllProductsQuery("");

  const [addEntr] = useAddEntryMutation();
  const [deleteEntry] = useDeleteEntryMutation();
  const [showSearch, setSearch] = useState("");
  const getFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputData = (
      (e.target as HTMLFormElement).getElementsByClassName(
        "tracker"
      )[0] as HTMLInputElement
    ).value;
    setSearch(inputData);
  };
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
      <form onSubmit={getFormData}>
        <input type="text" className="tracker" />
        <button type="submit">Submit</button>
      </form>
      {showSearch && <SearchedName id={showSearch} />}
    </div>
  );
}

export const SearchedName = ({ id }: { id: string }) => {
  const { isSuccess, data: searchData } = useSearchProductQuery(id);

  return (
    <>
      {isSuccess && (
        <ul>
          <li>{searchData.name}</li>
          <li>{searchData.age}</li>
          <li>{searchData.year}</li>
        </ul>
      )}
    </>
  );
};
