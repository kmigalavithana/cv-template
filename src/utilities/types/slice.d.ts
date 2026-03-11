import type { IpersonalDetails } from "./cvTemplate.ts";

export interface IInitialState {
  selectedTemplate: string;
  personalDetails: IpersonalDetails;
}

export interface IAuthInitialState {
  loading: boolean;
  userId: string;
  userToken: string;
  isAuthenticated: boolean;
  userName: string;
  userEmail: string;
}

export interface IUserPayload {
  status: number;
  user_details: {
    user_token: string;
    user_name: string;
    user_email: string;
    user_id: string;
  };
}
