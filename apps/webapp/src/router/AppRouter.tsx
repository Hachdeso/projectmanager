import { useAppSelector } from "../app/hooks";
import AuthRouter from "./AuthRouter";
import NoAuthRouter from "./NoAuthRouter";

const AppRouter: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
        return <NoAuthRouter />;
    }

    return <AuthRouter />;
};

export default AppRouter;
