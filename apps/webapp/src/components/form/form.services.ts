import { useAppDispatch } from "../../app/hooks";
import { store } from "../../app/store";
import { TextFieldType } from "../../types/forms/TextField";
import { validateTextField } from "./textfields/textfields.services";
import { editTextFieldErrorTxt } from "./textfields/textfields.slice";

function getTextFieldsByForm(form: string): TextFieldType[] {
    const textfields: TextFieldType[] = [];
    for (const tf of store.getState().forms.textFields) {
        if (tf.form === form) {
            textfields.push(tf);
        }
    }
    return textfields;
}

export function validateForm(form: string) {
    console.log("validateForm");
    const textfields = getTextFieldsByForm(form);
    console.log(textfields);

    let isValid = true;

    for (const tf of textfields) {
        console.log(tf);

        if (tf.constraints) {
            if (!validateTextField(tf) && isValid) {
                isValid = false;
            }
        }
    }

    return isValid;
}
