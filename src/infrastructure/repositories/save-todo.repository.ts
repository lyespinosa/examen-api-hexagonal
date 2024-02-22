import { TodoInterface } from '../../domain/todo.interface';
import { TodoEntity } from '../../domain/todo.entity';
import { TodoRepository } from './todo.repository';

export class SaveTodoRepository implements TodoRepository {
    createTodo(todo: TodoEntity): Promise<TodoEntity> {
        const todoEntity = new TodoEntity(todo.uuid, todo.description, todo.completed);

        return Promise.resolve(todoEntity);
    }
    getTodoByUUID(uuid: string): Promise<TodoEntity> {
        const todoEntity = new TodoEntity(uuid, 'description', false);
        return Promise.resolve(todoEntity);
    }
    updateTodo(uuid: string, todo: TodoEntity): Promise<TodoEntity> {
        const todoEntity = new TodoEntity(uuid, todo.description, todo.completed);
        return Promise.resolve(todoEntity);
    }
    deleteTodo(uuid: string): Promise<void> {
        return Promise.resolve();
    }


}