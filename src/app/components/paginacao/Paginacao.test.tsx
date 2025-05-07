import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada; fireEvent: simula ações do usuário
import "@testing-library/jest-dom";
import Paginacao from "./Paginacao";

// Grupo de testes para o componente de Paginação
describe("Paginacao", () => {
    // Testa se todos os botões de páginas aparecem corretamente
    it("deve exibir os botões de todas as páginas", () => {
        render(<Paginacao paginaAtual={1} totalPaginas={3} onMudar={() => { }} />);
        // Verifica se os botões das páginas 1, 2 e 3 aparecem na tela
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
    });

    // Testa se o botão da página atual está desabilitado (não pode clicar na página atual)
    it("deve desabilitar o botão da página atual", () => {
        render(<Paginacao paginaAtual={2} totalPaginas={3} onMudar={() => { }} />);
        // O botão da página 2 deve estar desabilitado
        expect(screen.getByText("2")).toBeDisabled();
    });

    // Testa se os botões de navegação anterior e próxima funcionam corretamente
    it("deve chamar onMudar ao clicar nos botões de navegação", () => {
        const onMudarMock = jest.fn(); // Cria uma função simulada para verificar as chamadas
        render(<Paginacao paginaAtual={2} totalPaginas={3} onMudar={onMudarMock} />);
        // Simula clique no botão de página anterior ("<")
        fireEvent.click(screen.getByLabelText("Página anterior"));
        // Espera que a função tenha sido chamada com o número da página anterior (1)
        expect(onMudarMock).toHaveBeenCalledWith(1);
        // Simula clique no botão de próxima página (">")
        fireEvent.click(screen.getByLabelText("Próxima página"));
        // Espera que a função tenha sido chamada com o número da próxima página (3)
        expect(onMudarMock).toHaveBeenCalledWith(3);
    });

    // Testa se clicar em um número de página chama onMudar com o número correto
    it("deve chamar onMudar ao clicar em um número de página", () => {
        const onMudarMock = jest.fn();
        render(<Paginacao paginaAtual={1} totalPaginas={3} onMudar={onMudarMock} />);
        // Simula clique no botão da página 3
        fireEvent.click(screen.getByText("3"));
        // Espera que a função tenha sido chamada com o número 3
        expect(onMudarMock).toHaveBeenCalledWith(3);
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- screen.getByLabelText: busca um elemento pelo texto do label ou atributo aria-label.
- fireEvent.click: simula o evento de clique do usuário em um botão.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).toBeDisabled(): verifica se o botão está desabilitado.
- expect(...).toHaveBeenCalledWith(...): verifica se a função foi chamada com o valor esperado.

Esses testes garantem que:
- Todos os botões de página aparecem.
- O botão da página atual está desabilitado.
- Os botões de navegação anterior/próxima funcionam corretamente.
- Clicar em um número de página chama a função correta.
*/