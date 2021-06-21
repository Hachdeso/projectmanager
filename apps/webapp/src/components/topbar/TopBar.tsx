import React, { ReactElement } from "react";
import "./topbar.scss";

interface TopBarProps {
    title: string;
    icon: ReactElement;
}

const TopBar: React.FC<TopBarProps> = ({ title, icon }) => {
    return (
        <div className="topbar">
            {icon}
            <h1>{title}</h1>
        </div>
    );
};

export default TopBar;
