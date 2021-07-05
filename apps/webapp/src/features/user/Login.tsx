import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login: React.FC = () => {
    return (
        <div className="login">
            <h1>ProjectManager</h1>
            <div className="card">
                <h2>Connexion</h2>
                <TextField
                    required
                    className="textField"
                    id="loginEmail"
                    label="Email"
                    variant="outlined"
                />

                <TextField
                    required
                    className="textField"
                    id="loginPassword"
                    label="Mot de passe"
                    variant="outlined"
                />
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
