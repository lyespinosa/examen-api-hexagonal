import { TodoEntity } from "../domain/todo.entity";
import { TodoRepository } from "../infrastructure/repositories/todo.repository";

export class UpdateTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(id: string, todoData: Partial<TodoEntity>): Promise<TodoEntity> {
    const todo = await this.todoRepository.getTodoByUUID(id);
    if (todoData.description !== undefined) {
      todo.description = todoData.description;
    }
    if (todoData.completed !== undefined) {
      todo.completed = todoData.completed;
    }
    todo.updatedAt = new Date();
    const updatedTodo = await this.todoRepository.updateTodo(id, todo);
    return updatedTodo;
  }
}
