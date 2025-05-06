"use client";
import React from "react";

interface BotaoProps {
    texto: string;
    onClick: () => void;
}

const Botao: React.FC<BotaoProps> = ({ texto, onClick }) => {
    return <button onClick={onClick}>{texto}</button>;
};

export default Botao;