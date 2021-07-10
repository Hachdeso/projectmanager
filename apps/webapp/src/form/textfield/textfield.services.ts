import { store } from "../../app/store";
import { setTextfieldErrorText } from "./textfield.slice";

export function getTextfieldByName(name: string) {
    const textfield = store.getState().form.textfield.find((tf) => tf.name === name);
    return textfield ? Object.assign({}, textfield) : undefined;
}

export function getTextfieldsByForm(form: string): string[] {
    const textfields = [];
    for (const tf of store.getState().form.textfield) {
        if (tf.form === form) textfields.push(tf.name);
    }

    return textfields;
}

export function validateTextfield(name: string) {
    const textfield = getTextfieldByName(name);
    let errorText = "";

    if (!textfield) return false;

    if (!textfield.constraints) return true;

    if (textfield.constraints.required && !textfield.value) {
        errorText = "Champ obligatoire";
    } else if (
        textfield.constraints.email &&
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(textfield.value)
    ) {
        errorText = "Adresse email invalide";
    } else if (
        textfield.constraints.minLength &&
        textfield.value.length < textfield.constraints.minLength.value
    ) {
        errorText = textfield.constraints.minLength.errorText
            ? textfield.constraints.minLength.errorText
            : textfield.constraints.minLength.value + " minimum";
    } else if (
        textfield.constraints.identical &&
        getTextfieldByName(textfield.constraints.identical.to)?.value !== textfield.value
    ) {
        errorText = textfield.constraints.identical.errorText;
    }
    store.dispatch(setTextfieldErrorText({ name, errorText }));

    return !errorText;
}
