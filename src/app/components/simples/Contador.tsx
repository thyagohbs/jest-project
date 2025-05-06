"use client"
import React, { useState } from "react";

// Componente simples de contador
const Contador: React.FC = () => {
    const [valor, setValor] = useState(0);

    const incrementar = () => setValor(valor + 1);
    const decrementar = () => setValor(valor - 1);

    return (
        <div>
            <h2>Contador: {valor}</h2>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>
    );
};

export default Contador;