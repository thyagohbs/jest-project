"use client";
import React from "react";

interface PaginacaoProps {
    paginaAtual: number;
    totalPaginas: number;
    onMudar: (novaPagina: number) => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({ paginaAtual, totalPaginas, onMudar }) => {
    // Cria um array com os números das páginas
    const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

    return (
        <nav aria-label="Paginação">
            <button
                onClick={() => onMudar(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                aria-label="Página anterior"
            >
                {"<"}
            </button>
            {paginas.map((num) => (
                <button
                    key={num}
                    onClick={() => onMudar(num)}
                    disabled={num === paginaAtual}
                    aria-current={num === paginaAtual ? "page" : undefined}
                >
                    {num}
                </button>
            ))}
            <button
                onClick={() => onMudar(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                aria-label="Próxima página"
            >
                {">"}
            </button>
        </nav>
    );
};

export default Paginacao;