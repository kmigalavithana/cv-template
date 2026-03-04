import {createAsyncThunk} from "@reduxjs/toolkit";
import  axios from "axios";

const UserSigninAPI = createAsyncThunk(
    'auth/login',
    async () => {
        axios.post('api/user-sign-in')
    }
)


