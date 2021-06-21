import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/entity/User";

interface UserInformations {
    token: string;
    user: User;
}

interface UserState {
    isAuth: boolean;
    userInformations?: UserInformations;
}

const initialState = { isAuth: false } as UserState;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
