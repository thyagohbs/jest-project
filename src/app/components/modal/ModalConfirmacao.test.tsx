import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente na memória; screen: busca elementos na tela simulada; fireEvent: simula ações do usuário
import "@testing-library/jest-dom";
import ModalConfirmacao from "./ModalConfirmacao";

// Descreve o grupo de testes para o Modal de Confirmação
describe("ModalConfirmacao", () => {
    // Testa se o modal não aparece quando está fechado
    it("não deve renderizar nada quando aberto for false", () => {
        render(
            <ModalConfirmacao
                aberto={false}
                titulo="Atenção"
                mensagem="Deseja continuar?"
                onConfirmar={() => { }}
                onCancelar={() => { }}
            />
        );
        // screen.queryByText: busca um elemento pelo texto, retorna null se não encontrar
        expect(screen.queryByText("Atenção")).not.toBeInTheDocument(); // Verifica que o modal não está na tela
    });

    // Testa se o modal aparece com o título e mensagem corretos quando aberto
    it("deve exibir título, mensagem e botões quando aberto for true", () => {
        render(
            <ModalConfirmacao
                aberto={true}
                titulo="Atenção"
                mensagem="Deseja continuar?"
                onConfirmar={() => { }}
                onCancelar={() => { }}
            />
        );
        // screen.getByRole: busca um elemento pelo papel (role), lança erro se não encontrar
        expect(screen.getByRole("dialog")).toBeInTheDocument(); // Verifica se o modal está na tela
        expect(screen.getByText("Atenção")).toBeInTheDocument(); // Verifica o título
        expect(screen.getByText("Deseja continuar?")).toBeInTheDocument(); // Verifica a mensagem
        expect(screen.getByText("Confirmar")).toBeInTheDocument(); // Verifica o botão Confirmar
        expect(screen.getByText("Cancelar")).toBeInTheDocument(); // Verifica o botão Cancelar
    });

    // Testa se o callback de confirmação é chamado ao clicar em Confirmar
    it("deve chamar onConfirmar ao clicar em Confirmar", () => {
        const onConfirmarMock = jest.fn(); // Cria uma função simulada para verificar se foi chamada
        render(
            <ModalConfirmacao
                aberto={true}
                titulo="Atenção"
                mensagem="Deseja continuar?"
                onConfirmar={onConfirmarMock}
                onCancelar={() => { }}
            />
        );
        fireEvent.click(screen.getByText("Confirmar")); // Simula clique no botão Confirmar
        expect(onConfirmarMock).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada uma vez
    });

    // Testa se o callback de cancelamento é chamado ao clicar em Cancelar
    it("deve chamar onCancelar ao clicar em Cancelar", () => {
        const onCancelarMock = jest.fn(); // Cria uma função simulada para verificar se foi chamada
        render(
            <ModalConfirmacao
                aberto={true}
                titulo="Atenção"
                mensagem="Deseja continuar?"
                onConfirmar={() => { }}
                onCancelar={onCancelarMock}
            />
        );
        fireEvent.click(screen.getByText("Cancelar")); // Simula clique no botão Cancelar
        expect(onCancelarMock).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada uma vez
    });
});

/*
Explicação das funções utilizadas:
- render: monta o componente na memória, simulando a tela do navegador.
- screen.getByText: busca um elemento pelo texto exato.
- screen.queryByText: busca um elemento pelo texto, retorna null se não encontrar.
- screen.getByRole: busca um elemento pelo papel (role), lança erro se não encontrar.
- fireEvent.click: simula o evento de clique do usuário em um botão.
- expect(...).toBeInTheDocument(): verifica se o elemento está presente na tela.
- expect(...).not.toBeInTheDocument(): verifica se o elemento não está presente na tela.
- expect(...).toHaveBeenCalledTimes(1): verifica se a função foi chamada uma vez.

Esses testes garantem que:
- O modal só aparece quando aberto.
- O título, mensagem e botões aparecem corretamente.
- Os callbacks são chamados ao clicar nos botões.
*/