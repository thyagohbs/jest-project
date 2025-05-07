"use client";
import React from "react";

interface BadgeProps {
    valor: number | string;
    cor?: string;
}

const Badge: React.FC<BadgeProps> = ({ valor, cor = "#fa5252" }) => (
    <span
        style={{
            background: cor,
            color: "#fff",
            borderRadius: "12px",
            padding: "0.2em 0.7em",
            fontSize: "0.9em",
            marginLeft: "0.5em",
            display: "inline-block",
            minWidth: "24px",
            textAlign: "center",
        }}
        aria-label={`Badge com valor ${valor}`}
    >
        {valor}
    </span>
);

export default Badge;