"use client";
import React from "react";
import Tooltip from "./Tooltip";

const ExemploUsoTooltip: React.FC = () => (
    <div style={{ margin: "2em" }}>
        <Tooltip texto="Clique para saber mais!">
            <button>Passar o mouse aqui</button>
        </Tooltip>
    </div>
);

export default ExemploUsoTooltip;