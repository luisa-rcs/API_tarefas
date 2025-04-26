# API de Gerenciamento de Tarefas

Esta é uma API RESTful desenvolvida em **Node.js** com **Express**, criada para gerenciar tarefas de forma simples e eficiente. Ideal para aplicativos de produtividade, to-do lists ou sistemas internos de organização.

---

## Funcionalidades

- ✅ Criar uma nova tarefa
- 📋 Listar todas as tarefas
- 🔍 Buscar tarefa por ID
- ✅ Listar tarefas concluídas
- ✏️ Atualizar título, descrição e status de uma tarefa
- ❌ Remover tarefa da lista

---

## Problemas que ela resolve

- Organização e controle de tarefas pessoais ou de equipe
- Automação de rotinas diárias
- Gerenciamento de entregas e produtividade
- Facilidade para integrar com um sistema frontend ou mobile

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## Estrutura do Projeto

```
api-tarefas/
├── index.js
└── tarefas.js
readme.md

```

---

## Rotas da API

| Método | Rota                    | Descrição                                |
|--------|-------------------------|------------------------------------------|
| GET    | `/tarefas`              | Retorna todas as tarefas                 |
| GET    | `/tarefas/:id`          | Retorna uma tarefa específica            |
| GET    | `/tarefas/concluidas`   | Retorna apenas as tarefas concluídas     |
| POST   | `/tarefas`              | Cria uma nova tarefa                     |
| PUT    | `/tarefas/:id`          | Atualiza os dados de uma tarefa          |
| DELETE | `/tarefas/:id`          | Remove uma tarefa da lista               |

---

## Exemplo de criação de tarefa (POST)

**Requisição:**

```json
{
  "titulo": "Estudar Node.js",
  "descricao": "Revisar Express e middleware"
}
```

**Resposta esperada:**

```json
{
  "id": 1,
  "titulo": "Estudar Node.js",
  "descricao": "Revisar Express e middleware",
  "concluida": false
}
```

---

## Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/luisa-rcs/API-tarefas.git
   cd API-tarefas
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node index.js
   ```

4. Acesse em [http://localhost:3000](http://localhost:3000)

---

## Contato

Desenvolvido por **Luísa Silva**  
📧 Email principal: luisaregsilva@gmail.com  
📨 Email alternativo: luisa.silva.dev@gmail.com

---
