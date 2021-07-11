import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setDrawer } from "./drawer.slice";

interface ItemDrawerProps {
    to: string;
    icon: any;
    label: string;
}

const ItemDrawer: React.FC<ItemDrawerProps> = ({ to, icon, label }) => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    return (
        <Link to={to} onClick={() => dispatch(setDrawer(false))}>
            <ListItem button selected={location.pathname === to}>
                <ListItemIcon>
                    {React.cloneElement(icon, {
                        color: location.pathname === to ? "primary" : "inherit",
                    })}
                </ListItemIcon>
                <ListItemText primary={label} />
            </ListItem>
        </Link>
    );
};

export default ItemDrawer;
