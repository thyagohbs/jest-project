import { render, screen } from "@testing-library/react"; // render: monta o componente na memória; screen: permite buscar elementos na tela simulada
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import ToDoList from "./ToDoList"; // Importa o componente que vamos testar

// Descreve o grupo de testes para o componente ToDoList
describe("ToDoList", () => {
    // Testa se todas as tarefas passadas por props aparecem na tela
    it("deve exibir todas as tarefas recebidas", () => {
        const tarefas = ["Estudar React", "Praticar testes", "Beber água"];
        render(<ToDoList tarefas={tarefas} />); // Monta o componente com as tarefas
        // Para cada tarefa, verifica se ela está visível na tela
        tarefas.forEach((tarefa) => {
            expect(screen.getByText(tarefa)).toBeInTheDocument();
        });
    });

    // Testa se a lista fica vazia quando não há tarefas
    it("deve exibir uma lista vazia se não houver tarefas", () => {
        render(<ToDoList tarefas={[]} />); // Monta o componente sem tarefas
        // Busca todos os itens de lista (li) e espera que não exista nenhum
        expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    });
});