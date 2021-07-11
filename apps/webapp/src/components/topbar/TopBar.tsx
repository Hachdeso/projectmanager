import { IconButton } from "@material-ui/core";
import React from "react";
import "./topbar.scss";

interface TopBarProps {
    icon: any;
    title: string;
    onClick: any;
}

const TopBar: React.FC<TopBarProps> = ({ icon, title, onClick }) => {
    return (
        <div className="topbar">
            <IconButton
                aria-label="retour"
                size="small"
                style={{ color: "black" }}
                onClick={onClick}
            >
                {icon}
            </IconButton>
            <h1 className="title">{title}</h1>
        </div>
    );
};

export default TopBar;
