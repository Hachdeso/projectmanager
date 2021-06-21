import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TextFieldType } from "../../../types/forms/TextField";

const initialState = [] as TextFieldType[];

const textFormsSlice = createSlice({
    name: "textfields",
    initialState,
    reducers: {
        addTextField(state, action: PayloadAction<TextFieldType>) {
            state.push(action.payload);
        },
        removeTextField(state, action: PayloadAction<string>) {
            state.splice(
                state.findIndex((tf) => tf.name === action.payload),
                1
            );
        },
        editTextFieldValue(state, action: PayloadAction<{ name: string; value: string }>) {
            state[state.findIndex((tf) => tf.name === action.payload.name)].value =
                action.payload.value;
        },
        editTextFieldErrorTxt(state, action: PayloadAction<{ name: string; errorTxt: string }>) {
            state[state.findIndex((tf) => tf.name === action.payload.name)].errorTxt =
                action.payload.errorTxt;
        },
        editTextFieldIsFocus(state, action: PayloadAction<{ name: string; isFocus: boolean }>) {
            state[state.findIndex((tf) => tf.name === action.payload.name)].isFocus =
                action.payload.isFocus;
        },
    },
});

export const {
    addTextField,
    editTextFieldValue,
    removeTextField,
    editTextFieldErrorTxt,
    editTextFieldIsFocus,
} = textFormsSlice.actions;

export default textFormsSlice.reducer;
