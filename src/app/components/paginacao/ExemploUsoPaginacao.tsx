"use client";
import React, { useState } from "react";
import Paginacao from "./Paginacao";

const ExemploUsoPaginacao: React.FC = () => {
    const [pagina, setPagina] = useState(1);
    const totalPaginas = 5;

    return (
        <div>
            <h3>Exemplo de Paginação</h3>
            <p>Página atual: {pagina}</p>
            <Paginacao
                paginaAtual={pagina}
                totalPaginas={totalPaginas}
                onMudar={setPagina}
            />
        </div>
    );
};

export default ExemploUsoPaginacao;