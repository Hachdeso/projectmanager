import Card from "../../components/card/Card";
import Button from "../../components/form/buttons/button/Button";
import TextButton from "../../components/form/buttons/textbutton/TextButton";
import { Link } from "react-router-dom";
import TextField from "../../components/form/textfields/TextField";
import "./login.scss";
import { motion } from "framer-motion";
import { useLoginMutation } from "../user/user.api";
import { getTextFieldByName } from "../../components/form/textfields/textfields.services";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { editProgressBarIsFetching } from "../../components/progressbar/progressbar.slice";
import Cookies from "universal-cookie";

const Login: React.FC = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isLoading) {
            dispatch(editProgressBarIsFetching(true));
        } else {
            dispatch(editProgressBarIsFetching(false));
        }
    }, [isLoading]);

    async function handleClick() {
        const cookies = new Cookies();
        const tfEmail = getTextFieldByName("loginEmail");
        const tfPassword = getTextFieldByName("loginPassword");
        const email = tfEmail ? tfEmail.value : "";
        const password = tfPassword ? tfPassword.value : "";

        try {
            const user = await login({ email, password }).unwrap();
            cookies.set("token", user.token, { maxAge: 31540000 });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="login content"
        >
            <h1>ProjectManager</h1>
            <Card>
                <h2>Connexion</h2>
                <TextField
                    form="login"
                    name="loginEmail"
                    label="Email"
                    constraints={{ required: true }}
                />
                <TextField
                    type="password"
                    form="login"
                    name="loginPassword"
                    label="Mot de passe"
                    constraints={{ required: true }}
                />
                <div className="buttons">
                    <Link to="/signup">
                        <TextButton name="signupButton" label="INSCRIPTION" onClick={() => {}} />
                    </Link>
                    <Button name="loginButton" label="CONNEXION" onClick={handleClick} />
                </div>
            </Card>
        </motion.div>
    );
};

export default Login;
