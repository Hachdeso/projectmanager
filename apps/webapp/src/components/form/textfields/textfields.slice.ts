import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TextFieldState, TextFieldType } from "../../../types/forms/TextField";

const initialState = [] as TextFieldType[];

const textFormsSlice = createSlice({
    name: "textfields",
    initialState,
    reducers: {
        addTextField(state, action: PayloadAction<TextFieldType>) {
            state.push(action.payload);
        },
        editTextFieldState(state, action: PayloadAction<{ name: string; state: TextFieldState }>) {
            state[state.findIndex((tf) => tf.name === action.payload.name)].state =
                action.payload.state;
        },
        editTextFieldValue(state, action: PayloadAction<{ name: string; value: string }>) {
            state[state.findIndex((tf) => tf.name === action.payload.name)].value =
                action.payload.value;
        },
    },
});

export const { addTextField, editTextFieldState, editTextFieldValue } = textFormsSlice.actions;

export default textFormsSlice.reducer;
