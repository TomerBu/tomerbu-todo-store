import { Todo, TodoAdd, TodoUpdate } from "../types";
declare enum ActionTypes {
    ADD_TODO = "ADD_TODO",
    CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS",
    POPULATE_TODOS = "POPULATE_TODOS",
    FETCH_TODOS = "FETCH_TODOS",
    UPDATE_TODO = "UPDATE_TODO"
}
declare const addTodo: (payload: TodoAdd) => {
    readonly type: ActionTypes.ADD_TODO;
    readonly payload: TodoAdd;
};
declare const clearAllTodos: () => {
    readonly type: ActionTypes.CLEAR_ALL_TODOS;
};
declare const populateTodos: (payload: Todo[]) => {
    readonly type: ActionTypes.POPULATE_TODOS;
    readonly payload: Todo[];
};
declare const actions: {
    updateTodo: (payload: TodoUpdate) => {
        readonly type: ActionTypes.UPDATE_TODO;
        readonly payload: TodoUpdate;
    };
    addTodo: (payload: TodoAdd) => {
        readonly type: ActionTypes.ADD_TODO;
        readonly payload: TodoAdd;
    };
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
export type Actions = ReturnType<(typeof actions)[keyof typeof actions]>;
export default actions;
export { ActionTypes, populateTodos, addTodo, clearAllTodos };
