import { setRedirect } from "../../components/redirect/redirect.services";
import TopBar from "../../components/topbar/TopBar";
import ReturnIcon from "../../icons/ReturnIcon";
import { motion } from "framer-motion";
import "./signup.scss";
import { store } from "../../app/store";
import TextField from "../../components/form/textfields/TextField";
import Button from "../../components/form/buttons/button/Button";
import { validateForm } from "../../components/form/form.services";

const Signup: React.FC = () => {
    function onButtonClick() {
        validateForm("signup");
    }
    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 0.2 } }}
            transition={{ bounce: 0, duration: 0.4 }}
            className="signup content"
        >
            <TopBar
                title="Inscription"
                icon={<ReturnIcon clickable={true} onClick={() => setRedirect("/login")} />}
            />

            <TextField
                name="signupEmail"
                label="Email"
                form="signup"
                constraints={{ required: true, email: true }}
            />

            <TextField
                type="password"
                name="signupPassword"
                label="Mot de passe"
                form="signup"
                constraints={{
                    required: true,
                    identical: {
                        to: "signupConfirmPassword",
                        msg: "Les mots de passes doivent être identiques",
                    },
                }}
            />
            <TextField
                type="password"
                name="signupConfirmPassword"
                label="Confirmer le mot de passe"
                form="signup"
                constraints={{
                    required: true,
                    identical: {
                        to: "signupPassword",
                        msg: "Les mots de passes doivent être identiques",
                    },
                }}
            />

            <div className="buttonWrapper">
                <Button name="signupButton" label="INSCRIPTION" onClick={onButtonClick} />
            </div>
        </motion.div>
    );
};

export default Signup;
