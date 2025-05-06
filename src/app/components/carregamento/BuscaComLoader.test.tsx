import { render, screen, fireEvent, waitFor } from "@testing-library/react"; // waitFor: espera por mudanças assíncronas na tela
import "@testing-library/jest-dom";
import BuscaComLoader from "./BuscaComLoader";

describe("BuscaComLoader", () => {
    // Testa se o botão aparece na tela inicialmente
    it("deve exibir o botão de busca inicialmente", () => {
        render(<BuscaComLoader />);
        expect(screen.getByText("Buscar Dados")).toBeInTheDocument();
    });

    // Testa se o Loader aparece ao clicar no botão e depois some mostrando o resultado
    it("deve exibir o Loader durante a busca e mostrar o resultado ao finalizar", async () => {
        render(<BuscaComLoader />);
        const botao = screen.getByText("Buscar Dados");

        fireEvent.click(botao); // Simula o clique para iniciar a busca

        // Verifica se o Loader aparece na tela
        expect(screen.getByText("Buscando dados...")).toBeInTheDocument();

        // Espera até que o resultado apareça na tela (após o tempo simulado)
        await waitFor(() =>
            expect(screen.getByText("Dados encontrados com sucesso!")).toBeInTheDocument()
        );

        // Verifica se o Loader sumiu após a busca
        expect(screen.queryByText("Buscando dados...")).not.toBeInTheDocument();
    });

    // Testa se o botão fica desabilitado durante o carregamento
    it("deve desabilitar o botão enquanto está carregando", async () => {
        render(<BuscaComLoader />);
        const botao = screen.getByText("Buscar Dados");

        fireEvent.click(botao);
        expect(botao).toBeDisabled(); // Botão deve estar desabilitado durante o carregamento

        await waitFor(() =>
            expect(screen.getByText("Dados encontrados com sucesso!")).toBeInTheDocument()
        );
        expect(botao).not.toBeDisabled(); // Botão volta a ser habilitado após o carregamento
    });
});