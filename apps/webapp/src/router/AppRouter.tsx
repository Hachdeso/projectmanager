import React from "react";
import { useAppSelector } from "../app/hooks";
import IsAuthRouter from "./IsAuthRouter";
import IsNotAuthRouter from "./IsNotAuthRouter";

const AppRouter: React.FC = () => {
    const isAuth = useAppSelector((state) => state.user.isAuth);

    if (!isAuth) {
        return <IsNotAuthRouter />;
    }

    return <IsAuthRouter />;
};

export default AppRouter;
