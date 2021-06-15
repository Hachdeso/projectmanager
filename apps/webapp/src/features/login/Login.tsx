import Card from "../../components/card/Card";
import Button from "../../components/form/buttons/button/Button";
import TextButton from "../../components/form/buttons/textbutton/TextButton";
import { Link } from "react-router-dom";
import TextField from "../../components/form/textfields/TextField";
import "./login.scss";
import { AnimatePresence, motion } from "framer-motion";

const Login: React.FC = () => {
    return (
        <motion.div exit={{ scale: 0.8, transition: { duration: 0.5 } }} className="login content">
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
                    <Button name="loginButton" label="CONNEXION" onClick={() => {}} />
                </div>
            </Card>
        </motion.div>
    );
};

export default Login;
