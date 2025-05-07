"use client";
import React, { useState } from "react";
import ModalConfirmacao from "./ModalConfirmacao";

const ExemploUsoModal: React.FC = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [mensagem, setMensagem] = useState("");

    // Função chamada ao confirmar
    const handleConfirmar = () => {
        setMensagem("Ação confirmada!");
        setModalAberto(false);
    };

    // Função chamada ao cancelar
    const handleCancelar = () => {
        setMensagem("Ação cancelada.");
        setModalAberto(false);
    };

    return (
        <div>
            <button onClick={() => setModalAberto(true)}>Abrir Modal</button>
            <ModalConfirmacao
                aberto={modalAberto}
                titulo="Confirmação"
                mensagem="Você tem certeza que deseja continuar?"
                onConfirmar={handleConfirmar}
                onCancelar={handleCancelar}
            />
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default ExemploUsoModal;