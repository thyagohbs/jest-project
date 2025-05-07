import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada; fireEvent: simula ações do usuário
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

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- screen.getByLabelText: busca um elemento pelo texto do label ou atributo aria-label.
- fireEvent.click: simula o evento de clique do usuário em um botão.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).toHaveBeenCalledWith(...): verifica se a função foi chamada com o valor esperado.

Esses testes garantem que:
- Todos os itens aparecem na lista.
- Ao clicar em "Remover", a função de remoção é chamada com o índice correto do item.
*/