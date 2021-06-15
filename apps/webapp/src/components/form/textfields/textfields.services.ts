import { store } from "../../../app/store";
import { TextFieldType } from "../../../types/forms/TextField";
import { editTextFieldErrorTxt } from "./textfields.slice";

export function getTextFieldByName(name: string): TextFieldType | undefined {
    const textForm = store.getState().forms.textFields.find((tf) => tf.name === name);
    return textForm ? Object.assign({}, textForm) : undefined;
}

export function getClassesForTextField(tf: TextFieldType) {
    let classes = "textField";

    if (tf.isFocus) {
        classes += " textField_focused";
    }

    if (tf.errorTxt) {
        classes += " textField_error";
    }

    return classes;
}

export function validateTextField(tf: TextFieldType) {
    console.log("validateTF");
    let errorTxt = "";

    if (tf.constraints?.required && !tf.value) {
        errorTxt = "Ce champ est obligatoire";
    }

    store.dispatch(editTextFieldErrorTxt({ name: tf.name, errorTxt }));

    return errorTxt ? false : true;
}
