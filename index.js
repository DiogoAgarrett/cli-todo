const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const app = express();
const PORT = 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini Todo API",
      version: "1.0.0",
      description: "API simples de tarefas para aprender Node.js + Swagger",
    },
  },
  apis: ["./index.js"], // ficheiro onde estão os comentários das rotas
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Rota do Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const Task = require("./Domain/Task");

const tasks = []; // lista em memória

const newTask = new Task("Study node", "Know how to create classes");

tasks.push(newTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lista todas as tarefas
 *     description: Devolve todas as tarefas da lista em memória
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Study node"
 *                   description:
 *                     type: string
 *                     example: "Know how to create classes"
 */
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// deploy server
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/api-docs`);
});
