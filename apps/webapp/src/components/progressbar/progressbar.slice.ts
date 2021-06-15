import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgressBarState {
    isFetching: boolean;
}

const initialState: ProgressBarState = { isFetching: false };

const progressBarSlice = createSlice({
    name: "progressBar",
    initialState,
    reducers: {
        editProgressBarIsFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        },
    },
});

export const { editProgressBarIsFetching } = progressBarSlice.actions;

export default progressBarSlice.reducer;
