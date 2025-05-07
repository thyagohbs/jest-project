import { render, screen } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument e toHaveStyle
import Badge from "./Badge";

// Testes para o componente Badge
describe("Badge", () => {
    // Testa se o valor aparece no badge
    it("deve exibir o valor passado", () => {
        render(<Badge valor={10} />);
        // screen.getByText: busca o elemento pelo texto exato
        expect(screen.getByText("10")).toBeInTheDocument(); // Verifica se o valor está visível
    });

    // Testa se o badge aceita valores string
    it("deve exibir valores do tipo string", () => {
        render(<Badge valor="Novo" />);
        expect(screen.getByText("Novo")).toBeInTheDocument(); // Verifica se o valor string está visível
    });

    // Testa se o badge tem o estilo de cor correto
    it("deve aplicar a cor personalizada", () => {
        render(<Badge valor={1} cor="#40c057" />);
        const badge = screen.getByText("1");
        // expect(...).toHaveStyle: verifica se o elemento possui o estilo CSS esperado
        expect(badge).toHaveStyle({ background: "#40c057" });
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).toHaveStyle(...): verifica se o elemento possui o estilo CSS esperado.

Esses testes garantem que:
- O valor aparece no badge (tanto número quanto string).
- O estilo de cor personalizado é aplicado corretamente.
*/