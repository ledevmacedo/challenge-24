import React, { useState, useEffect } from "react";
import { Badge } from "../ui/badge";

interface badgeProps {
    label: any,
    onStateChange: any
}

export function BadgeCheck({ label, onStateChange }: any) {
    const [checkBox, setCheckBox] = useState(false);
    const [secondaryState, setSecondaryState] = useState("");

    useEffect(() => {
        setSecondaryState(checkBox ? label : "");

        onStateChange(label, checkBox);
    }, [checkBox, label, onStateChange]);

    const handleBadgeClick = () => {
        setCheckBox(!checkBox);
    };

    return (
        <>
            <Badge
                className="cursor-pointer select-none"
                variant={`${checkBox ? "secondary" : "outline"}`}
                onClick={handleBadgeClick}>
            </Badge>
        </>
    );
}