import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente; screen: busca elementos; fireEvent: simula ações do usuário
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
        // O título não deve estar na tela
        expect(screen.queryByText("Atenção")).not.toBeInTheDocument();
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
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByText("Atenção")).toBeInTheDocument();
        expect(screen.getByText("Deseja continuar?")).toBeInTheDocument();
        expect(screen.getByText("Confirmar")).toBeInTheDocument();
        expect(screen.getByText("Cancelar")).toBeInTheDocument();
    });

    // Testa se o callback de confirmação é chamado ao clicar em Confirmar
    it("deve chamar onConfirmar ao clicar em Confirmar", () => {
        const onConfirmarMock = jest.fn();
        render(
            <ModalConfirmacao
                aberto={true}
                titulo="Atenção"
                mensagem="Deseja continuar?"
                onConfirmar={onConfirmarMock}
                onCancelar={() => { }}
            />
        );
        fireEvent.click(screen.getByText("Confirmar"));
        expect(onConfirmarMock).toHaveBeenCalledTimes(1);
    });

    // Testa se o callback de cancelamento é chamado ao clicar em Cancelar
    it("deve chamar onCancelar ao clicar em Cancelar", () => {
        const onCancelarMock = jest.fn();
        render(
            <ModalConfirmacao
                aberto={true}
                titulo="Atenção"
                mensagem="Deseja continuar?"
                onConfirmar={() => { }}
                onCancelar={onCancelarMock}
            />
        );
        fireEvent.click(screen.getByText("Cancelar"));
        expect(onCancelarMock).toHaveBeenCalledTimes(1);
    });
});