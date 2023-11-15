import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./rtkQuerySlice";
import normalSlice from "./normalSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [normalSlice.name]: normalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
