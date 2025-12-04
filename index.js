const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // permite ler JSON do corpo dos pedidos

const Task = require("./Domain/Task");

const tasks = []; // lista em memória

const newTask = new Task("Study node", "Know how to create classes");

tasks.push(newTask);

// GET /tasks → devolve todas as tarefas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// deploy server
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
