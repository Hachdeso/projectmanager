import { IconButton } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./topbar.scss";

interface TopBarProps {
    icon: any;
    title: string;
    to: string;
}

const TopBar: React.FC<TopBarProps> = ({ icon, title, to }) => {
    return (
        <div className="topbar">
            <Link to={to}>
                <IconButton aria-label="retour" size="small" style={{ color: "black" }}>
                    {icon}
                </IconButton>
            </Link>
            <h1 className="title">{title}</h1>
        </div>
    );
};

export default TopBar;
