import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../app/hooks";
import { useWindowSize } from "../../hooks/useWindowSize";

const ProgressBarSlider: React.FC = () => {
    const windowSize = useWindowSize();
    const isFetching = useAppSelector((state) => state.progressBar.isFetching);
    return (
        <AnimatePresence>
            {isFetching && (
                <motion.div
                    className="slider"
                    initial={{ width: 0 }}
                    animate={{ width: windowSize.width - 0.1 * windowSize.width }}
                    transition={{ type: "spring", duration: 5, bounce: 0 }}
                    exit={{ width: windowSize.width, transition: { duration: 0.5 } }}
                />
            )}
        </AnimatePresence>
    );
};

export default ProgressBarSlider;
