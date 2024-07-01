import { Todo, TodoAdd, TodoUpdate } from "../types";
declare enum ActionTypes {
    ADD_TODO = "ADD_TODO",
    CREATE_TODO = "CREATE_TODO",
    CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS",
    POPULATE_TODOS = "POPULATE_TODOS",
    FETCH_TODOS = "FETCH_TODOS",
    UPDATE_TODO = "UPDATE_TODO"
}
declare const addTodo: (payload: TodoAdd) => Generator<ReturnType<typeof createTodo>, {
    type: ActionTypes.ADD_TODO;
    payload: Todo;
}, Todo>;
declare const clearAllTodos: () => {
    readonly type: ActionTypes.CLEAR_ALL_TODOS;
};
export declare const createTodo: (todo: TodoAdd) => {
    readonly type: ActionTypes.CREATE_TODO;
    readonly payload: TodoAdd;
};
declare const updateTodo: (payload: TodoUpdate) => {
    readonly type: ActionTypes.UPDATE_TODO;
    readonly payload: TodoUpdate;
};
declare const populateTodos: (payload: Todo[]) => {
    readonly type: ActionTypes.POPULATE_TODOS;
    readonly payload: Todo[];
};
declare const fetchTodos: () => {
    readonly type: ActionTypes.FETCH_TODOS;
};
declare let actions: {
    updateTodo: (payload: TodoUpdate) => {
        readonly type: ActionTypes.UPDATE_TODO;
        readonly payload: TodoUpdate;
    };
    addTodo: (payload: TodoAdd) => Generator<ReturnType<typeof createTodo>, {
        type: ActionTypes.ADD_TODO;
        payload: Todo;
    }, Todo>;
    clearAllTodos: () => {
        readonly type: ActionTypes.CLEAR_ALL_TODOS;
    };
    populateTodos: (payload: Todo[]) => {
        readonly type: ActionTypes.POPULATE_TODOS;
        readonly payload: Todo[];
    };
    fetchTodos: () => {
        readonly type: ActionTypes.FETCH_TODOS;
    };
};
export default actions;
export { ActionTypes, populateTodos, addTodo, clearAllTodos, updateTodo, fetchTodos, };
type ActionsWithoutAdd = Omit<typeof actions, "addTodo">;
export type Actions = ReturnType<ActionsWithoutAdd[keyof ActionsWithoutAdd]> | {
    type: ActionTypes.ADD_TODO;
    payload: TodoAdd;
};
