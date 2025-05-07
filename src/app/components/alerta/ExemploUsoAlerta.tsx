"use client";
import React, { useState } from "react";
import Alerta from "./Alerta";

const ExemploUsoAlerta: React.FC = () => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div>
            <button onClick={() => setMostrar(true)}>Mostrar Alerta</button>
            {mostrar && (
                <Alerta
                    tipo="sucesso"
                    mensagem="Operação realizada com sucesso!"
                    onFechar={() => setMostrar(false)}
                />
            )}
        </div>
    );
};

export default ExemploUsoAlerta;