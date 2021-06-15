import "./App.scss";
import ProgressBar from "./components/progressbar/ProgressBar";
import AppRouter from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <Router>
            <>
                <div>pog</div>
            </>
            <div className="App">
                <ProgressBar />
                <AnimatePresence>
                    <AppRouter />
                </AnimatePresence>
            </div>
        </Router>
    );
}

export default App;
