# Erros encontrados nos testes e como foram solucionados

## 1. Erro: `toBeInTheDocument` não existe no tipo `JestMatchers<HTMLElement>`

**Motivo:**  
O matcher `toBeInTheDocument` faz parte do pacote `@testing-library/jest-dom`, que precisa ser importado para ser reconhecido nos testes.

**Solução:**  
Importar `@testing-library/jest-dom` no início dos arquivos de teste ou criar um arquivo global de setup:

```ts
// jest.setup.ts
import "@testing-library/jest-dom";
```

E adicionar no `jest.config.ts`:

```ts
setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
```

---

## 2. Erro: Jest: Failed to parse the TypeScript config file ... 'ts-node' is required

**Motivo:**  
Ao usar um arquivo de configuração do Jest em TypeScript (`jest.config.ts`), o pacote `ts-node` é necessário para interpretar o arquivo.

**Solução:**  
Instalar o `ts-node` como dependência de desenvolvimento:

```bash
npm install --save-dev ts-node
```

---

## 3. Erro: Test environment `jest-environment-jsdom` cannot be found

**Motivo:**  
A partir do Jest 28, o ambiente `jest-environment-jsdom` não é instalado por padrão.

**Solução:**  
Instalar o pacote correspondente:

```bash
npm install --save-dev jest-environment-jsdom
```

---

## 4. Erro: Module `<rootDir>/jest.setup.ts` in the setupFilesAfterEnv option was not found

**Motivo:**  
O Jest procura pelo arquivo `jest.setup.ts` na raiz do projeto, mas ele não existia.

**Solução:**  
Criar o arquivo `jest.setup.ts` na raiz do projeto com o seguinte conteúdo:

```ts
import "@testing-library/jest-dom";
```

---

Esses foram os principais erros encontrados e suas soluções durante a configuração dos testes no projeto.
