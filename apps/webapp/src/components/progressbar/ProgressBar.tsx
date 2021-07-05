import { LinearProgress } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../app/hooks";

const ProgressBar: React.FC = () => {
    const isFetching = useAppSelector((state) => state.progressbar.isFetching);

    if (isFetching) {
        return <LinearProgress />;
    }

    return null;
};

export default ProgressBar;
