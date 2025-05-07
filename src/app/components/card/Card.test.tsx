import { render, screen } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import Card from "./Card";

// Grupo de testes para o componente Card
describe("Card", () => {
    // Testa se o título e a descrição aparecem no card
    it("deve exibir o título e a descrição", () => {
        render(<Card titulo="Título" descricao="Descrição do card" />);
        // screen.getByText: busca o elemento pelo texto exato
        expect(screen.getByText("Título")).toBeInTheDocument(); // Verifica se o título está visível
        expect(screen.getByText("Descrição do card")).toBeInTheDocument(); // Verifica se a descrição está visível
    });

    // Testa se a imagem aparece quando a URL é fornecida
    it("deve exibir a imagem se imagemUrl for fornecida", () => {
        render(
            <Card
                titulo="Com Imagem"
                descricao="Descrição"
                imagemUrl="https://exemplo.com/imagem.png"
            />
        );
        // screen.getByAltText: busca a imagem pelo atributo alt (que é igual ao título)
        expect(screen.getByAltText("Com Imagem")).toBeInTheDocument(); // Verifica se a imagem está visível
    });

    // Testa se o conteúdo extra (children) aparece dentro do card
    it("deve renderizar o conteúdo extra passado como children", () => {
        render(
            <Card titulo="Com Botão" descricao="Descrição">
                <button>Botão Extra</button>
            </Card>
        );
        // screen.getByText: busca o botão extra pelo texto
        expect(screen.getByText("Botão Extra")).toBeInTheDocument(); // Verifica se o botão extra está visível
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- screen.getByAltText: busca uma imagem pelo atributo alt.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.

Esses testes garantem que:
- O título e a descrição aparecem no card.
- A imagem aparece se a URL for fornecida.
- Qualquer conteúdo extra passado como children é exibido dentro do card.
*/