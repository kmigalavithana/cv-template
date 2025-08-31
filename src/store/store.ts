import { configureStore } from "@reduxjs/toolkit";
import cvReducer from '../store/cvSlice'

export default configureStore({
  reducer: cvReducer,
})