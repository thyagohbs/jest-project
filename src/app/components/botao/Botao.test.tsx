import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente; screen: busca elementos; fireEvent: simula ações do usuário
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import Botao from "./Botao"; // Importa o componente que vamos testar

// Descreve o grupo de testes para o componente Botao
describe("Botao", () => {
    // Testa se o botão exibe o texto correto
    it("deve exibir o texto passado por props", () => {
        render(<Botao texto="Clique aqui" onClick={() => { }} />); // Monta o botão com o texto desejado
        // Verifica se o texto está visível na tela
        expect(screen.getByText("Clique aqui")).toBeInTheDocument();
    });

    // Testa se a função onClick é chamada ao clicar no botão
    it("deve chamar a função onClick ao clicar", () => {
        const onClickMock = jest.fn(); // Cria uma função simulada para testar se foi chamada
        render(<Botao texto="Aperte" onClick={onClickMock} />); // Monta o botão com a função simulada
        fireEvent.click(screen.getByText("Aperte")); // Simula um clique no botão
        // Verifica se a função foi chamada exatamente uma vez
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});