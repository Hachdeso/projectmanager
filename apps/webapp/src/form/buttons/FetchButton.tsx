import { Button } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../app/hooks";

interface FetchButtonProps {
    label: string;
    name: string;
    variant?: "contained";
    onClick: any;
}

const FetchButton: React.FC<FetchButtonProps> = ({ label, name, variant, onClick }) => {
    const isFetching = useAppSelector((state) => state.progressbar.isFetching);
    return (
        <Button
            className="button"
            disabled={isFetching}
            id={name}
            variant={variant}
            color="primary"
            onClick={() => onClick()}
        >
            {label}
        </Button>
    );
};

export default FetchButton;
