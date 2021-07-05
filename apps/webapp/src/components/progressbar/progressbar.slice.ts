import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgressBarState {
    isFetching: boolean;
}

const initialState = { isFetching: false } as ProgressBarState;

const progressbarSlice = createSlice({
    initialState,
    name: "progressbar",
    reducers: {
        setIsFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        },
    },
});

export const { setIsFetching } = progressbarSlice.actions;

export default progressbarSlice.reducer;
