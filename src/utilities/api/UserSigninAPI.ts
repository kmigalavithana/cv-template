import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type Axios, type AxiosResponse } from "axios";

interface IUserSigninAPI {
  LoginInfo: object;
}

export const UserSigninAPI = createAsyncThunk<
  AxiosResponse<any> | undefined,
  IUserSigninAPI
>("auth/login", async ({ LoginInfo }) => {
  return axios.get("/sanctum/csrf-cookie").then(async () => {
    try {
      const reaponse = await axios.post("api/user-sign-in", LoginInfo);
      console.log(reaponse);
      if (reaponse.status === 200) {
        return reaponse.data;
      }
    } catch (error: any) {}
  });
});
