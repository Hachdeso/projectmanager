import { Button } from "@material-ui/core";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setIsFetching } from "../../components/progressbar/progressbar.slice";
import FetchButton from "../../form/buttons/FetchButton";
import { validateForm } from "../../form/form.services";
import AppTextField from "../../form/textfield/AppTextField";
import { getTextfieldByName } from "../../form/textfield/textfield.services";
import "./login.scss";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const [formValid, setFormValid] = useState(true);

    async function onclick() {
        if (!validateForm("login")) return;

        const email = getTextfieldByName("loginEmail")?.value;
        const password = getTextfieldByName("loginPassword")?.value;

        if (!email || !password) return;

        dispatch(setIsFetching(true));
        setFormValid(true);

        try {
            const response = await axios.post("http://localhost:8080/api/users/authenticate", {
                email,
                password,
            });
            console.log(response);
            dispatch(setIsFetching(false));
        } catch (error) {
            setFormValid(false);
            dispatch(setIsFetching(false));
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
