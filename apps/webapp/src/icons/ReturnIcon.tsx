import React from "react";
import "./icons.scss";

interface ReturnIconProps {
    clickable?: boolean;
    onClick?: any;
}

const ReturnIcon: React.FC<ReturnIconProps> = ({ clickable, onClick }) => {
    return (
        <div className={`iconWrapper ${clickable && "iconWrapper_clickable"}`} onClick={onClick}>
            <svg
                className="icon"
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};

export default ReturnIcon;
