import { Drawer, List } from "@material-ui/core";
import { Archive, LibraryBooks, Settings } from "@material-ui/icons";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setDrawer } from "./drawer.slice";
import "./appdrawer.scss";
import DrawerItem from "./DrawerItem";

const AppDrawer: React.FC = () => {
    const isAuth = useAppSelector((state) => state.user.isAuth);
    const drawer = useAppSelector((state) => state.drawer);
    const dispatch = useAppDispatch();
    const email = useAppSelector((state) => state.user.userInformations?.email);

    if (!isAuth) return null;

    return (
        <Drawer
            className="appdrawer"
            anchor="left"
            open={drawer}
            onClose={() => dispatch(setDrawer(false))}
        >
            <div className="header">
                <h2>ProjectManager</h2>
                <span className="email">{email}</span>
            </div>
            <List>
                <DrawerItem label="Projets" icon={<LibraryBooks />} to="/projects" />
                <DrawerItem label="Archives" icon={<Archive />} to="/archives" />
                <DrawerItem label="Compte" icon={<Settings />} to="/account" />
            </List>
        </Drawer>
    );
};

export default AppDrawer;
