import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Account from "../features/account/Account";
import ArchivesHome from "../features/archives/home/ArchivesHome";
import ProjectHome from "../features/projects/home/ProjectHome";

const IsAuthRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/projects" component={ProjectHome} />
            <Route path="/archives" component={ArchivesHome} />
            <Route path="/account" component={Account} />
            <Route path="*">
                <Redirect to="/projects" />
            </Route>
        </Switch>
    );
};

export default IsAuthRouter;
