"use client";
import React, { useState } from "react";
import InputEmail from "./InputEmailValidacao";

const ExemploUsoInputEmail: React.FC = () => {
    const [emailSalvo, setEmailSalvo] = useState<string | null>(null);

    const handleSalvar = () => {
        const input = document.getElementById("email") as HTMLInputElement;
        if (input && input.value) {
            setEmailSalvo(input.value);
        }
    };

    return (
        <div>
            <h3>Cadastro de E-mail</h3>
            <InputEmail />
            <button onClick={handleSalvar}>Salvar E-mail</button>
            {emailSalvo && (
                <p style={{ color: "green" }}>E-mail salvo: {emailSalvo}</p>
            )}
        </div>
    );
};

export default ExemploUsoInputEmail;