import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProjectHome from "../features/projects/home/ProjectHome";

const IsAuthRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/projects" component={ProjectHome} />
            <Route path="*">
                <Redirect to="/projects" />
            </Route>
        </Switch>
    );
};

export default IsAuthRouter;
