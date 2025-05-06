"use client";
import React from "react";

interface SaudacaoProps {
    nome: string;
}

const Saudacao: React.FC<SaudacaoProps> = ({ nome }) => {
    return <p>Olá, {nome}!</p>;
};

export default Saudacao;