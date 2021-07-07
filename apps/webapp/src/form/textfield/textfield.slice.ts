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
    errorText: string;
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
        setTextfieldErrorText(state, action: PayloadAction<{ name: string; errorText: string }>) {
            const index = state.findIndex((tf) => tf.name === action.payload.name);
            state[index].isValid = !action.payload.errorText;
            state[index].errorText = action.payload.errorText;
        },
    },
});

export const { createTextfield, editTextfieldValue, removeTextfield, setTextfieldErrorText } =
    textfieldSlice.actions;
export default textfieldSlice.reducer;
