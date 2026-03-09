export interface IInitialState {
  selectedTemplate: string;
}

export interface IAuthInitialState{
    loading: boolean;
    userId: string;
    userToken: string;
    isAuthenticated: boolean;
    userName: string;
    userEmail: string;
}

export interface IUserPayload {
    status: string;
    user_details: {
        user_token: string;}

}
