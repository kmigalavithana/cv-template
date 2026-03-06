import {createAsyncThunk} from "@reduxjs/toolkit";
import  axios from "axios";

export const UserSigninAPI = createAsyncThunk(
    'auth/login',
    async () => {
        return axios.get('/sanctum/csrf-cookie').then(async () => {
            try {
                const reaponse = await axios.post('api/user-sign-in')
                console.log(reaponse);
                if (reaponse.status === 200) {
                    return reaponse.data;
                }

            }
            catch (error: any) {
            }
        });
    }
)


