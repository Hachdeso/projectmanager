import { AnimatePresence } from "framer-motion";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Login from "../features/login/Login";
import Signup from "../features/signup/Signup";
import PrivateRoute from "./PrivateRoute";

const AppRouter: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence initial={false}>
            <Switch location={location} key={location.pathname}>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/pog">
                    <Signup />
                </PrivateRoute>
                <Route path="*">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </AnimatePresence>
    );
};

export default AppRouter;
