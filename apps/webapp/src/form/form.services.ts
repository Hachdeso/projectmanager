import { getTextfieldsByForm, validateTextfield } from "./textfield/textfield.services";

export function validateForm(form: string) {
    let isValid = true;

    const textfieldsNames = getTextfieldsByForm(form);

    for (const textfieldName of textfieldsNames) {
        if (!validateTextfield(textfieldName)) isValid = false;
    }

    return isValid;
}
