import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada; fireEvent: simula ações do usuário
import "@testing-library/jest-dom"; // Adiciona matchers extras como toBeInTheDocument
import InputEmail from "./InputEmailValidacao";

describe("InputEmail", () => {
    // Testa se o campo de e-mail aparece na tela
    it("deve exibir o campo de e-mail", () => {
        render(<InputEmail />);
        // screen.getByLabelText: busca o input pelo atributo aria-label
        expect(screen.getByLabelText("Campo de e-mail")).toBeInTheDocument();
    });

    // Testa se mostra mensagem de erro ao digitar um e-mail inválido
    it("deve exibir mensagem de erro para e-mail inválido", () => {
        render(<InputEmail />);
        const input = screen.getByLabelText("Campo de e-mail");
        // fireEvent.change: simula a digitação de um valor inválido no input
        fireEvent.change(input, { target: { value: "email-invalido" } });
        // screen.getByText: busca a mensagem de erro pelo texto
        expect(screen.getByText("E-mail inválido")).toBeInTheDocument();
    });

    // Testa se a mensagem de erro some ao digitar um e-mail válido
    it("deve remover a mensagem de erro para e-mail válido", () => {
        render(<InputEmail />);
        const input = screen.getByLabelText("Campo de e-mail");
        fireEvent.change(input, { target: { value: "email-invalido" } }); // Primeiro digita inválido
        fireEvent.change(input, { target: { value: "teste@email.com" } }); // Depois digita válido
        // screen.queryByText: busca a mensagem de erro, retorna null se não encontrar
        expect(screen.queryByText("E-mail inválido")).not.toBeInTheDocument();
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByLabelText: busca um elemento pelo texto do label ou atributo aria-label.
- screen.getByText: busca um elemento pelo texto exato.
- screen.queryByText: busca um elemento pelo texto, retorna null se não encontrar.
- fireEvent.change: simula o evento de mudança de valor em um input.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).not.toBeInTheDocument(): verifica se o elemento não está presente na tela.

Esses testes garantem que:
- O campo de e-mail aparece na tela.
- A mensagem de erro aparece para e-mail inválido.
- A mensagem de erro some ao digitar um e-mail válido.
*/