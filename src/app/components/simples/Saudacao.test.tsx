import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Saudacao from "./Saudacao";

describe("Saudacao", () => {
    it("deve exibir a saudação com o nome correto", () => {
        render(<Saudacao nome="Maria" />);
        expect(screen.getByText("Olá, Maria!")).toBeInTheDocument();
    });

    it("deve exibir a saudação com outro nome", () => {
        render(<Saudacao nome="João" />);
        expect(screen.getByText("Olá, João!")).toBeInTheDocument();
    });
});