"use client";
import React, { useState } from "react";

interface TooltipProps {
    texto: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ texto, children }) => {
    const [visivel, setVisivel] = useState(false);

    return (
        <span
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setVisivel(true)}
            onMouseLeave={() => setVisivel(false)}
        >
            {children}
            {visivel && (
                <span
                    role="tooltip"
                    style={{
                        position: "absolute",
                        bottom: "120%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#222",
                        color: "#fff",
                        padding: "0.4em 0.8em",
                        borderRadius: "4px",
                        fontSize: "0.9em",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                    }}
                >
                    {texto}
                </span>
            )}
        </span>
    );
};

export default Tooltip;