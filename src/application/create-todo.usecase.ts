import { TodoEntity } from "../domain/todo.entity";
import { TodoRepository } from "../infrastructure/repositories/todo.repository";
import { v4 as uuidv4 } from 'uuid';

export class CreateTodoUseCase {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(todoData: Partial<TodoEntity>): Promise<TodoEntity> {
    const id = uuidv4();
    const completed = todoData.completed || false;
    const { description } = todoData;
    if (description === undefined) {
      throw new Error("Description is missing");
    }
    const newTodo = new TodoEntity(id, description, completed);
    const createdTodo = await this.todoRepository.createTodo(newTodo);
    return createdTodo;
  }
}
