import { createRef, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { TextFieldConstraints, TextFieldType } from "../../../types/forms/TextField";
import {
    addTextField,
    editTextFieldIsFocus,
    editTextFieldValue,
    removeTextField,
} from "./textfields.slice";
import "./textfield.scss";
import { motion } from "framer-motion";
import { getClassesForTextField } from "./textfields.services";

interface TextFieldProps {
    name: string;
    initialValue?: string;
    form?: string;
    label: string;
    constraints?: TextFieldConstraints;
    type?: "text" | "password";
}

const TextField: React.FC<TextFieldProps> = ({
    name,
    initialValue,
    form,
    label,
    constraints,
    type = "text",
}) => {
    const [loaded, setLoaded] = useState(false);
    const [variant, setVariant] = useState("inactive");
    const dispatch = useAppDispatch();
    const textField = useAppSelector((state) => {
        return state.forms.textFields.find((tf) => tf.name === name);
    });

    const [infoTxtVariant, setInfoTxtVariant] = useState("show");
    const infoTxtVariants = {
        hide: {
            y: -19,
            transition: { duration: 0 },
        },
        show: {
            y: 0,
            transition: { type: "spring", duration: 0.3, bounce: 0.6 },
        },
    };

    const textFieldRef = createRef<HTMLInputElement>();

    // Gestion de la creation de l'état du TextField
    useEffect(() => {
        if (!textField) {
            const textField: TextFieldType = {
                name,
                value: initialValue ? initialValue : "",
                label,
                form,
                constraints,
                isFocus: false,
            };
            dispatch(addTextField(textField));
            setLoaded(true);
        }
    }, [loaded]);

    //Gestion de la suppresion du TextField
    useEffect(() => {
        return () => {
            dispatch(removeTextField(name));
        };
    }, []);

    // Gestion de la position du label
    useEffect(() => {
        if (textField?.isFocus || textField?.value) {
            setVariant("active");
        } else {
            setVariant("inactive");
        }
    }, [textField?.isFocus, textField?.value]);

    //Gestion de l'animation du text d'erreure
    useEffect(() => {
        if (textField?.errorTxt) {
            setInfoTxtVariant("hide");
            setTimeout(() => {
                setInfoTxtVariant("show");
            }, 50);
        }
    }, [textField?.errorTxt]);

    if (!textField) return null;

    return (
        <div
            className={getClassesForTextField(textField)}
            onClick={() => textFieldRef.current?.focus()}
        >
            <span className={`label ${variant === "active" ? "label_active" : ""}`}>
                {textField.label}
            </span>
            <input
                type={type}
                ref={textFieldRef}
                value={textField.value}
                onFocus={() =>
                    dispatch(editTextFieldIsFocus({ name: textField.name, isFocus: true }))
                }
                onBlur={() =>
                    dispatch(editTextFieldIsFocus({ name: textField.name, isFocus: false }))
                }
                onChange={(e) => dispatch(editTextFieldValue({ name, value: e.target.value }))}
            />
            <motion.span animate={infoTxtVariant} variants={infoTxtVariants} className={"infoTxt"}>
                {textField.errorTxt ? textField.errorTxt : textField.helperTxt}
            </motion.span>
        </div>
    );
};

export default TextField;
