import { configureStore } from "@reduxjs/toolkit";
import cvReducer from '../store/cvSlice'

export  const store = configureStore({
  reducer: cvReducer,
})

export type RootState = ReturnType<typeof store.dispatch>;
export type RootDispatch = typeof store.dispatch;