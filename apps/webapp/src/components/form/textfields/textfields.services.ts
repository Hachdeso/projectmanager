import { store } from "../../../app/store";
import { TextFieldState, TextFieldType } from "../../../types/forms/TextField";

export function getTextFieldByName(name: string): TextFieldType | undefined {
    const textForm = store.getState().forms.textFields.find((tf) => tf.name === name);
    return textForm ? Object.assign({}, textForm) : undefined;
}

export function getTextFieldState(textField: TextFieldType, focus = false): TextFieldState {
    if (textField.state === "error") {
        return "error";
    } else if (focus) {
        return "focused";
    } else {
        return textField.value ? "active" : "inactive";
    }
}
