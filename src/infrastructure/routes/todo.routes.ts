import express from "express";
import { todoController } from "../dependences/dependencies";

export const Todorouter = express.Router();

Todorouter.post("/", todoController.createTask.bind(todoController));
Todorouter.get("/", todoController.getTask.bind(todoController));
Todorouter.put("/", todoController.updateTask.bind(todoController));
Todorouter.delete("/", todoController.deleteTask.bind(todoController));