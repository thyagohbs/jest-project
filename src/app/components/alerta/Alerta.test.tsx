import { render, screen, fireEvent } from "@testing-library/react"; // render: monta o componente; screen: busca elementos; fireEvent: simula ações do usuário
import "@testing-library/jest-dom";
import Alerta from "./Alerta";

describe("Alerta", () => {
    // Testa se o alerta aparece com o tipo e mensagem corretos
    it("deve exibir o tipo e a mensagem corretamente", () => {
        render(<Alerta tipo="sucesso" mensagem="Operação realizada!" />);
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText(/SUCESSO:/)).toBeInTheDocument();
        expect(screen.getByText(/Operação realizada!/)).toBeInTheDocument();
    });

    // Testa se o botão de fechar aparece quando onFechar é passado
    it("deve exibir o botão de fechar se onFechar for fornecido", () => {
        render(<Alerta tipo="erro" mensagem="Algo deu errado!" onFechar={() => { }} />);
        expect(screen.getByRole("button", { name: /fechar alerta/i })).toBeInTheDocument();
    });

    // Testa se o callback onFechar é chamado ao clicar no botão de fechar
    it("deve chamar onFechar ao clicar no botão de fechar", () => {
        const onFecharMock = jest.fn();
        render(<Alerta tipo="aviso" mensagem="Atenção!" onFechar={onFecharMock} />);
        fireEvent.click(screen.getByRole("button", { name: /fechar alerta/i }));
        expect(onFecharMock).toHaveBeenCalledTimes(1);
    });

    // Testa se o alerta desaparece automaticamente após o tempo definido
    it("deve chamar onFechar automaticamente após o tempo", async () => {
        jest.useFakeTimers(); // Usa timers falsos para simular o tempo
        const onFecharMock = jest.fn();
        render(<Alerta tipo="sucesso" mensagem="Auto close!" tempo={1000} onFechar={onFecharMock} />);
        jest.advanceTimersByTime(1000); // Avança o tempo simulado
        expect(onFecharMock).toHaveBeenCalledTimes(1);
        jest.useRealTimers(); // Restaura os timers reais
    });
});