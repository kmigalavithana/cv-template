import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IInitialState } from "../utilities/types/slice";
import type { IpersonalDetails } from "../utilities/types/cvTemplate.ts";


const initialState:IInitialState = {
  selectedTemplate: 'modern',
  personalDetails: {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  }
}

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setSelectedTemplate: (state,action) => {
       state.selectedTemplate = action.payload;
    },
    setPersonalDetails: (state, action:PayloadAction<IpersonalDetails>) => {
      state.personalDetails = action.payload;
    }
  }
})

export const {setSelectedTemplate,setPersonalDetails} = cvSlice.actions;

export default cvSlice.reducer;
