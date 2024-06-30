import { Todo } from "../types";

enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS",
}

const addTodo = (payload: Todo) =>
  ({ type: ActionTypes.ADD_TODO, payload } as const);
const clearAllTodos = () => ({ type: ActionTypes.CLEAR_ALL_TODOS } as const);

const actions = {
  addTodo,
  clearAllTodos,
};

type Actions = ReturnType<(typeof actions)[keyof typeof actions]>;

export default actions;
export type { Actions };
export { ActionTypes };
