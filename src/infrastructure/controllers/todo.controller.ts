import { GetTodoUseCase } from "../../application/get-todo.usecase";
import { CreateTodoUseCase } from "../../application/create-todo.usecase";
import { UpdateTodoUseCase } from "../../application/update-todo.usecase";
import { DeleteTodoUseCase } from "../../application/delete-todo.usecase";
import { Request, Response } from "express";
import { TodoEntity } from "../../domain/todo.entity";

export class TodoController {
    constructor( private readTodoUseCase: GetTodoUseCase, private createTodoUseCase: CreateTodoUseCase, private updateTodoUseCase: UpdateTodoUseCase, private deleteTodoUseCase: DeleteTodoUseCase) {}

    async createTask(request: Request, response: Response) {
        try {
            const requestTodo = new TodoEntity(request.body.id, request.body.description, request.body.isCompleted);

            const task = await this.createTodoUseCase.execute(requestTodo);

            this._toResponse(response, 201, task, "Tarea creada exitosamente", true);
        } catch (error) {
            this._toResponse(response, 500, null, "Error", false);
        }
    }

    async updateTask(request: Request, response: Response) {
        try {
            const requestTodo = new TodoEntity(request.body.id, request.body.description, request.body.completed);

            const task = await this.updateTodoUseCase.execute(requestTodo.uuid, requestTodo);

            this._toResponse(response, 200, task, "Tarea actualizada", true);
        } catch (error) {
            this._toResponse(response, 500, null, "Error", false);
        }
    }

    async getTask(request: Request, response: Response) {
        try {
            this._toResponse(response, 200, request.body, "Tarea encontrada", true);
        } catch (error) {
            this._toResponse(response, 500, null, "Error", false);
        }
    }

    async deleteTask(request: Request, response: Response) {
        try {
            this._toResponse(response, 200, null, "Tarea eliminada", true);
        } catch (error) {
            this._toResponse(response, 500, null, "Error", false);
        }
    }

    _toResponse(res: Response, code: number, data: TodoEntity | null, message: string, ok: boolean) {
        res.status(code).json({
            ok,
            data,
            message
        });
    }
}