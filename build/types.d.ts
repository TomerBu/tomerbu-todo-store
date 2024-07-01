export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};
export type State = {
    todos: Todo[];
};
export type { Actions } from "./todo-store/actions";
export type TodoUpdate = Partial<Todo> & {
    id: number;
};
export type TodoAdd = Omit<Omit<Todo, "id">, "completed">;
