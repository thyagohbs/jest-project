"use client";
import React, { useState } from "react";

const validarEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const InputEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setEmail(valor);
    if (valor && !validarEmail(valor)) {
      setErro("E-mail inválido");
    } else {
      setErro("");
    }
  };

  return (
    <div>
      <label htmlFor="email">E-mail:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Digite seu e-mail"
        aria-label="Campo de e-mail"
      />
      {erro && <span style={{ color: "red" }}>{erro}</span>}
    </div>
  );
};

export default InputEmail;