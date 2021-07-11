import React from "react";
import TopBar from "../../components/topbar/TopBar";
import MenuIcon from "@material-ui/icons/Menu";
import { setDrawer } from "../../components/drawer/drawer.slice";
import { useAppDispatch } from "../../app/hooks";

const Account: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="account">
            <TopBar title="Compte" icon={<MenuIcon />} onClick={() => dispatch(setDrawer(true))} />
        </div>
    );
};

export default Account;
