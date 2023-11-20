import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("sampleFetcher", async function () {
  const data: string = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" The box is full of Apples - fetched data");
    }, 2000);
  });

  // this data is available as action.payload.
  return data;
});

const initialState = {
  data: "",
  state: "idle",
};
const thunkSlice = createSlice({
  name: "thunkState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.state = "pending";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.state = "error";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.state = "sucess";
        state.data = action.payload;
      });
  },
});
export default thunkSlice;
/**
 * Note:
 * AsyncThunk functions should not be called starting with get, they are reserved for selectors.
 */
