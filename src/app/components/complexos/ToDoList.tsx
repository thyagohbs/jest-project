"use client";
import React from "react";

interface ToDoListProps {
    tarefas: string[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tarefas }) => {
    return (
        <ul>
            {tarefas.map((tarefa, index) => (
                <li key={index}>{tarefa}</li>
            ))}
        </ul>
    );
};

export default ToDoList;