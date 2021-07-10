import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.userInformations = action.payload;
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
    },
});

export const { setUser, setIsAuth } = userSlice.actions;

export default userSlice.reducer;
