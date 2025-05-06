import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListaComRemocao from "./ListaComRemocao";

describe("ListaComRemocao", () => {
    // Testa se todos os itens aparecem na lista
    it("deve exibir todos os itens recebidos", () => {
        const itens = ["Item 1", "Item 2", "Item 3"];
        render(<ListaComRemocao itens={itens} onRemover={() => { }} />);
        // Para cada item, verifica se ele está visível na tela
        itens.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    // Testa se o callback de remoção é chamado com o índice correto
    it("deve chamar onRemover com o índice correto ao clicar em Remover", () => {
        const itens = ["A", "B", "C"];
        const onRemoverMock = jest.fn(); // Cria uma função simulada para saber se foi chamada
        render(<ListaComRemocao itens={itens} onRemover={onRemoverMock} />);
        // Simula o clique no botão "Remover" do item "B"
        fireEvent.click(screen.getByLabelText("Remover B"));
        // Verifica se a função foi chamada com o índice 1 (que é o índice do item "B")
        expect(onRemoverMock).toHaveBeenCalledWith(1);
    });
});