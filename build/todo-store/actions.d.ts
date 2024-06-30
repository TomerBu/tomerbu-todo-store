import { Todo } from "../types";
declare enum ActionTypes {
    ADD_TODO = "ADD_TODO",
    CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS"
}
declare const actions: {
    addTodo: (payload: Todo) => {
        readonly type: ActionTypes.ADD_TODO;
        readonly payload: Todo;
    };
    clearAllTodos: () => {
        readonly type: ActionTypes.CLEAR_ALL_TODOS;
    };
};
type Actions = ReturnType<(typeof actions)[keyof typeof actions]>;
export default actions;
export type { Actions };
export { ActionTypes };
