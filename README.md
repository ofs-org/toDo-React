<div align="center">

# ToDo React

![React](https://img.shields.io/badge/React-20232a?style=plastic&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=plastic&logo=tailwindcss&logoColor=ffffff)

## </div>

## 📋 Menu

- 🖼️ [Imagem do Projeto](#imagem-do-projeto)
- 📖 [Sobre](#sobre)
- 🛠️ [Tecnologias](#tecnologias)
- ⚙️ [Funcionalidades](#funcionalidades)
- 🗂️ [Arquitetura de Dados](#arquitetura-de-dados)
- 📁 [Estrutura do Projeto](#estrutura-do-projeto)
- 🚀 [Configuração](#configuração)
- 🗺️ [Rotas](#rotas)
- 👥 [Contributors](#contributors-or-owners)
- 🤝 [Contribuir](#contribute-to-the-projects-or-owner)
- 📬 [Contact](#contact)
- 📄 [License](#license)

## Imagem do Projeto

<img src="/public/thumb.png">

## Sobre

Aplicação de lista de tarefas (ToDo) desenvolvida com React, TypeScript e Vite. Permite criar, editar, concluir e excluir tarefas com persistência automática no `localStorage` do navegador, exibindo um resumo de tarefas criadas e concluídas com estado de carregamento simulado.

| Item                | Detalhe                                                          |
| ------------------- | ---------------------------------------------------------------- |
| Tipo de repositório | Monolito                                                         |
| Estrutura           | Vite SPA com React Router DOM e componentes reutilizáveis        |

Desenvolvido por **Emmanuel Oliveira**.

## Tecnologias

| Tecnologia              | Versão   | Descrição                                              |
| ----------------------- | -------- | ------------------------------------------------------ |
| React                   | ^19.2.0  | Biblioteca para construção da interface                |
| TypeScript              | ~5.9.3   | Tipagem estática para maior segurança no código        |
| Vite                    | ^7.2.4   | Bundler e servidor de desenvolvimento                  |
| Tailwind CSS            | ^4.1.18  | Framework de estilização utilitária                    |
| React Router DOM        | ^7.10.1  | Roteamento client-side entre páginas                   |
| use-local-storage       | ^3.0.0   | Persistência de estado no `localStorage` do navegador  |
| class-variance-authority| ^0.7.1   | Variantes de estilo para componentes                   |
| vite-plugin-svgr        | ^4.5.0   | Importação de SVGs como componentes React              |
| Biome                   | 2.4.16   | Formatação e lint do código (dev)                      |

## Funcionalidades

- ✅ Criação de tarefas com título
- ✅ Edição inline do título da tarefa
- ✅ Marcação de tarefas como concluídas
- ✅ Exclusão de tarefas
- ✅ Persistência automática no `localStorage`
- ✅ Resumo com contagem de tarefas criadas e concluídas
- ✅ Estado de carregamento simulado com skeletons
- ✅ Biblioteca de componentes reutilizáveis em página dedicada
- ✅ Layout responsivo com header e footer

## Arquitetura de Dados

A aplicação não utiliza backend nem banco de dados externo. O estado das tarefas é gerenciado localmente no navegador por meio do hook `use-local-storage`, que sincroniza automaticamente o array de tarefas com a chave `tasks` no `localStorage`.

O hook `useTasks` simula um carregamento assíncrono de 2 segundos antes de exibir a lista, calculando métricas de tarefas criadas e concluídas. O hook `useTask` centraliza as operações de criação, atualização de título, alteração de status e exclusão.

### Componentes Principais

| Componente    | Localização                        | Descrição                                              |
| ------------- | ---------------------------------- | ------------------------------------------------------ |
| TaskSummary   | `src/components/core/task-summary.tsx` | Exibe contagem de tarefas criadas e concluídas     |
| TaskList      | `src/components/core/task-list.tsx`    | Formulário de criação e listagem de tarefas        |
| TaskItem      | `src/components/core/task-item.tsx`    | Item individual com edição, conclusão e exclusão   |
| DefaultLayout | `src/layout/default-layout.tsx`        | Layout base com header, outlet e footer            |
| useTasks      | `src/hooks/use-tasks.ts`               | Carrega tarefas com delay simulado e métricas      |
| useTask       | `src/hooks/use-task.ts`                | Operações CRUD sobre o array de tarefas            |

## Estrutura do Projeto

```
toDo-react/
├── public/
│   └── thumb.png                 # Thumbnail do projeto
├── src/
│   ├── assets/                   # Ícones SVG importados como componentes
│   ├── components/
│   │   ├── core/                 # Componentes de domínio (tarefas, layout)
│   │   ├── variants/             # Variantes de estilo (CVA)
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── button-icon.tsx
│   │   ├── icon.tsx
│   │   ├── input-checkbox.tsx
│   │   ├── input-text.tsx
│   │   ├── skeleton.tsx
│   │   └── text.tsx
│   ├── helpers/
│   │   └── utils.ts              # Utilitários (ex.: delay)
│   ├── hooks/
│   │   ├── use-task.ts           # CRUD de tarefas
│   │   └── use-tasks.ts          # Carregamento e métricas
│   ├── layout/
│   │   └── default-layout.tsx    # Layout padrão da aplicação
│   ├── models/
│   │   └── task.ts               # Tipo Task e chave do localStorage
│   ├── pages/
│   │   ├── page-home.tsx         # Página principal
│   │   └── page-components.tsx   # Showcase de componentes
│   ├── routes/
│   │   └── index.tsx             # Definição de rotas
│   ├── styles/
│   │   └── index.css             # Estilos globais e Tailwind
│   ├── App.tsx
│   └── main.tsx
├── biome.json
├── package.json
├── tsconfig.app.json
└── vite.config.ts
```

## Configuração

### Pré-requisitos

- Node.js `>= 18`
- pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ofs-org/toDo-React.git

# Instale as dependências
pnpm install
```

### Scripts Disponíveis

| Script          | Comando            | Descrição                                      |
| --------------- | ------------------ | ---------------------------------------------- |
| Desenvolvimento | `pnpm dev`         | Inicia o servidor de desenvolvimento (Vite)    |
| Build           | `pnpm build`       | Compila TypeScript e gera build de produção    |
| Lint            | `pnpm lint`        | Formata o código com Biome                     |
| Preview         | `pnpm preview`     | Pré-visualiza a build de produção localmente   |

## Rotas

| Rota           | Descrição                                              |
| -------------- | ------------------------------------------------------ |
| `/`            | Página principal com resumo e lista de tarefas         |
| `/components`  | Showcase dos componentes reutilizáveis da aplicação    |

## Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png">

<br>

[Emmanuel Oliveira](https://www.linkedin.com/in/oliveira-emmanuel/)

<br>

<small>

[developed by 💖Emmanuel Oliveira](https://www.linkedin.com/in/oliveira-emmanuel/)

</small>

<br>

<small> &copy; Todos os Direitos Reservados </small>

## Contribute to the projects or Owner

Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>

<summary>
Como fazer uma contribuição ao Projeto ?
</summary>
 Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.

 <br>

Explore o código do projeto para entender sua estrutura e funcionamento.

<br>

**Faça um Fork**

Crie uma cópia (fork) do repositório original em sua conta do GitHub.

<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">

<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">

<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

Crie uma nova branch para isolar suas alterações.

  <br>

Isso facilita a organização do seu trabalho e a criação de pull requests.

<br>

**Faça as Alterações:**

Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.

<br>

**Crie um Pull Request:**

Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>

Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.

 <br>

**Revise e Responda a Feedback:**

Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

## </details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/oliveira-emmanuel/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

## <sub>😁Obrigado por chegar até aqui!<sub>

## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2026 This project is under the **MIT license**<br>

<br>
<div align="center">

<strong>⭐ Se este projeto foi útil para você, considere dar uma estrela!</strong>

</div>
