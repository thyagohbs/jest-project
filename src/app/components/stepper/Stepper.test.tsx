import { render, screen } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument, toHaveStyle, toHaveAttribute
import Stepper from "./Stepper";

// Testes para o componente Stepper
describe("Stepper", () => {
    // Testa se todos os passos aparecem
    it("deve exibir todos os passos", () => {
        const passos = ["A", "B", "C"];
        render(<Stepper passos={passos} passoAtual={0} />);
        // Para cada passo, verifica se ele está visível na tela
        passos.forEach((passo) => {
            expect(screen.getByText(passo)).toBeInTheDocument();
        });
    });

    // Testa se o passo atual está destacado
    it("deve destacar o passo atual", () => {
        const passos = ["A", "B", "C"];
        render(<Stepper passos={passos} passoAtual={1} />);
        // Busca o elemento do passo atual ("B")
        const passoAtual = screen.getByText("B");
        // Verifica se o passo atual está com o estilo de destaque
        expect(passoAtual).toHaveStyle({ background: "#228be6", color: "#fff" });
        // Verifica se o atributo de acessibilidade está correto
        expect(passoAtual).toHaveAttribute("aria-current", "step");
    });
});

/*
- render: monta o componente na memória, simulando a tela do navegador.
- screen: permite buscar elementos na tela simulada, como textos dos passos.
- expect(...).toBeInTheDocument(): garante que o passo está visível.
- expect(...).toHaveStyle(...): garante que o passo atual está visualmente destacado.
- expect(...).toHaveAttribute(...): garante acessibilidade, indicando qual passo está ativo.

Esses testes garantem que:
- Todos os passos aparecem na tela.
- O passo atual está destacado visualmente e semanticamente.
*/