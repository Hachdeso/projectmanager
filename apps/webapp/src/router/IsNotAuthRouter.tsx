import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../features/user/Login";
import Signup from "../features/user/Signup";

const IsNotAuthRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="*">
                <Redirect to="/login" />
            </Route>
        </Switch>
    );
};

export default IsNotAuthRouter;
