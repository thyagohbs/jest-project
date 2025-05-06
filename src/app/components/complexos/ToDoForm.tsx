"use client";
import React, { useState } from "react";

interface ToDoFormProps {
    onAdicionar: (tarefa: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onAdicionar }) => {
    const [tarefa, setTarefa] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evita recarregar a página
        if (tarefa.trim()) {
            onAdicionar(tarefa);
            setTarefa(""); // Limpa o campo após adicionar
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                aria-label="Campo de tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default ToDoForm;