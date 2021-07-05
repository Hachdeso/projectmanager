import { LinearProgress } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../app/hooks";

const ProgressBar: React.FC = () => {
    const isFetching = useAppSelector((state) => state.progressbar.isFetching);

    if (isFetching) {
        return <LinearProgress style={{ position: "absolute", top: 0, width: "100%" }} />;
    }

    return null;
};

export default ProgressBar;
