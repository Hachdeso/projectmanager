import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../features/login/Login";
import Signup from "../features/signup/Signup";

const NoAuthRouter = () => (
    <Switch location={location as any} key={location.pathname}>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="*">
            <Redirect to="/login" />
        </Route>
    </Switch>
);

export default NoAuthRouter;
