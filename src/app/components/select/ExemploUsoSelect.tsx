"use client";
import React, { useState } from "react";
import Select from "./Select";

const ExemploUsoSelect: React.FC = () => {
    const [fruta, setFruta] = useState("");
    const opcoes = ["Maçã", "Banana", "Laranja"];

    return (
        <div>
            <Select opcoes={opcoes} valor={fruta} onChange={setFruta} />
            {fruta && <p>Você selecionou: {fruta}</p>}
        </div>
    );
};

export default ExemploUsoSelect;