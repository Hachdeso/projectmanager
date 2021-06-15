import "./progressBar.scss";
import { useAppSelector } from "../../app/hooks";
import ProgressBarSlider from "./ProgressBarSlider";
import { motion } from "framer-motion";

const ProgressBar: React.FC = () => {
    const isFetching = useAppSelector((state) => state.progressBar.isFetching);
    const variants = {
        hide: {
            height: 0,
            transition: {
                delay: 0.25,
                duration: 0.2,
            },
        },
        show: {
            height: 4,
            transition: {
                duration: 0.1,
            },
        },
    };

    return (
        <motion.div
            animate={isFetching ? "show" : "hide"}
            variants={variants}
            initial="hide"
            className="progressBar"
        >
            <ProgressBarSlider />
        </motion.div>
    );
};

export default ProgressBar;
