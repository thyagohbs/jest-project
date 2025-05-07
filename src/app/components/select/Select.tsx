"use client";
import React from "react";

interface SelectProps {
    opcoes: string[];
    valor: string;
    onChange: (novoValor: string) => void;
}

const Select: React.FC<SelectProps> = ({ opcoes, valor, onChange }) => {
    return (
        <select
            value={valor}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Selecione uma opção"
        >
            <option value="">Selecione...</option>
            {opcoes.map((opcao) => (
                <option key={opcao} value={opcao}>
                    {opcao}
                </option>
            ))}
        </select>
    );
};

export default Select;