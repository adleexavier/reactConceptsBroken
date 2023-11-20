import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/createAsyncThunkSlice";
import { AppDispatch } from "../store/store";
const addedData = {
  id: 36952,
  name: "Xavier",
  age: 42,
  year: 2019,
};
export default function Data() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, state } = useSelector((state: any) => state.thunkState);
  return (
    <div>
      <button onClick={() => dispatch(fetchData())}>Get data</button>

      <h1 style={{ color: "white" }}>{state === "pending" && "Loading..."}</h1>
      <h1 style={{ color: "white" }}>{state === "sucess" && data}</h1>
    </div>
  );
}
