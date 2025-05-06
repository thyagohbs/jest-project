import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada; fireEvent: simula ações do usuário
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import ToDoApp from "./ToDoApp"; // Importa o componente principal que será testado

// Descreve o grupo de testes para o mini-app de tarefas
describe("ToDoApp", () => {
    // Testa se o título e o formulário aparecem na tela
    it("deve exibir o título e o formulário", () => {
        render(<ToDoApp />); // Monta o componente na memória para testar
        // Verifica se o título está visível na tela
        expect(screen.getByText("Mini-app de Tarefas")).toBeInTheDocument();
        // Verifica se o campo de texto do formulário está visível
        expect(screen.getByPlaceholderText("Digite uma tarefa")).toBeInTheDocument();
        // Verifica se o botão de adicionar está visível
        expect(screen.getByText("Adicionar")).toBeInTheDocument();
    });

    // Testa se é possível adicionar uma tarefa e ela aparece na lista
    it("deve adicionar uma tarefa na lista ao submeter o formulário", () => {
        render(<ToDoApp />);
        const input = screen.getByPlaceholderText("Digite uma tarefa"); // Busca o campo de texto pelo placeholder
        const botao = screen.getByText("Adicionar"); // Busca o botão pelo texto

        fireEvent.change(input, { target: { value: "Estudar testes" } }); // Simula digitação no campo de texto
        fireEvent.click(botao); // Simula clique no botão

        // Verifica se a tarefa digitada aparece na lista
        expect(screen.getByText("Estudar testes")).toBeInTheDocument();
    });

    // Testa se é possível adicionar múltiplas tarefas
    it("deve adicionar múltiplas tarefas", () => {
        render(<ToDoApp />);
        const input = screen.getByPlaceholderText("Digite uma tarefa");
        const botao = screen.getByText("Adicionar");

        fireEvent.change(input, { target: { value: "Tarefa 1" } }); // Simula digitação da primeira tarefa
        fireEvent.click(botao); // Adiciona a primeira tarefa

        fireEvent.change(input, { target: { value: "Tarefa 2" } }); // Simula digitação da segunda tarefa
        fireEvent.click(botao); // Adiciona a segunda tarefa

        // Verifica se ambas as tarefas aparecem na lista
        expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
        expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
    });

    // Testa se não adiciona tarefa vazia
    it("não deve adicionar tarefa vazia", () => {
        render(<ToDoApp />);
        const botao = screen.getByText("Adicionar");
        fireEvent.click(botao); // Tenta adicionar sem digitar nada
        // Verifica se nenhum item de lista foi criado
        expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    });
});