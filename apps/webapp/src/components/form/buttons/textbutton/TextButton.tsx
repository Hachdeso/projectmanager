import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ButtonType } from "../../../../types/forms/Button";
import { addButton, removeButton } from "../buttons.slice";
import "./textbutton.scss";

interface ButtonProps {
    name: string;
    label: string;
    form?: string;
    onClick: Function;
}

const TextButton: React.FC<ButtonProps> = ({ name, label, form, onClick }) => {
    const [loaded, setLoaded] = useState(false);
    const button = useAppSelector((state) => {
        return state.forms.buttons.find((b) => b.name === name);
    });

    const dispatch = useAppDispatch();

    // Gestion de la création du boutton
    useEffect(() => {
        if (!button) {
            const button: ButtonType = {
                name,
                label,
                state: "active",
                form,
            };
            dispatch(addButton(button));
            setLoaded(true);
        }
        // eslint-disable-next-line
    }, [loaded]);

    // Gestion de la suppresiion du boutton
    useEffect(() => {
        return () => {
            dispatch(removeButton(name));
        };
        // eslint-disable-next-line
    }, []);

    if (!button) return null;

    return (
        <button
            className="textButton"
            onClick={() => {
                if (button.state === "active") {
                    onClick();
                }
            }}
        >
            <div className="wrapper">
                <span className="label">{label}</span>
            </div>
        </button>
    );
};

export default TextButton;
