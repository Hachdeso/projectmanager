import { Button, TextField } from "@material-ui/core";
import React from "react";
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
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />

                <TextField
                    required
                    className="textField"
                    id="outlined-basic"
                    label="Mot de passe"
                    variant="outlined"
                />
                <div className="buttons">
                    <Button color="primary">Inscription</Button>
                    <Button className="button" id="loginButton" variant="contained" color="primary">
                        Connexion
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
