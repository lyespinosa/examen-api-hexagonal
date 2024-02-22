import { TodoInterface } from "./todo.interface";

export class TodoEntity implements TodoInterface {
    _uuid: string;
    _description: string;
    _completed: boolean;
    _createdAt: Date;
    _updatedAt: Date;

    constructor(id: string, description: string, completed: boolean) {
        this._uuid = id;
        this._description = description;
        this._completed = completed;
        this._createdAt = new Date();
        this._updatedAt = new Date();
    }

    public get uuid(): string {
        return this._uuid;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get completed(): boolean {
        return this._completed;
    }

    public set completed(completed: boolean) {
        this._completed = completed;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    public set updatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
    }



}