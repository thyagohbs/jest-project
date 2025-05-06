"use client";
import React from "react";

interface ListaComRemocaoProps {
    itens: string[];
    onRemover: (indice: number) => void;
}

const ListaComRemocao: React.FC<ListaComRemocaoProps> = ({ itens, onRemover }) => {
    return (
        <ul>
            {itens.map((item, idx) => (
                <li key={idx}>
                    {item}
                    <button onClick={() => onRemover(idx)} aria-label={`Remover ${item}`}>
                        Remover
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ListaComRemocao;