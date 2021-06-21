import React from "react";
import { Redirect, Route } from "react-router-dom";
import { JSDocPrivateTag } from "typescript";
import { useAppSelector } from "../app/hooks";

interface PrivateRouteProps {
    path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, children, ...rest }) => {
    const isAuth = useAppSelector((state) => state.user.isAuth);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
