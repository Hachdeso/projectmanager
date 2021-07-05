import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TextFieldConstraints {
    required?: boolean;
}

export interface AppTextField {
    name: string;
    label: string;
    value: string;
    form?: string;
    constraints?: TextFieldConstraints;
    helperText?: string;
    isValid: boolean;
}

const initialState: AppTextField[] = [];

const textfieldSlice = createSlice({
    initialState,
    name: "textfield",
    reducers: {
        createTextfield(state, action: PayloadAction<AppTextField>) {
            state.push(action.payload);
        },
        editTextfieldValue(state, action: PayloadAction<{ name: string; newValue: string }>) {
            state[state.findIndex((tf) => tf.name === action.payload.name)].value =
                action.payload.newValue;
        },
        removeTextfield(state, action: PayloadAction<string>) {
            state.splice(
                state.findIndex((tf) => tf.name === action.payload),
                1
            );
        },
    },
});

export const { createTextfield, editTextfieldValue, removeTextfield } = textfieldSlice.actions;
export default textfieldSlice.reducer;
