import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { TextFieldType } from "../../../types/forms/TextField";
import { getTextFieldState } from "./textfields.services";
import { addTextField, editTextFieldState, editTextFieldValue } from "./textfields.slice";
import "./textfield.scss";

interface TextFieldProps {
    name: string;
    initialValue?: string;
    form?: string;
    label: string;
}

const TextField: React.FC<TextFieldProps> = ({ name, initialValue, form, label }) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();
    const textField = useAppSelector((state) => {
        return state.forms.textFields.find((tf) => tf.name === name);
    });

    useEffect(() => {
        if (!textField) {
            const textField: TextFieldType = {
                name,
                value: initialValue ? initialValue : "",
                state: "inactive",
                label,
                form,
            };
            dispatch(addTextField(textField));
            setLoaded(true);
        }
    }, [loaded]);

    if (loaded && textField) {
        return (
            <div className={`textField textField_${textField.state}`}>
                <span className="label">{textField.label}</span>
                <input
                    type="text"
                    value={textField.value}
                    onFocus={() =>
                        dispatch(
                            editTextFieldState({ name, state: getTextFieldState(textField, true) })
                        )
                    }
                    onBlur={() =>
                        dispatch(editTextFieldState({ name, state: getTextFieldState(textField) }))
                    }
                    onChange={(e) => dispatch(editTextFieldValue({ name, value: e.target.value }))}
                />
                <span className={textField.state === "error" ? "errorTxt" : "helperTxt"}>
                    {textField.state === "error" ? textField.errorTxt : textField.helperTxt}
                </span>
            </div>
        );
    } else {
        return <div />;
    }
};

export default TextField;
