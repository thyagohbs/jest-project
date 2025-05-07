import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada; fireEvent: simula ações do usuário
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import Select from "./Select";

// Grupo de testes para o componente Select/Dropdown
describe("Select", () => {
    // Testa se todas as opções aparecem no select
    it("deve exibir todas as opções no dropdown", () => {
        render(<Select opcoes={["A", "B", "C"]} valor="" onChange={() => { }} />);
        // Verifica se cada opção está presente no select
        expect(screen.getByText("Selecione...")).toBeInTheDocument();
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("B")).toBeInTheDocument();
        expect(screen.getByText("C")).toBeInTheDocument();
    });

    // Testa se ao selecionar uma opção, a função onChange é chamada com o valor correto
    it("deve chamar onChange ao selecionar uma opção", () => {
        const onChangeMock = jest.fn(); // Cria uma função simulada para verificar se foi chamada corretamente
        render(<Select opcoes={["Maçã", "Banana"]} valor="" onChange={onChangeMock} />);
        // Simula a seleção da opção "Banana"
        fireEvent.change(screen.getByLabelText("Selecione uma opção"), {
            target: { value: "Banana" },
        });
        // Verifica se a função foi chamada com o valor "Banana"
        expect(onChangeMock).toHaveBeenCalledWith("Banana");
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- screen.getByLabelText: busca um elemento pelo texto do label ou atributo aria-label.
- fireEvent.change: simula o evento de mudança de valor em um input/select.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).toHaveBeenCalledWith(...): verifica se a função foi chamada com o valor esperado.

Esses testes garantem que:
- Todas as opções aparecem no dropdown.
- Selecionar uma opção chama a função correta com o valor selecionado.
*/