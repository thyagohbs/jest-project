"use client";
import React from "react";

interface StepperProps {
    passos: string[];
    passoAtual: number;
}

const Stepper: React.FC<StepperProps> = ({ passos, passoAtual }) => (
    <div style={{ display: "flex", gap: "1em" }}>
        {passos.map((passo, idx) => (
            <div
                key={passo}
                style={{
                    padding: "0.5em 1em",
                    borderRadius: "16px",
                    background: idx === passoAtual ? "#228be6" : "#dee2e6",
                    color: idx === passoAtual ? "#fff" : "#222",
                    fontWeight: idx === passoAtual ? "bold" : "normal",
                }}
                aria-current={idx === passoAtual ? "step" : undefined}
            >
                {passo}
            </div>
        ))}
    </div>
);

export default Stepper;