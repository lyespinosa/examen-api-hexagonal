import { TodoController } from "../controllers/todo.controller";
import { CreateTodoUseCase } from "../../application/create-todo.usecase";
import { DeleteTodoUseCase } from "../../application/delete-todo.usecase";
import { GetTodoUseCase } from "../../application/get-todo.usecase";
import { UpdateTodoUseCase } from "../../application/update-todo.usecase";
import { SaveTodoRepository } from "../repositories/save-todo.repository";

const mySqlTaskRepository = new SaveTodoRepository();

const createTaskUseCase = new CreateTodoUseCase(mySqlTaskRepository);
const deleteTaskUseCase = new DeleteTodoUseCase(mySqlTaskRepository);
const getTaskUseCase = new GetTodoUseCase(mySqlTaskRepository);
const updateTaskUseCase = new UpdateTodoUseCase(mySqlTaskRepository);

export const todoController = new TodoController(getTaskUseCase, createTaskUseCase, updateTaskUseCase, deleteTaskUseCase);