"use client";
import React, { useState } from "react";
import Loader from "./Loader";

// Componente que simula uma busca de dados e exibe o Loader durante o carregamento
const BuscaComLoader: React.FC = () => {
    const [carregando, setCarregando] = useState(false); // Estado para controlar o carregamento
    const [resultado, setResultado] = useState<string | null>(null); // Estado para armazenar o resultado

    // Função que simula uma busca assíncrona
    const buscarDados = async () => {
        setCarregando(true); // Mostra o Loader
        setResultado(null); // Limpa o resultado anterior
        // Simula um tempo de espera (ex: chamada à API)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setResultado("Dados encontrados com sucesso!"); // Define o resultado
        setCarregando(false); // Esconde o Loader
    };

    return (
        <div>
            <button onClick={buscarDados} disabled={carregando}>
                Buscar Dados
            </button>
            {carregando && <Loader texto="Buscando dados..." />}
            {resultado && <p>{resultado}</p>}
        </div>
    );
};

export default BuscaComLoader;