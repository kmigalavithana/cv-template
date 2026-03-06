import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {UserSigninAPI} from "../utilities/api/UserSigninAPI.ts";
import type {IUserPayload} from "../utilities/types/slice";

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
        builder.addCase(
            UserSigninAPI.pending,
            (state) => {
                state.loading = true;
            }
        ).addCase(
            UserSigninAPI.fulfilled,
            (state,{payload}: PayloadAction<IUserPayload>) => {
                state.isAuthenticated = true
                state.loading = false;
                console.log(payload)
            }
        ).addCase(
            UserSigninAPI.rejected,
            (state) => {
                state.loading = false;
                state.isAuthenticated = false;

            }
        )
    }
})
