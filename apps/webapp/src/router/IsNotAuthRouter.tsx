import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../features/user/Login";

const IsNotAuthRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="*">
                <Redirect to="/login" />
            </Route>
        </Switch>
    );
};

export default IsNotAuthRouter;
