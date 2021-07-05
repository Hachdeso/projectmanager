import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppTextField from "../../form/textfield/AppTextField";
import "./login.scss";

const Login: React.FC = () => {
    return (
        <div className="login">
            <h1>ProjectManager</h1>
            <div className="card">
                <h2>Connexion</h2>

                <AppTextField required name="loginEmail" label="Email" />
                <AppTextField required name="loginPassword" label="Mot de passe" type="password" />
                <div className="buttons">
                    <Link to="/signup" style={{ color: "inherit", textDecoration: "inherit" }}>
                        <Button color="primary">Inscription</Button>
                    </Link>
                    <Button className="button" id="loginButton" variant="contained" color="primary">
                        Connexion
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
