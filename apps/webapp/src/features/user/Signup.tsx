import React from "react";
import TopBar from "../../components/topbar/TopBar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import "./signup.scss";
import { Button, TextField } from "@material-ui/core";

const Signup: React.FC = () => {
    return (
        <div className="signup">
            <TopBar icon={<ArrowBack />} title="Inscription" to="/login" />
            <div className="content">
                <TextField
                    required
                    className="textField"
                    id="signupEmail"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    required
                    type="password"
                    className="textField"
                    id="signupPassword"
                    label="Mot de passe"
                    variant="outlined"
                />
                <TextField
                    required
                    type="password"
                    className="textField"
                    id="signupConfirmPassword"
                    label="Confirmer le mot de passe"
                    variant="outlined"
                />

                <div className="buttons">
                    <Button className="button" id="loginButton" variant="contained" color="primary">
                        Inscription
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
