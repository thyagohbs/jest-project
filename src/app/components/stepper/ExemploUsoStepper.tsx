"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";

const ExemploUsoStepper: React.FC = () => {
    const passos = ["Login", "Endereço", "Pagamento"];
    const [passoAtual, setPassoAtual] = useState(0);

    return (
        <div>
            <h3>Cadastro em etapas</h3>
            <Stepper passos={passos} passoAtual={passoAtual} />
            <button
                onClick={() => setPassoAtual((prev) => Math.max(prev - 1, 0))}
                disabled={passoAtual === 0}
            >
                Voltar
            </button>
            <button
                onClick={() => setPassoAtual((prev) => Math.min(prev + 1, passos.length - 1))}
                disabled={passoAtual === passos.length - 1}
            >
                Avançar
            </button>
        </div>
    );
};

export default ExemploUsoStepper;