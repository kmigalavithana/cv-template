import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { UserSigninAPI } from "../utilities/api/UserSigninAPI.ts";
import type { IAuthInitialState, IUserPayload } from "../utilities/types/slice";

const initialState: IAuthInitialState = {
  loading: false,
  userId: "",
  userToken: "",
  userName: "",
  userEmail: "",
  isAuthenticated: false,
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserSigninAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        UserSigninAPI.fulfilled,
        (state, { payload }: PayloadAction<IUserPayload>) => {
          console.log({ payload });
          setPayloadDataForReduxStore(state, payload);
        },
      )
      .addCase(UserSigninAPI.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

const setPayloadDataForReduxStore = (
  state: IAuthInitialState,
  payload: IUserPayload,
) => {
  if (payload) {
    state.isAuthenticated = true;
    state.loading = false;
    state.userId = payload.user_details.user_id;
    state.userToken = payload.user_details.user_token;
    state.userName = payload.user_details.user_name;
    state.userEmail = payload.user_details.user_email;
  }
};
export default authSlice.reducer;
