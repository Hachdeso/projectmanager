import React from "react";
import TopBar from "../../components/topbar/TopBar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import "./signup.scss";
import { useAppDispatch } from "../../app/hooks";
import { setIsFetching } from "../../components/progressbar/progressbar.slice";
import FetchButton from "../../form/buttons/FetchButton";
import AppTextField from "../../form/textfield/AppTextField";
import { validateForm } from "../../form/form.services";
import { getTextfieldByName } from "../../form/textfield/textfield.services";
import axios from "axios";
import { setTextfieldErrorText } from "../../form/textfield/textfield.slice";

const Signup: React.FC = () => {
    const dispatch = useAppDispatch();

    async function signup() {
        if (!validateForm("signup")) return;

        const email = getTextfieldByName("signupEmail")?.value;
        const password = getTextfieldByName("signupPassword")?.value;

        if (!email || !password) return;

        dispatch(setIsFetching(true));

        try {
            const response = await axios.post("http://localhost:8080/api/users/", {
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            const data = error.response.data;
            if (data.errno === 1062) {
                dispatch(
                    setTextfieldErrorText({
                        name: "signupEmail",
                        errorText: "Adresse email déjà utilisée",
                    })
                );
            }
        }

        dispatch(setIsFetching(false));
    }

    return (
        <div className="signup">
            <TopBar icon={<ArrowBack />} title="Inscription" to="/login" />
            <div className="content">
                <AppTextField
                    label="Email"
                    name="signupEmail"
                    form="signup"
                    constraints={{ required: true, email: true }}
                />
                <AppTextField
                    label="Mot de passe"
                    name="signupPassword"
                    form="signup"
                    type="password"
                    constraints={{
                        required: true,
                        minLength: {
                            value: 8,
                            errorText: "8 caractères minimum",
                        },
                        identical: {
                            to: "signupConfirmPassword",
                            errorText: "Les mots de passes doivent être identiques",
                        },
                    }}
                />
                <AppTextField
                    label="Confirmer le mot de passe"
                    name="signupConfirmPassword"
                    form="signup"
                    type="password"
                    constraints={{
                        required: true,
                        identical: {
                            to: "signupPassword",
                            errorText: "Les mots de passes doivent être identiques",
                        },
                    }}
                />

                <div className="buttons">
                    <FetchButton
                        label="inscription"
                        name="loginButton"
                        variant="contained"
                        onClick={() => signup()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
