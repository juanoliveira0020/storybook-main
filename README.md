# 📘 Storybook - Biblioteca de Componentes React

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Storybook-10-FF4785?style=for-the-badge&logo=storybook&logoColor=white" alt="Storybook">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Vitest-4-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge" alt="Status">
</p>

<p align="center">
  Projeto de estudo em React + Storybook, criado para documentar e testar visualmente
  componentes de UI de forma isolada, sem depender de uma aplicação completa.
</p>

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Componentes Documentados](#-componentes-documentados)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#️-pré-requisitos)
- [Como Executar](#-como-executar)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Observações Técnicas](#-observações-técnicas)
- [Melhorias Futuras](#-melhorias-futuras)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

Este repositório é um projeto de estudo sobre **Storybook**, ferramenta utilizada para desenvolver, documentar e testar componentes de interface de forma isolada do restante da aplicação.

O projeto contém uma pequena biblioteca de componentes React (`Header`, `IconButton` e `TextButton`), cada um com seu próprio arquivo de estilos e sua respectiva **story** — um arquivo que descreve como o componente deve ser exibido e quais propriedades (`args`) podem ser ajustadas interativamente na interface do Storybook.

O objetivo foi praticar a configuração do Storybook com Vite, a criação de stories para componentes React e a organização de um pequeno design system.

---

## 🧩 Componentes Documentados

| Componente | Props | Descrição |
|---|---|---|
| **Header** | `title` | Cabeçalho com título e menu de navegação (Home, Sobre, Contato) |
| **IconButton** | `src`, `alt` | Botão que exibe apenas um ícone/imagem |
| **TextButton** | `Label` | Botão de texto simples |

Cada componente possui uma story correspondente (`*.stories.js`), visível no painel lateral do Storybook em **Components**.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| **React 19** | Biblioteca utilizada na construção dos componentes |
| **Storybook 10** | Ambiente de desenvolvimento e documentação isolada dos componentes |
| **Vite 7** | Build tool e servidor de desenvolvimento |
| **@storybook/react-vite** | Integração do Storybook com o Vite |
| **@storybook/addon-a11y** | Verificação de acessibilidade dos componentes |
| **@storybook/addon-docs** | Geração automática de documentação a partir das stories |
| **@storybook/addon-onboarding** | Tutorial guiado de introdução ao Storybook |
| **@storybook/addon-vitest** + **Vitest** + **Playwright** | Testes dos componentes integrados ao Storybook |
| **Chromatic** (`@chromatic-com/storybook`) | Addon para testes visuais/publicação de builds do Storybook |
| **ESLint** (+ `eslint-plugin-storybook`) | Padronização e qualidade do código |

---

## 📂 Estrutura do Projeto

```text
storybook-main/
│
└── storybook-react/
    ├── .storybook/
    │   ├── main.js               # Configuração principal (stories, addons, framework)
    │   ├── preview.js            # Configuração global de preview (controls, a11y)
    │   └── vitest.setup.js       # Setup dos testes via Vitest
    │
    ├── src/
    │   ├── components/
    │   │   ├── Header/
    │   │   │   ├── Header.jsx
    │   │   │   ├── Header.css
    │   │   │   └── Header.stories.js
    │   │   ├── IconButton/
    │   │   │   ├── IconButton.jsx
    │   │   │   ├── IconButton.css
    │   │   │   └── IconButton.stories.js
    │   │   └── TextButton/
    │   │       ├── TextButton.jsx
    │   │       ├── TextButton.css
    │   │       └── TextButton.stories.js
    │   │
    │   ├── App.jsx                # App de exemplo do template Vite
    │   ├── main.jsx                # Ponto de entrada da aplicação Vite
    │   └── index.css
    │
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── README.md
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

- [Node.js](https://nodejs.org) (LTS recomendado)
- npm (ou yarn/pnpm)

---

## 🚀 Como Executar

**1. Clone o repositório**
```bash
git clone https://github.com/juanoliveira0020/storybook-main.git
```

**2. Entre na pasta do projeto**
```bash
cd storybook-main/storybook-react
```

**3. Instale as dependências**
```bash
npm install
```

**4. Inicie o Storybook**
```bash
npm run storybook
```

**5. Acesse a aplicação**

O Storybook abre automaticamente em:
```
http://localhost:6006
```

Lá é possível navegar entre os componentes (`Components/Header`, `Components/IconButton`, `Components/TextButton`), ajustar seus `args` pelo painel de controles e visualizar o resultado em tempo real.

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| Storybook (dev) | `npm run storybook` | Inicia o Storybook em modo de desenvolvimento na porta `6006` |
| Build do Storybook | `npm run build-storybook` | Gera uma versão estática do Storybook, pronta para deploy |
| App Vite (dev) | `npm run dev` | Inicia o app de exemplo do template Vite |
| Build do app | `npm run build` | Gera o build de produção do app Vite |
| Preview do build | `npm run preview` | Pré-visualiza o build gerado do app Vite |
| Lint | `npm run lint` | Executa o ESLint no projeto |

---

## 📝 Observações Técnicas

Durante a análise do código, alguns detalhes valem ser registrados para quem for evoluir o projeto:

- O foco do repositório é o **Storybook** (`npm run storybook`); o `App.jsx` é apenas o app de exemplo do template padrão do Vite e não reflete o uso real dos componentes.
- Na story de `TextButton`, as chaves `tittle` e `argtypes` estão com grafia diferente do esperado pelo Storybook (`title` e `argTypes`), o que faz com que o título do grupo e os controles não sejam reconhecidos corretamente.
- A story de `IconButton` define um controle de texto chamado `label`, mas o componente na verdade recebe `src` e `alt` — os nomes não coincidem, então esse controle não afeta a renderização.
- O componente `TextButton` espera a prop `Label` (com "L" maiúsculo), enquanto as stories e o `App.jsx` utilizam `label` (minúsculo) — por serem nomes diferentes em JavaScript, o texto do botão não é exibido nesses casos.

Nenhum desses pontos impede o uso do Storybook para visualizar os componentes; são apenas pequenas inconsistências de nomenclatura entre componentes e stories.

---

## 🚀 Melhorias Futuras

- [ ] Padronizar a nomenclatura das props entre componentes e stories (`label` vs `Label`, `title` vs `tittle`)
- [ ] Adicionar mais variações (`args`) para cada componente (estados de hover, desabilitado, tamanhos, etc.)
- [ ] Escrever testes com Vitest para os componentes, aproveitando o `@storybook/addon-vitest` já instalado
- [ ] Adicionar documentação em MDX explicando o uso de cada componente
- [ ] Publicar o Storybook (Chromatic, GitHub Pages ou Vercel) para consulta pública
- [ ] Expandir a biblioteca com novos componentes (inputs, cards, modais, etc.)

---

## 👨‍💻 Autor

**Juan Oliveira**

[![GitHub](https://img.shields.io/badge/GitHub-juanoliveira0020-181717?style=flat&logo=github)](https://github.com/juanoliveira0020)

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de aprendizado.

Sinta-se à vontade para utilizá-lo como referência para estudos sobre React e Storybook.
