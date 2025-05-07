"use client";
import React from "react";

interface CardProps {
    titulo: string;
    descricao: string;
    imagemUrl?: string;
    children?: React.ReactNode; // Permite inserir conteúdo extra no card
}

const Card: React.FC<CardProps> = ({ titulo, descricao, imagemUrl, children }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                maxWidth: "300px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                margin: "1rem",
            }}
            role="region"
            aria-label={`Card de ${titulo}`}
        >
            {imagemUrl && (
                <img
                    src={imagemUrl}
                    alt={titulo}
                    style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
                />
            )}
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            {children}
        </div>
    );
};

export default Card;