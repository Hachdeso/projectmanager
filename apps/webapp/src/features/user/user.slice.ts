import { createSlice } from "@reduxjs/toolkit";

interface UserInformations {
    token: string;
    email: string;
}

interface UserState {
    isLoggedIn: boolean;
    userInformations?: UserInformations;
}

const initialState = { isLoggedIn: false } as UserState;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
