import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

export const drawerSlice = createSlice({
    initialState,
    name: "drawer",
    reducers: {
        setDrawer(state, action: PayloadAction<boolean>) {
            return action.payload;
        },
    },
});

export const { setDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
