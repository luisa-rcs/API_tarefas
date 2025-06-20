const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // para o app entender JSON no body

// Lista em memória (por enquanto)
let tarefas = [];
let proximoId = 1;

// ROTA 1 - GET /tarefas → lista todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// ROTA 2 - GET /tarefas/:id → busca tarefa por ID
app.get('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }

  res.json(tarefa);
});

// ROTA 3 - GET /tarefas/concluidas → lista só as concluídas
app.get('/tarefas/concluidas', (req, res) => {
  const concluidas = tarefas.filter(t => t.concluida);
  res.json(concluidas);
});

// POST /tarefas → cria nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo, descricao } = req.body;

  const novaTarefa = {
    id: proximoId++,
    titulo,
    descricao,
    concluida: false
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// PUT /tarefas/:id → atualiza tarefa
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }

  Object.assign(tarefa, req.body); // atualiza campos recebidos
  res.json(tarefa);
});

// DELETE /tarefas/:id → remove tarefa
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }

  tarefas.splice(index, 1);
  res.status(204).send(); // sem conteúdo
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
