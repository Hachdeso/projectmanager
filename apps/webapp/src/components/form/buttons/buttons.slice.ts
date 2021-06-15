import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ButtonType } from "../../../types/forms/Button";

const initialState = [] as ButtonType[];

const buttonsSlice = createSlice({
    name: "buttons",
    initialState,
    reducers: {
        addButton(state, action: PayloadAction<ButtonType>) {
            state.push(action.payload);
        },
        removeButton(state, action: PayloadAction<string>) {
            state.slice(
                state.findIndex((b) => b.name === action.payload),
                1
            );
        },
    },
});

export const { addButton, removeButton } = buttonsSlice.actions;

export default buttonsSlice.reducer;
