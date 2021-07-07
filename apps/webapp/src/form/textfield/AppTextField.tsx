import { TextField } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    createTextfield,
    editTextfieldValue,
    removeTextfield,
    TextFieldConstraints,
} from "./textfield.slice";

interface AppTextFieldProps {
    name: string;
    label: string;
    initialValue?: string;
    helperText?: string;
    constraints?: TextFieldConstraints;
    form?: string;
    type?: "password";
}

const AppTextField: React.FC<AppTextFieldProps> = ({
    name,
    initialValue,
    helperText,
    label,
    constraints,
    form,
    type,
}) => {
    const textfield = useAppSelector((state) => {
        return state.form.textfield.find((tf) => tf.name === name);
    });
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!textfield) {
            dispatch(
                createTextfield({
                    name,
                    value: initialValue ? initialValue : "",
                    helperText,
                    errorText: "",
                    isValid: true,
                    label,
                    constraints,
                    form,
                })
            );
        }
    }, []);

    useEffect(() => {
        return () => {
            dispatch(removeTextfield(name));
        };
    }, []);

    if (!textfield) return null;

    return (
        <TextField
            required={textfield.constraints?.required}
            error={!textfield.isValid}
            className="textField"
            type={type}
            id={textfield.name}
            helperText={textfield.isValid ? textfield.helperText : textfield.errorText}
            label={textfield.label}
            variant="outlined"
            value={textfield.value}
            onChange={(e) =>
                dispatch(editTextfieldValue({ name: textfield.name, newValue: e.target.value }))
            }
        />
    );
};

export default AppTextField;
