import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Redirect as Redir } from "react-router-dom";

const Redirect: React.FC = () => {
    const path = useAppSelector((state) => state.redirect.path);

    if (!path) return null;

    return <Redir to={path} />;
};

export default Redirect;
