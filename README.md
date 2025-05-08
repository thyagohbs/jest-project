# Ciclo de Desenvolvimento Utilizando Testes (TDD) 🚦

Bem-vindo(a)! Este projeto é focado em ensinar e praticar testes automatizados com React, Next.js e Jest.

---

## O que é TDD?

TDD significa **Test Driven Development** (Desenvolvimento Orientado a Testes).  
Eu sigo uma abordagem onde escrevo primeiro os testes, depois o código, e só então refatoro.  
O objetivo é garantir que meu código funcione corretamente desde o início e seja fácil de manter.

---

## Como funciona o ciclo TDD?

O ciclo TDD segue três passos principais, conhecidos como **Red ➔ Green ➔ Refactor**:

1. **Escrevo um teste (Red):**

   - Antes de criar a funcionalidade, escrevo um teste que descreve o que espero do código.
   - O teste vai falhar, pois o código ainda não existe.

2. **Implemento o código mínimo para passar no teste (Green):**

   - Escrevo o código mais simples possível para fazer o teste passar.
   - Não me preocupo com organização ou performance agora.

3. **Refatoro o código (Refactor):**
   - Agora que o teste está passando, melhoro o código.
   - Organizo, removo duplicações, torno o código mais limpo.
   - Os testes devem continuar passando após a refatoração.

Repito esse ciclo para cada nova funcionalidade!

---

## Por que uso TDD?

- **Menos bugs:** Penso nos requisitos antes de programar.
- **Mais confiança:** Mudanças futuras são mais seguras, pois os testes avisam se algo quebrou.
- **Código mais limpo:** Refatorar fica mais fácil e seguro.
- **Documentação viva:** Os testes mostram como o código deve funcionar.

---

## Sobre os testes realizados neste projeto

Neste projeto, eu aplico dois tipos principais de testes automatizados:

### Testes Unitários

Eu escrevo testes unitários para garantir que cada componente, função ou módulo funcione corretamente de forma isolada.  
Esses testes verificam, por exemplo, se um botão renderiza corretamente, se um input valida o valor, ou se um componente exibe a mensagem esperada.

**Componentes com testes unitários:**

- Saudacao ([Saudacao.test.tsx](src/app/components/simples/Saudacao.test.tsx))
- Contador ([Contador.test.tsx](src/app/components/simples/Contador.test.tsx))
- Botao ([Botao.test.tsx](src/app/components/botao/Botao.test.tsx))
- Loader ([Loader.test.tsx](src/app/components/carregamento/Loader.test.tsx))
- Badge ([Badge.test.tsx](src/app/components/badge/Badge.test.tsx))
- Card ([Card.test.tsx](src/app/components/card/Card.test.tsx))
- Stepper ([Stepper.test.tsx](src/app/components/stepper/Stepper.test.tsx))
- Tooltip ([Tooltip.test.tsx](src/app/components/tooltip/Tooltip.test.tsx))
- Select ([Select.test.tsx](src/app/components/select/Select.test.tsx))
- InputEmailValidacao ([InputEmailValidacao.test.tsx](src/app/components/input/InputEmailValidacao.test.tsx))
- ListaComRemocao ([ListaComRemocao.test.tsx](src/app/components/lista/ListaComRemocao.test.tsx))
- Alerta ([Alerta.test.tsx](src/app/components/alerta/Alerta.test.tsx))
- ModalConfirmacao ([ModalConfirmacao.test.tsx](src/app/components/modal/ModalConfirmacao.test.tsx))
- Tabs ([Tabs.test.tsx](src/app/components/tabs/Tabs.test.tsx))
- Paginacao ([Paginacao.test.tsx](src/app/components/paginacao/Paginacao.test.tsx))

Nesses testes, eu foco em cada componente de forma isolada, simulando interações e verificando o resultado esperado.

---

### Testes Integrados

Também realizo testes integrados, onde verifico se diferentes componentes funcionam corretamente juntos.  
Por exemplo, testo se um formulário envia dados corretamente e se a interação entre componentes pai e filho ocorre como esperado.

**Componentes com testes integrados:**

- ToDoApp ([ToDoApp.test.tsx](src/app/components/complexos/ToDoApp.test.tsx)):  
  Eu testo a integração entre o formulário de tarefas (`ToDoForm`) e a lista de tarefas (`ToDoList`), simulando o fluxo completo de adicionar e exibir tarefas.
- BuscaComLoader ([BuscaComLoader.test.tsx](src/app/components/carregamento/BuscaComLoader.test.tsx)):  
  Eu simulo o fluxo de busca, verificando o loader, o botão e o resultado final, integrando estados e componentes.

---

## Dicas para quem está começando

- Começo com testes simples e funcionalidades pequenas.
- Uso nomes claros nos testes, explicando o comportamento esperado.
- Não tenho medo de errar: TDD é prática!

---

## 📚 Documentação e Guias

- [Guia de Primeiros Passos para Testes Automatizados](docs/primeiros-passos/PrimeirosPassos.md)
- [Guia de Testes Unitários](docs/primeiros-passos/TesteUnitarios.md)
- [Guia de Testes Integrados](docs/primeiros-passos/TestesIntegrados.md)
- [Erros comuns e soluções em componentes](docs/errors/ComponentsErrorsResolvidos.md)

Explore os arquivos acima para aprender desde o básico até técnicas avançadas e resolução de problemas comuns!

---

**TDD é como construir uma ponte com redes de proteção: posso avançar com segurança, sabendo que serei avisado se algo der errado!**
