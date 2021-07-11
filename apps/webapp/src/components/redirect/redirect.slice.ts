import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const redirectSlice = createSlice({
    initialState,
    name: "redirect",
    reducers: {
        setRedirect(state, action: PayloadAction<string>) {
            return action.payload;
        },
    },
});

export const { setRedirect } = redirectSlice.actions;
export default redirectSlice.reducer;
