# Como eu trabalho com Testes Unitários neste projeto

Vou explicar de forma detalhada e dar exemplos reais dos nossos componentes.

---

## 1. O que são testes unitários?

Testes unitários servem para garantir que cada parte do meu código (um componente, uma função, etc.) funciona corretamente de forma isolada, sem depender de outras partes do sistema.

---

## 2. Passo a passo para criar testes unitários

### Passo 1: Crio o componente

Por exemplo, criei um componente simples chamado `Saudacao`:

```tsx
function Saudacao({ nome }: { nome: string }) {
  return <h1>Olá, {nome}!</h1>;
}
export default Saudacao;
```

### Passo 2: Crio o arquivo de teste

No mesmo diretório do componente, crio um arquivo chamado `Saudacao.test.tsx`.

### Passo 3: Escrevo o teste

Uso o Jest e o React Testing Library para montar o componente e verificar o resultado esperado.

```tsx
import { render, screen } from "@testing-library/react";
import Saudacao from "./Saudacao";

it("deve exibir a saudação com o nome", () => {
  render(<Saudacao nome="Maria" />);
  expect(screen.getByText("Olá, Maria!")).toBeInTheDocument();
});
```

**Explicação das funções utilizadas neste exemplo:**

- `render`: monta o componente `Saudacao` na memória, simulando como ele apareceria no navegador.
- `screen.getByText`: busca um elemento pelo texto exato ("Olá, Maria!").
- `expect(...).toBeInTheDocument()`: verifica se o elemento está presente na tela simulada.

---

## 3. Exemplos de testes unitários dos nossos componentes

### Exemplo 1: Loader

```tsx
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

it("deve exibir o texto padrão de carregamento", () => {
  render(<Loader />);
  expect(screen.getByText("Carregando...")).toBeInTheDocument();
});
```

**Explicação das funções utilizadas:**

- `render`: monta o componente `Loader` na memória.
- `screen.getByText`: busca o texto "Carregando..." na tela simulada.
- `expect(...).toBeInTheDocument()`: verifica se o texto está presente.

---

### Exemplo 2: Badge

```tsx
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

it("deve exibir o valor passado", () => {
  render(<Badge valor={10} />);
  expect(screen.getByText("10")).toBeInTheDocument();
});
```

**Explicação das funções utilizadas:**

- `render`: monta o componente `Badge` na memória.
- `screen.getByText`: busca o valor "10" na tela simulada.
- `expect(...).toBeInTheDocument()`: verifica se o valor está presente.

---

### Exemplo 3: InputEmailValidacao

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import InputEmail from "./InputEmailValidacao";

it("deve exibir mensagem de erro para e-mail inválido", () => {
  render(<InputEmail />);
  const input = screen.getByLabelText("Campo de e-mail");
  fireEvent.change(input, { target: { value: "email-invalido" } });
  expect(screen.getByText("E-mail inválido")).toBeInTheDocument();
});
```

**Explicação das funções utilizadas:**

- `render`: monta o componente `InputEmail` na memória.
- `screen.getByLabelText`: busca o input pelo atributo `aria-label` ("Campo de e-mail").
- `fireEvent.change`: simula a digitação de um valor inválido no input.
- `screen.getByText`: busca a mensagem de erro "E-mail inválido".
- `expect(...).toBeInTheDocument()`: verifica se a mensagem de erro está presente.

---

## 4. Explicação geral das funções

- **render:** Monta o componente na memória, simulando como ele apareceria no navegador. Assim, posso interagir e testar o componente sem precisar de um navegador real.
- **screen:** Fornece métodos para buscar elementos na tela simulada, como textos, botões, inputs, etc.
  - **screen.getByText:** Busca um elemento pelo texto exato. Se não encontrar, lança erro.
  - **screen.getByLabelText:** Busca um elemento pelo texto do label ou pelo atributo `aria-label`.
- **fireEvent:** Permite simular ações do usuário, como digitar em um input ou clicar em um botão.
  - **fireEvent.change:** Simula a digitação ou alteração de valor em um input.
- **expect:** Faz as verificações (asserções) para garantir que o comportamento está correto.
  - **toBeInTheDocument():** Verifica se o elemento está presente na tela.

Essas funções juntas me permitem montar o componente, simular interações e garantir que o resultado está correto!

---

## 5. Dicas de amigo para escrever bons testes unitários

- Sempre testo um comportamento por vez.
- Uso nomes claros nos testes, dizendo o que espero.
- Simulo interações reais do usuário (digitar, clicar, etc).
- Não dependo de outros componentes ou serviços externos.
- Se o teste falhar, leio a mensagem com calma e ajusto o código ou o teste.

---

## 6. Resumindo

Testes unitários me ajudam a garantir que cada parte do meu projeto funciona sozinha, do jeito certo.  
Eles são rápidos, fáceis de rodar e me dão confiança para evoluir o código sem medo!

---

## 7. Próximos Passos

[Próximo: Testes Integrados](./TestesIntegrados.md)
