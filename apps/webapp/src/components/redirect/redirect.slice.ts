import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RedirectState {
    path: string;
}

const initialState = { path: "" } as RedirectState;

const redirectSlice = createSlice({
    name: "redirect",
    initialState,
    reducers: {
        setRedirect(state, action: PayloadAction<string>) {
            state.path = action.payload;
        },
    },
});

export const { setRedirect } = redirectSlice.actions;

export default redirectSlice.reducer;
