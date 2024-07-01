import { Todo, TodoAdd, TodoUpdate } from "../types";

enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS",
  POPULATE_TODOS = "POPULATE_TODOS",
  FETCH_TODOS = "FETCH_TODOS",
  UPDATE_TODO = "UPDATE_TODO",
}

const addTodo = (payload: TodoAdd) =>
  ({ type: ActionTypes.ADD_TODO, payload } as const);

const clearAllTodos = () => ({ type: ActionTypes.CLEAR_ALL_TODOS } as const);

const updateTodo = (payload: TodoUpdate) =>
  ({ type: ActionTypes.UPDATE_TODO, payload } as const);

const populateTodos = (payload: Todo[]) =>
  ({ type: ActionTypes.POPULATE_TODOS, payload } as const);

const fetchTodos = () => ({ type: ActionTypes.FETCH_TODOS } as const);

const actions = {
  updateTodo,
  addTodo,
  clearAllTodos,
  populateTodos,
  fetchTodos,
};

export type Actions = ReturnType<(typeof actions)[keyof typeof actions]>;
export default actions;
export { ActionTypes, populateTodos, addTodo, clearAllTodos };
