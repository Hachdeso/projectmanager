import React from "react";
import TopBar from "../../../components/topbar/TopBar";
import MenuIcon from "@material-ui/icons/Menu";
import { useAppDispatch } from "../../../app/hooks";
import { setDrawer } from "../../../components/drawer/drawer.slice";

const ArchivesHome: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="archiveshome">
            <TopBar
                title="Archives"
                icon={<MenuIcon />}
                onClick={() => dispatch(setDrawer(true))}
            />
        </div>
    );
};

export default ArchivesHome;
