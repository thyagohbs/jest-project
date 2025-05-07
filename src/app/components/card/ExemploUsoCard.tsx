"use client";
import React from "react";
import Card from "./Card";

const ExemploUsoCard: React.FC = () => (
    <div>
        <h3>Exemplo de Card</h3>
        <Card
            titulo="React"
            descricao="Uma biblioteca JavaScript para construir interfaces de usuário."
            imagemUrl="https://reactjs.org/logo-og.png"
        >
            <button>Saiba mais</button>
        </Card>
    </div>
);

export default ExemploUsoCard;