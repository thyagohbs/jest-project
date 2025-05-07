import { render, screen, fireEvent, waitFor, act } from "@testing-library/react"; // render: monta o componente; screen: busca elementos; fireEvent: simula ações do usuário; waitFor: espera por mudanças assíncronas; act: garante atualização do React em ações assíncronas
import "@testing-library/jest-dom";
import BuscaComLoader from "./BuscaComLoader";

// Grupo de testes para o componente BuscaComLoader
describe("BuscaComLoader", () => {
    // Antes de cada teste, ativa os timers fake do Jest para simular o tempo
    beforeEach(() => {
        jest.useFakeTimers();
    });

    // Depois de cada teste, limpa timers pendentes e volta para timers reais
    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    // Testa se o botão aparece na tela inicialmente
    it("deve exibir o botão de busca inicialmente", () => {
        render(<BuscaComLoader />);
        // Verifica se o botão "Buscar Dados" está visível
        expect(screen.getByText("Buscar Dados")).toBeInTheDocument();
    });

    // Testa se o Loader aparece durante a busca e o resultado aparece ao finalizar
    it("deve exibir o Loader durante a busca e mostrar o resultado ao finalizar", async () => {
        render(<BuscaComLoader />);
        const botao = screen.getByText("Buscar Dados");

        fireEvent.click(botao); // Simula o clique no botão para iniciar a busca
        // Verifica se o Loader aparece com o texto "Buscando dados..."
        expect(screen.getByText("Buscando dados...")).toBeInTheDocument();

        // Avança o tempo simulado de 2 segundos para "acelerar" o carregamento
        await act(async () => {
            jest.runAllTimers();
        });

        // Espera até que o resultado apareça na tela
        await waitFor(() =>
            expect(screen.getByText("Dados encontrados com sucesso!")).toBeInTheDocument()
        );
        // Verifica se o Loader sumiu após o carregamento
        expect(screen.queryByText("Buscando dados...")).not.toBeInTheDocument();
    });

    // Testa se o botão fica desabilitado enquanto está carregando e volta ao normal depois
    it("deve desabilitar o botão enquanto está carregando", async () => {
        render(<BuscaComLoader />);
        const botao = screen.getByText("Buscar Dados");

        fireEvent.click(botao); // Simula o clique para iniciar a busca
        expect(botao).toBeDisabled(); // O botão deve ficar desabilitado durante o carregamento

        // Avança o tempo simulado de 2 segundos
        await act(async () => {
            jest.runAllTimers();
        });

        // Espera até que o resultado apareça na tela
        await waitFor(() =>
            expect(screen.getByText("Dados encontrados com sucesso!")).toBeInTheDocument()
        );
        // O botão deve voltar a ser habilitado após o carregamento
        expect(botao).not.toBeDisabled();
    });
});