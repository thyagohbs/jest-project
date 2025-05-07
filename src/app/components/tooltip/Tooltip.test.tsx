import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada; fireEvent: simula ações do usuário
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import Tooltip from "./Tooltip";

// Testes para o componente Tooltip
describe("Tooltip", () => {
    // Testa se o tooltip não aparece inicialmente
    it("não deve exibir o tooltip inicialmente", () => {
        render(
            <Tooltip texto="Dica!">
                <button>Botão</button>
            </Tooltip>
        );
        // screen.queryByRole: busca um elemento pelo papel (role), retorna null se não encontrar
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument(); // Verifica que o tooltip não está na tela
    });

    // Testa se o tooltip aparece ao passar o mouse
    it("deve exibir o tooltip ao passar o mouse", () => {
        render(
            <Tooltip texto="Dica!">
                <button>Botão</button>
            </Tooltip>
        );
        const botao = screen.getByText("Botão"); // Busca o botão pelo texto
        fireEvent.mouseEnter(botao); // Simula mouse sobre o botão
        expect(screen.getByRole("tooltip")).toBeInTheDocument(); // Verifica que o tooltip aparece
        expect(screen.getByText("Dica!")).toBeInTheDocument(); // Verifica o texto do tooltip
        fireEvent.mouseLeave(botao); // Simula mouse saindo do botão
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument(); // Verifica que o tooltip some
    });
});

/*
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- screen.getByRole: busca um elemento pelo papel (role), lança erro se não encontrar.
- screen.queryByRole: busca um elemento pelo papel (role), retorna null se não encontrar.
- fireEvent.mouseEnter: simula o evento de passar o mouse sobre um elemento.
- fireEvent.mouseLeave: simula o evento de tirar o mouse de um elemento.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).not.toBeInTheDocument(): verifica se o elemento não está presente na tela.

Esses testes garantem que:
- O tooltip não aparece inicialmente.
- O tooltip aparece ao passar o mouse e desaparece ao sair.
*/

