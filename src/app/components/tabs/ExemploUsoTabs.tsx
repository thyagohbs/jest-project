"use client";
import React from "react";
import Tabs from "./Tabs";

const ExemploUsoTabs: React.FC = () => {
    const abas = [
        { label: "Home", conteudo: <p>Bem-vindo à Home!</p> },
        { label: "Perfil", conteudo: <p>Este é o seu perfil.</p> },
        { label: "Configurações", conteudo: <p>Ajuste suas preferências aqui.</p> },
    ];

    return (
        <div>
            <h3>Exemplo de Tabs</h3>
            <Tabs tabs={abas} />
        </div>
    );
};

export default ExemploUsoTabs;