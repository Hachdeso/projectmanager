import { Button } from "@material-ui/core";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FetchButton from "../../form/buttons/FetchButton";
import { validateForm } from "../../form/form.services";
import AppTextField from "../../form/textfield/AppTextField";
import "./login.scss";
import { login } from "./user.services";

const Login: React.FC = () => {
    const [formValid, setFormValid] = useState(true);

    if (Cookies.get("token")) {
    }

    async function onclick() {
        if (!validateForm("login")) return;
        setFormValid(true);
        const loginResult = await login();
        if (!loginResult) {
            setFormValid(false);
        }
    }

    return (
        <div className="login">
            <h1>ProjectManager</h1>
            <div className="card">
                <h2>Connexion</h2>

                <div className="errorForm">
                    {!formValid && "Nom de compte ou mot de passe incorrect"}
                </div>

                <AppTextField
                    name="loginEmail"
                    form="login"
                    label="Email"
                    constraints={{ required: true }}
                />
                <AppTextField
                    form="login"
                    name="loginPassword"
                    label="Mot de passe"
                    type="password"
                    constraints={{ required: true }}
                />
                <div className="buttons">
                    <Link to="/signup" style={{ color: "inherit", textDecoration: "inherit" }}>
                        <Button color="primary">Inscription</Button>
                    </Link>
                    <FetchButton
                        label="Connexion"
                        name="loginButton"
                        onClick={onclick}
                        variant="contained"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
