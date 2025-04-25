// Lista de tarefas armazenada em memória
let tarefas = [];

// Controla o ID das tarefas para ser único e incremental
let id = 1;


// Função que retorna todas as tarefas
function listarTarefas(req, res) {
  res.json(tarefas);
}


// Função que cria uma nova tarefa
function criarTarefa(req, res) {
  const { titulo, descricao } = req.body;
  const novaTarefa = { id: id++, titulo, descricao, concluida: false };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
}

// Função que atualiza uma tarefa existente
function atualizarTarefa(req, res) {
  const idTarefa = parseInt(req.params.id);
  const { titulo, descricao, concluida } = req.body;

  // Busca a tarefa com o ID correspondente e se não encontrar retorna o erro 404
  const tarefa = tarefas.find(t => t.id === idTarefa);
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });


  // Atualiza os campos apenas se foram enviados (operador nullish coalescing)
  tarefa.titulo = titulo ?? tarefa.titulo;
  tarefa.descricao = descricao ?? tarefa.descricao;
  tarefa.concluida = concluida ?? tarefa.concluida;

  res.json(tarefa);
}


// Função que remove uma tarefa da lista
function deletarTarefa(req, res) {
  const idTarefa = parseInt(req.params.id);

  // Filtra todas as tarefas que NÃO possuem o ID a ser removido e retorna status 204 (No Content) — sucesso sem resposta
  tarefas = tarefas.filter(t => t.id !== idTarefa);
  res.status(204).send();
}


// Exporta as funções para poder usar em outros arquivos
module.exports = {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa
};
