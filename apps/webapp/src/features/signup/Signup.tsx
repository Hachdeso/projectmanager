import { AnimatePresence, motion } from "framer-motion";
import "./signup.scss";

const Signup: React.FC = () => {
    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 0.5 } }}
            transition={{ bounce: 0, duration: 0.5 }}
            className="signup content"
        >
            Signup
        </motion.div>
    );
};

export default Signup;
