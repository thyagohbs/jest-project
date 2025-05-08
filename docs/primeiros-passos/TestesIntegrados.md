# Como eu trabalho com Testes Integrados neste projeto

Vou explicar de forma detalhada e dar exemplos reais dos nossos componentes.

---

## 1. O que são testes integrados?

Testes integrados servem para garantir que diferentes partes do sistema funcionam corretamente **juntas**.  
No contexto do React, isso significa testar a interação entre dois ou mais componentes, hooks, contextos ou até integrações com APIs simuladas.

---

## 2. Passo a passo para criar testes integrados

### Passo 1: Escolho um fluxo ou integração para testar

Por exemplo, quero garantir que ao adicionar uma tarefa em um formulário, ela aparece na lista de tarefas.

### Passo 2: Crio o arquivo de teste

No mesmo diretório do componente principal, crio um arquivo como `ToDoApp.test.tsx`.

### Passo 3: Escrevo o teste integrando componentes

Uso o Jest e o React Testing Library para montar o componente principal e simular o fluxo completo, interagindo com vários componentes juntos.

---

## 3. Exemplos de testes integrados dos nossos componentes

### Exemplo 1: ToDoApp (integração entre ToDoForm e ToDoList)

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ToDoApp from "./ToDoApp";

it("deve adicionar e remover tarefas corretamente", () => {
  render(<ToDoApp />);
  // Busca o input pelo placeholder
  const input = screen.getByPlaceholderText("Digite uma tarefa");
  // Simula digitação de uma nova tarefa
  fireEvent.change(input, { target: { value: "Nova tarefa" } });
  // Simula clique no botão Adicionar
  fireEvent.click(screen.getByText("Adicionar"));
  // Verifica se a tarefa aparece na lista
  expect(screen.getByText("Nova tarefa")).toBeInTheDocument();

  // Simula clique no botão de remover da tarefa
  fireEvent.click(screen.getByLabelText("Remover Nova tarefa"));
  // Verifica se a tarefa foi removida da lista
  expect(screen.queryByText("Nova tarefa")).not.toBeInTheDocument();
});
```

**Explicação das funções utilizadas neste exemplo:**

- `render`: monta o componente `ToDoApp` na memória, incluindo seus filhos (`ToDoForm` e `ToDoList`).
- `screen.getByPlaceholderText`: busca o input pelo texto do placeholder.
- `fireEvent.change`: simula a digitação de uma tarefa no input.
- `fireEvent.click`: simula o clique no botão "Adicionar" e depois no botão de remover.
- `screen.getByText`: busca a tarefa pelo texto para verificar se ela foi adicionada.
- `screen.getByLabelText`: busca o botão de remover pelo atributo `aria-label`.
- `screen.queryByText`: busca a tarefa pelo texto, mas retorna `null` se não encontrar (usado para verificar se foi removida).
- `expect(...).toBeInTheDocument()`: verifica se o elemento está presente na tela.
- `expect(...).not.toBeInTheDocument()`: verifica se o elemento não está mais presente.

---

### Exemplo 2: BuscaComLoader (integração entre botão, loader e resultado)

```tsx
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import BuscaComLoader from "./BuscaComLoader";

it("deve exibir o Loader durante a busca e mostrar o resultado ao finalizar", async () => {
  jest.useFakeTimers(); // Simula o tempo para testar loaders

  render(<BuscaComLoader />);
  const botao = screen.getByText("Buscar Dados");

  fireEvent.click(botao); // Simula clique para iniciar a busca
  expect(screen.getByText("Buscando dados...")).toBeInTheDocument(); // Loader aparece

  // Avança o tempo simulado para finalizar o carregamento
  await act(async () => {
    jest.runAllTimers();
  });

  // Espera até que o resultado apareça na tela
  await waitFor(() =>
    expect(
      screen.getByText("Dados encontrados com sucesso!")
    ).toBeInTheDocument()
  );
  // Verifica se o Loader sumiu após o carregamento
  expect(screen.queryByText("Buscando dados...")).not.toBeInTheDocument();
});
```

**Explicação das funções utilizadas neste exemplo:**

- `jest.useFakeTimers()`: ativa timers simulados para controlar o tempo em testes assíncronos.
- `render`: monta o componente `BuscaComLoader` na memória.
- `screen.getByText`: busca elementos pelo texto (botão, loader, resultado).
- `fireEvent.click`: simula o clique no botão para iniciar a busca.
- `act`: garante que todas as atualizações do React relacionadas a ações assíncronas sejam processadas antes de continuar o teste.
- `jest.runAllTimers()`: avança todos os timers simulados, acelerando o tempo.
- `waitFor`: espera até que uma condição seja satisfeita na tela, útil para esperar por atualizações assíncronas.
- `expect(...).toBeInTheDocument()`: verifica se o elemento está presente na tela.
- `expect(...).not.toBeInTheDocument()`: verifica se o elemento não está mais presente.

---

## 4. Dicas de amigo para escrever bons testes integrados

- Sempre simulo o fluxo real do usuário, interagindo com vários componentes juntos.
- Uso nomes claros nos testes, dizendo o que espero do fluxo.
- Aproveito o poder do Jest e do React Testing Library para simular tempo, interações e verificar o resultado final.
- Se o teste falhar, leio a mensagem com calma e ajusto o código ou o teste.

---

## 5. Resumindo

Testes integrados me ajudam a garantir que as partes do meu projeto funcionam bem juntas, como o usuário realmente usaria.  
Eles são essenciais para evitar bugs em fluxos completos e me dão confiança para evoluir o sistema!
