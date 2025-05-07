import { render, screen } from "@testing-library/react"; // render: monta o componente; screen: busca elementos na tela simulada
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import Loader from "./Loader"; // Importa o componente Loader

// Descreve o grupo de testes para o Loader
describe("Loader", () => {
    // Testa se o loader aparece com o texto padrão
    it("deve exibir o texto padrão de carregamento", () => {
        render(<Loader />); // Monta o componente sem passar texto
        // screen.getByText: busca um elemento pelo texto exato
        expect(screen.getByText("Carregando...")).toBeInTheDocument(); // Verifica o texto padrão
        // screen.getByRole: busca um elemento pelo papel (role), lança erro se não encontrar
        expect(screen.getByRole("status")).toBeInTheDocument(); // Verifica se o status está presente
    });

    // Testa se o loader exibe um texto customizado
    it("deve exibir um texto customizado se passado por props", () => {
        render(<Loader texto="Buscando dados" />); // Monta o componente com texto customizado
        expect(screen.getByText("Buscando dados")).toBeInTheDocument(); // Verifica o texto customizado
    });

    // Testa se o ícone de carregamento está presente
    it("deve exibir o ícone de carregamento", () => {
        render(<Loader />);
        expect(screen.getByText("🔄")).toBeInTheDocument(); // Verifica o ícone
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- screen.getByRole: busca um elemento pelo papel (role), lança erro se não encontrar.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.

Esses testes garantem que:
- O texto padrão e o customizado aparecem corretamente.
- O status de carregamento está presente.
- O ícone de carregamento é exibido.
*/