"use client";
import React from "react";
import Badge from "./Badge";

const ExemploUsoBadge: React.FC = () => (
    <div>
        <h3>
            Notificações
            <Badge valor={5} />
        </h3>
        <p>
            Mensagens novas
            <Badge valor="Novo" cor="#40c057" />
        </p>
    </div>
);

export default ExemploUsoBadge;