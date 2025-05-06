"use client";
import React, { useState } from "react";
import ListaComRemocao from "./ListaComRemocao";

const ExemploUsoListaComRemocao: React.FC = () => {
    const [itens, setItens] = useState(["Maçã", "Banana", "Laranja"]);

    const removerItem = (indice: number) => {
        setItens((prev) => prev.filter((_, idx) => idx !== indice));
    };

    return (
        <div>
            <h3>Minha Lista de Frutas</h3>
            <ListaComRemocao itens={itens} onRemover={removerItem} />
        </div>
    );
};

export default ExemploUsoListaComRemocao;