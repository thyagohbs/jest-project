"use client";
import React, { useEffect } from "react";

interface AlertaProps {
    tipo: "sucesso" | "erro" | "aviso";
    mensagem: string;
    tempo?: number; // tempo em ms para desaparecer automaticamente
    onFechar?: () => void; // callback chamado ao fechar
}

const cores = {
    sucesso: "#d1e7dd",
    erro: "#f8d7da",
    aviso: "#fff3cd",
};

const Alerta: React.FC<AlertaProps> = ({ tipo, mensagem, tempo = 3000, onFechar }) => {
    useEffect(() => {
        if (onFechar) {
            const timer = setTimeout(onFechar, tempo);
            return () => clearTimeout(timer);
        }
    }, [onFechar, tempo]);

    return (
        <div
            role="alert"
            style={{
                background: cores[tipo],
                padding: "1rem",
                borderRadius: "4px",
                margin: "1rem 0",
                color: "#222",
            }}
        >
            <strong>{tipo.toUpperCase()}:</strong> {mensagem}
            {onFechar && (
                <button
                    onClick={onFechar}
                    style={{ marginLeft: "1rem" }}
                    aria-label="Fechar alerta"
                >
                    X
                </button>
            )}
        </div>
    );
};

export default Alerta;