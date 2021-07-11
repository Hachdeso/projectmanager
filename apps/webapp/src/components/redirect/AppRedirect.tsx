import React from "react";
import { Redirect } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const AppRedirect: React.FC = () => {
    const redirect = useAppSelector((state) => state.redirect);

    if (!redirect) return null;

    return <Redirect to={redirect} />;
};

export default AppRedirect;
