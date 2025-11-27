# Jogo da Memória (React + Vite)

Projeto de um jogo da memória desenvolvido com React e Vite — versão de estudo/atividade.

## Descrição

Este repositório contém a implementação de um jogo da memória (conhecido como "Memory") usando React. O objetivo é combinar pares de cartas virando-as duas a duas.

## Tecnologias

- React
- Vite
- JavaScript (JSX)
- ESLint

## Pré-requisitos

Tenha instalado em sua máquina:

- Node.js (v16+ recomendado)
- npm ou yarn

## Como executar (modo desenvolvimento)

No diretório do projeto, instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra o navegador em `http://localhost:5173` (ou a porta informada pelo Vite).

## Scripts úteis

- `npm run dev` - Inicia o servidor de desenvolvimento com HMR
- `npm run build` - Gera a versão de produção em `/dist`
- `npm run preview` - Serve a build de produção localmente

## Estrutura do projeto

- `index.html` - Entrada HTML
- `src/` - Código-fonte do aplicativo
  - `main.jsx` - Ponto de entrada React
  - `App.jsx` - Componente principal
  - `components/` - Componentes do jogo (`Carta.jsx`, `Tabuleiro.jsx`, etc.)
- `public/` - Arquivos estáticos

## Como contribuir

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature: `git checkout -b feature/nome-da-feature`.
3. Faça commits claros e pequenos.
4. Abra um pull request descrevendo as mudanças.

## Notas do autor

Este projeto foi feito como parte de uma atividade/estudo. Sinta-se à vontade para adaptar, melhorar a UI, adicionar níveis de dificuldade ou persistência de pontuação.

## Licença

Este projeto está disponível sob a licença MIT (ou especifique a licença desejada).
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
