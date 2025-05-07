import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente; screen: busca elementos; fireEvent: simula ações do usuário
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import ToDoForm from "./ToDoForm"; // Importa o componente que vamos testar

// Descreve o grupo de testes para o componente ToDoForm
describe("ToDoForm", () => {
    // Testa se o campo de input e o botão aparecem na tela
    it("deve exibir o campo de texto e o botão", () => {
        render(<ToDoForm onAdicionar={() => { }} />);
        expect(screen.getByPlaceholderText("Digite uma tarefa")).toBeInTheDocument(); // Verifica o input
        expect(screen.getByText("Adicionar")).toBeInTheDocument(); // Verifica o botão
    });

    // Testa se a função onAdicionar é chamada com o valor correto ao submeter o formulário
    it("deve chamar onAdicionar com a tarefa digitada", () => {
        const onAdicionarMock = jest.fn(); // Função simulada para verificar chamadas
        render(<ToDoForm onAdicionar={onAdicionarMock} />);
        const input = screen.getByPlaceholderText("Digite uma tarefa"); // Busca o input
        const botao = screen.getByText("Adicionar"); // Busca o botão

        fireEvent.change(input, { target: { value: "Nova tarefa" } }); // Simula digitação
        fireEvent.click(botao); // Simula clique no botão

        expect(onAdicionarMock).toHaveBeenCalledWith("Nova tarefa"); // Verifica se a função foi chamada com o texto correto
    });

    // Testa se o campo é limpo após adicionar uma tarefa
    it("deve limpar o campo após adicionar uma tarefa", () => {
        const onAdicionarMock = jest.fn();
        render(<ToDoForm onAdicionar={onAdicionarMock} />);
        const input = screen.getByPlaceholderText("Digite uma tarefa");
        const botao = screen.getByText("Adicionar");

        fireEvent.change(input, { target: { value: "Limpar campo" } });
        fireEvent.click(botao);

        expect(input).toHaveValue(""); // Verifica se o campo foi limpo
    });

    // Testa se não chama onAdicionar ao tentar adicionar tarefa vazia
    it("não deve chamar onAdicionar se o campo estiver vazio", () => {
        const onAdicionarMock = jest.fn();
        render(<ToDoForm onAdicionar={onAdicionarMock} />);
        const botao = screen.getByText("Adicionar");

        fireEvent.click(botao);

        expect(onAdicionarMock).not.toHaveBeenCalled(); // Não deve chamar a função
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByPlaceholderText: busca um elemento pelo texto do placeholder.
- screen.getByText: busca um elemento pelo texto exato.
- fireEvent.change: simula o evento de digitação no input.
- fireEvent.click: simula o evento de clique do usuário em um botão.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).toHaveBeenCalledWith(...): verifica se a função foi chamada com o valor esperado.
- expect(...).toHaveValue(...): verifica o valor atual do input.
- expect(...).not.toHaveBeenCalled(): verifica se a função não foi chamada.

Esses testes garantem que:
- O campo de texto e o botão aparecem na tela.
- A função de adicionar é chamada corretamente.
- O campo é limpo após adicionar.
- Não é possível adicionar tarefa vazia.
*/