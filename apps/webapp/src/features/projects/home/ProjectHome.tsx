import React from "react";
import TopBar from "../../../components/topbar/TopBar";
import MenuIcon from "@material-ui/icons/Menu";
import { useAppDispatch } from "../../../app/hooks";
import { setDrawer } from "../../../components/drawer/drawer.slice";

const ProjectHome: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="projecthome">
            <TopBar title="Projets" icon={<MenuIcon />} onClick={() => dispatch(setDrawer(true))} />
        </div>
    );
};

export default ProjectHome;
