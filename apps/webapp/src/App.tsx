import { LinearProgress } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ProgressBar from "./components/progressbar/ProgressBar";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ProgressBar />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
