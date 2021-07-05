import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppTextField from "../../form/textfield/AppTextField";
import "./login.scss";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <h1>ProjectManager</h1>
            <div className="card">
                <h2>Connexion</h2>

                <AppTextField name="loginEmail" label="Email" />

                <TextField
                    required
                    type="password"
                    className="textField"
                    id="loginPassword"
                    label="Mot de passe"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
