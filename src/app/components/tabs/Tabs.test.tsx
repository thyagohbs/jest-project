import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tabs from "./Tabs";

describe("Tabs", () => {
    // Testa se as abas aparecem e o conteúdo da primeira aba é exibido inicialmente
    it("deve exibir as abas e o conteúdo da aba ativa", () => {
        const abas = [
            { label: "Aba 1", conteudo: <p>Conteúdo 1</p> },
            { label: "Aba 2", conteudo: <p>Conteúdo 2</p> },
        ];
        render(<Tabs tabs={abas} />);
        // Verifica se os botões das abas aparecem
        expect(screen.getByText("Aba 1")).toBeInTheDocument();
        expect(screen.getByText("Aba 2")).toBeInTheDocument();
        // Verifica se o conteúdo da primeira aba aparece inicialmente
        expect(screen.getByText("Conteúdo 1")).toBeInTheDocument();
    });

    // Testa se ao clicar em outra aba, o conteúdo muda
    it("deve trocar o conteúdo ao clicar em outra aba", () => {
        const abas = [
            { label: "Aba 1", conteudo: <p>Conteúdo 1</p> },
            { label: "Aba 2", conteudo: <p>Conteúdo 2</p> },
        ];
        render(<Tabs tabs={abas} />);
        fireEvent.click(screen.getByText("Aba 2")); // Simula clique na segunda aba
        // Verifica se o conteúdo da segunda aba aparece
        expect(screen.getByText("Conteúdo 2")).toBeInTheDocument();
        // Verifica se o conteúdo da primeira aba não está mais visível
        expect(screen.queryByText("Conteúdo 1")).not.toBeInTheDocument();
    });
});