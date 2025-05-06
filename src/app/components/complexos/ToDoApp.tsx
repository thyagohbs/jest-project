"use client";
import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

// Componente principal que une o formulário e a lista de tarefas
const ToDoApp: React.FC = () => {
    const [tarefas, setTarefas] = useState<string[]>([]); // Estado para armazenar as tarefas

    // Função para adicionar uma nova tarefa à lista
    const adicionarTarefa = (novaTarefa: string) => {
        setTarefas((tarefasAntigas) => [...tarefasAntigas, novaTarefa]);
    };

    return (
        <div>
            <h2>Mini-app de Tarefas</h2>
            <ToDoForm onAdicionar={adicionarTarefa} /> {/* Formulário para adicionar tarefas */}
            <ToDoList tarefas={tarefas} /> {/* Lista de tarefas */}
        </div>
    );
};

export default ToDoApp;