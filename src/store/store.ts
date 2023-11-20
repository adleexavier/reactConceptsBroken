import { configureStore } from "@reduxjs/toolkit";
import normalSlice from "./normalSlice";
import thunkSlice from "./createAsyncThunkSlice";
export const store = configureStore({
  reducer: {
    [normalSlice.name]: normalSlice.reducer,
    [thunkSlice.name]: thunkSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
