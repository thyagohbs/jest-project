# Guia de Primeiros Passos para Testes Automatizados com React, Next.js e Jest

Bem-vindo(a)! Este guia foi criado para ajudar quem está começando a escrever testes automatizados em projetos React com Next.js, usando Jest e Testing Library. Aqui você vai encontrar dicas, exemplos e explicações simples para dar seus primeiros passos com confiança!

---

## O que são testes automatizados?

Testes automatizados são códigos que verificam se outras partes do seu projeto estão funcionando como esperado. Eles ajudam a evitar erros e garantem que, ao fazer mudanças, nada importante quebre sem você perceber.

---

## Quando devo usar testes automatizados?

- **Durante o desenvolvimento:** Sempre que criar uma nova funcionalidade, escreva testes para garantir que ela funciona.
- **Ao corrigir bugs:** Crie um teste que reproduza o erro antes de corrigir, assim você garante que ele não volte.
- **Antes de refatorar:** Testes garantem que mudanças no código não quebrem o que já estava funcionando.

---

## Dicas para quem está começando

- Comece testando componentes e funções pequenas.
- Escreva testes simples, que sejam fáceis de entender.
- Dê nomes claros aos seus testes, explicando o que eles verificam.
- Não tenha medo de errar: testar é prática!

---

## Funções e recursos mais usados

### 1. `describe` e `it`

- `describe`: Agrupa testes relacionados.
- `it` ou `test`: Define um teste específico.

```js
describe("MeuComponente", () => {
  it("deve fazer algo", () => {
    // teste aqui
  });
});
```

### 2. `render`

- Usado para renderizar um componente React na memória.

```js
render(<MeuComponente />);
```

### 3. `screen`

- Permite buscar elementos na tela simulada.

```js
screen.getByText("Olá, mundo!");
```

### 4. `fireEvent`

- Simula ações do usuário, como cliques e digitação.

```js
fireEvent.click(screen.getByText("Botão"));
```

### 5. Matchers do Jest

- `toBeInTheDocument()`: Verifica se algo está na tela.
- `toHaveTextContent()`: Verifica o texto de um elemento.
- `toBeDisabled()`: Verifica se um botão está desabilitado.

---

## Exemplo prático

```js
import { render, screen, fireEvent } from "@testing-library/react";
import MeuBotao from "./MeuBotao";

describe("MeuBotao", () => {
  it("deve mostrar o texto inicial", () => {
    render(<MeuBotao />);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });

  it("deve mudar o texto ao clicar", () => {
    render(<MeuBotao />);
    fireEvent.click(screen.getByText("Clique aqui"));
    expect(screen.getByText("Clicado!")).toBeInTheDocument();
  });
});
```

---

## Resumindo

- Testes automatizados ajudam a manter seu projeto seguro e confiável.
- Escreva testes sempre que criar, corrigir ou mudar algo importante.
- Use as funções básicas (`describe`, `it`, `render`, `screen`, `fireEvent`) para começar.
- Pratique bastante! Com o tempo, escrever testes vai ficar natural.

Se tiver dúvidas, pergunte! Testar é um passo importante para se tornar um(a) desenvolvedor(a) completo(a).

---
