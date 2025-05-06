import { render, screen, fireEvent } from "@testing-library/react"; // Ferramentas para renderizar e interagir com o componente
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import Contador from "./Contador"; // Importa o componente que vamos testar

// Descreve o grupo de testes para o componente Contador
describe("Contador", () => {
    // Testa se o contador começa em 0
    it("deve iniciar com valor 0", () => {
        render(<Contador />); // Renderiza o componente na memória (não no navegador de verdade)
        // Verifica se o texto "Contador: 0" está presente na tela
        expect(screen.getByText("Contador: 0")).toBeInTheDocument();
    });

    // Testa se o contador incrementa ao clicar no botão +
    it("deve incrementar o valor ao clicar no botão +", () => {
        render(<Contador />); // Renderiza o componente novamente
        fireEvent.click(screen.getByText("+")); // Simula um clique no botão "+"
        // Verifica se o texto mudou para "Contador: 1"
        expect(screen.getByText("Contador: 1")).toBeInTheDocument();
    });

    // Testa se o contador decrementa ao clicar no botão -
    it("deve decrementar o valor ao clicar no botão -", () => {
        render(<Contador />); // Renderiza o componente novamente
        fireEvent.click(screen.getByText("-")); // Simula um clique no botão "-"
        // Verifica se o texto mudou para "Contador: -1"
        expect(screen.getByText("Contador: -1")).toBeInTheDocument();
    });
});