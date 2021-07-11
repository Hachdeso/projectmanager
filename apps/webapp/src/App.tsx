import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppDrawer from "./components/drawer/AppDrawer";
import ProgressBar from "./components/progressbar/ProgressBar";
import AppRedirect from "./components/redirect/AppRedirect";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppRedirect />
                <AppDrawer />
                <ProgressBar />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
