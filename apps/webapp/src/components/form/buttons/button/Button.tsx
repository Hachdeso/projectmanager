import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ButtonType } from "../../../../types/forms/Button";
import { addButton, removeButton } from "../buttons.slice";
import { motion } from "framer-motion";
import "./buttons.scss";
import { useMouseEvents } from "../../../../hooks/useMouseEvent";

interface ButtonProps {
    name: string;
    label: string;
    onClick: Function;
}

const Button: React.FC<ButtonProps> = ({ name, label, onClick }) => {
    const [loaded, setLoaded] = useState(false);
    const button = useAppSelector((state) => {
        return state.forms.buttons.find((b) => b.name === name);
    });
    const [variant, setVariant] = useState("initial");
    const [animationProgress, setAnimationProgress] = useState(false);
    const mouseEvents = useMouseEvents();

    const animateVariants = {
        click: {
            opacity: 1,
        },
        initial: {
            opacity: 0,
        },
    };

    const dispatch = useAppDispatch();

    // Gestion de la création du boutton
    useEffect(() => {
        if (!button) {
            const button: ButtonType = {
                name,
                label,
                state: "active",
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

    // Gestion de la fin de l'animation quand le clique est relâché
    useEffect(() => {
        if (mouseEvents.mouseUp.active && !animationProgress && variant === "click") {
            setVariant("initial");
        }
        // eslint-disable-next-line
    }, [mouseEvents]);

    // Gestion de la fin du temps minimum de l'animation
    useEffect(() => {
        if (!animationProgress && !mouseEvents.mouseDown.active) {
            setVariant("initial");
        }
        // eslint-disable-next-line
    }, [animationProgress]);

    function startAnimation() {
        if (!animationProgress) {
            setVariant("click");
            setAnimationProgress(true);
            setTimeout(() => {
                setAnimationProgress(false);
            }, 100);
        }
    }

    if (button) {
        return (
            <button
                className="button"
                onMouseDown={startAnimation}
                onClick={() => {
                    if (button.state === "active") {
                        onClick();
                    }
                }}
            >
                <div className="wrapper">
                    <motion.div
                        className="animate"
                        animate={variant}
                        variants={animateVariants}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    />
                    <span className="label">{label}</span>
                </div>
            </button>
        );
    } else {
        return <div />;
    }
};

export default Button;
