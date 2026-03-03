import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userId:'',
    userToken:'',
    isAuthenticated: false,
}

createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase().addCase().addCase()
    }
})
