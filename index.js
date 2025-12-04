const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // permite ler JSON do corpo dos pedidos

let tasks = []; // lista em memória

// GET /tasks → devolve todas as tarefas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST /tasks → adiciona uma nova tarefa
app.post("/tasks", (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json({ message: "Tarefa adicionada!", tasks });
});

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
