import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

interface UserState {
    isAuth: boolean;
    userInformations?: User;
}

const initialState: UserState = {
    isAuth: false,
};

const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
