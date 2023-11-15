import { createSlice } from "@reduxjs/toolkit";

const aSlice = createSlice({
  name: "normalSlice",
  initialState: {
    data: "no data",
  },
  reducers: {
    setData: (state, action) => {
      state.data = " data set";
    },
  },
});

export const { setData } = aSlice.actions;
export default aSlice;
