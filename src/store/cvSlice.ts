import { createSlice } from "@reduxjs/toolkit";
import type { IInitialState } from "../utilities/types/slice";


const initialState:IInitialState = {
  selectedTemplate: 'modern'
}

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setSelectedTemplate: (state,action) => {
    //  state.selectedTemplate =
      console.log(action);
    }
  }
})

export const {setSelectedTemplate} = cvSlice.actions;

export default cvSlice.reducer;