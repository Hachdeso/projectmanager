import { createSlice } from "@reduxjs/toolkit";

interface ProgressBarState {
    isFetching: boolean;
}

const initialState = { isFetching: false } as ProgressBarState;

const progressbarSlice = createSlice({
    initialState,
    name: "progressbar",
    reducers: {},
});

export const {} = progressbarSlice.actions;

export default progressbarSlice.reducer;
