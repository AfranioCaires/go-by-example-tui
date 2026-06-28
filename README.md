# Go by Example CLI

Uma interface interativa de terminal (TUI) inspirada no site [Go by Example](https://gobyexample.com) para estudar a linguagem Go diretamente do seu console.

Este projeto utiliza **React** e **OpenTUI** para renderizar componentes de terminal, permitindo carregar e experimentar tópicos de programação em Go.

---

## Funcionalidades

- **Menu Interativo**: Navegue facilmente entre as lições disponíveis.
- **Visualização Lado a Lado**: Leia a explicação da lição (com suporte a markdown e notas) enquanto visualiza o código-fonte Go correspondente.
- **Execução em Tempo Real**: Rode o código da lição com o compilador local de Go e veja a saída em um painel dedicado de TUI.
- **Destaque de Sintaxe**: Realce de sintaxe robusto para código Go usando `tree-sitter`.
- **Cópia Rápida**: Copie o código de qualquer lição diretamente para sua área de transferência com um único botão.

---

## Pré-requisitos

Para rodar este projeto, você precisa ter instalado em sua máquina:

1. **[Bun](https://bun.sh)** (Runtime JavaScript rápido)
2. **[Go](https://go.dev)** (Necessário para compilar e executar os exemplos das lições)

---

## Como Iniciar

1. Instale as dependências do projeto:
   ```bash
   bun install
   ```

2. Execute o aplicativo em modo de desenvolvimento:
   ```bash
   bun dev
   ```

---

## Controles e Atalhos

Navegar e interagir no terminal é simples com os seguintes atalhos:

### Menu Principal
| Tecla | Ação |
| :--- | :--- |
| `↑` / `↓` | Navegar pela lista de tópicos |
| `Enter` | Abrir a lição selecionada |
| `q` | Fechar o aplicativo |

### Tela de Lição
| Tecla | Ação |
| :--- | :--- |
| `←` / `→` | Ir para a lição anterior ou próxima |
| `p` / `n` | Alternativas para lição anterior (`p`) ou próxima (`n`) |
| `r` | Executar o código Go localmente |
| `c` | Copiar o código para a área de transferência |
| `Esc` / `q` | Voltar para o menu principal |

---

## Estrutura do Projeto

- [`src/`](./src) — Contém os componentes React, telas, roteamento e utilitários da aplicação OpenTUI.
  - [`src/screens/`](./src/screens) — Telas de Menu, Lições e Introdução.
  - [`src/components/`](./src/components) — Painéis (`Pane`), Toasts e Rodapé (`Footer`).
  - [`src/lib/`](./src/lib) — Lógica para carregar lições e interagir com o sistema (executar Go, clipboard).
- [`lessons/`](./lessons) — Diretório contendo os tópicos e arquivos `.go` e `.md` de cada lição.
- [`tree-sitter/`](./tree-sitter) — Arquivos WebAssembly e queries para suporte a syntax highlighting.

---

## Scripts Úteis

Disponíveis no `package.json`:

- `bun run lint`: Analisa o projeto em busca de problemas usando o `oxlint`.
- `bun run lint:fix`: Corrige problemas de estilo ou lint automaticamente.
- `bun run format`: Formata todos os arquivos do projeto com o `oxfmt`.
