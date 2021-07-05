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
    required?: boolean;
    name: string;
    label: string;
    initialValue?: string;
    helperText?: string;
    constraints?: TextFieldConstraints;
    form?: string;
}

const AppTextField: React.FC<AppTextFieldProps> = ({
    required,
    name,
    initialValue,
    helperText,
    label,
    constraints,
    form,
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
            required={required}
            error={!textfield.isValid}
            className="textField"
            id={textfield.name}
            helperText={textfield.helperText}
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
