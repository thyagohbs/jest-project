"use client";
import React from "react";

interface LoaderProps {
    texto?: string; // Texto opcional para exibir junto com o loader
}

const Loader: React.FC<LoaderProps> = ({ texto = "Carregando..." }) => {
    return (
        <div role="status" aria-live="polite">
            <span className="spinner" aria-hidden="true">🔄</span>
            <span>{texto}</span>
        </div>
    );
};

export default Loader;