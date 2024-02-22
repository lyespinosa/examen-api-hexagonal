import { TodoEntity } from "../domain/todo.entity";
import { TodoRepository } from "../infrastructure/repositories/todo.repository";

export class GetTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(id: string): Promise<TodoEntity> {
    return await this.todoRepository.getTodoByUUID(id);
  }
}
