import "./App.scss";
import ProgressBar from "./components/progressbar/ProgressBar";
import AppRouter from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Redirect from "./components/redirect/Redirect";
import { useGetUserQuery } from "./features/user/user.api";

function App() {
    const { data: user, isFetching, isLoading } = useGetUserQuery();

    return (
        <Router>
            <div className="App">
                <ProgressBar />
                <AppRouter />
                <Redirect />
            </div>
        </Router>
    );
}

export default App;
