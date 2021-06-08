export type TextFieldState = "inactive" | "focused" | "active" | "error";

export interface TextFieldType {
    form?: string;
    name: string;
    value: string;
    errorTxt?: string;
    helperTxt?: string;
    state: TextFieldState;
    label: string;
}
