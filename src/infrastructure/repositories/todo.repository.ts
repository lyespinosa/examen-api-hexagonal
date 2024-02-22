import { TodoEntity } from "../../domain/todo.entity";

export interface TodoRepository {
  createTodo(todo: TodoEntity): Promise<TodoEntity>;
  getTodoByUUID(uuid: string): Promise<TodoEntity>;
  updateTodo(uuid: string, todo: TodoEntity): Promise<TodoEntity>;
  deleteTodo(uuid: string): Promise<void>;
}
