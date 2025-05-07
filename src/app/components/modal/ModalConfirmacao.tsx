"use client";
import React from "react";

interface ModalConfirmacaoProps {
    aberto: boolean; // Controla se o modal está visível
    titulo: string;
    mensagem: string;
    onConfirmar: () => void;
    onCancelar: () => void;
}

const ModalConfirmacao: React.FC<ModalConfirmacaoProps> = ({
    aberto,
    titulo,
    mensagem,
    onConfirmar,
    onCancelar,
}) => {
    if (!aberto) return null; // Não renderiza nada se não estiver aberto

    return (
        <div role="dialog" aria-modal="true" className="modal">
            <h2>{titulo}</h2>
            <p>{mensagem}</p>
            <button onClick={onConfirmar}>Confirmar</button>
            <button onClick={onCancelar}>Cancelar</button>
        </div>
    );
};

export default ModalConfirmacao;