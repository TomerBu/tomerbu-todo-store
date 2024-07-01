import { Todo, TodoAdd, TodoUpdate } from "../types";

enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  CREATE_TODO = "CREATE_TODO",
  CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS",
  POPULATE_TODOS = "POPULATE_TODOS",
  FETCH_TODOS = "FETCH_TODOS",
  UPDATE_TODO = "UPDATE_TODO",
}

const addTodo = function* (
  payload: TodoAdd
): Generator<
  ReturnType<typeof createTodo>,
  { type: ActionTypes.ADD_TODO; payload: Todo },
  Todo
> {
  const newTodo = yield createTodo(payload);
  return { type: ActionTypes.ADD_TODO, payload: newTodo } as const;
};

const clearAllTodos = () => ({ type: ActionTypes.CLEAR_ALL_TODOS } as const);

export const createTodo = (todo: TodoAdd) =>
  ({
    type: ActionTypes.CREATE_TODO,
    payload: todo,
  } as const);

const updateTodo = (payload: TodoUpdate) =>
  ({ type: ActionTypes.UPDATE_TODO, payload } as const);

const populateTodos = (payload: Todo[]) =>
  ({ type: ActionTypes.POPULATE_TODOS, payload } as const);

const fetchTodos = () => ({ type: ActionTypes.FETCH_TODOS } as const);

let actions = {
  updateTodo,
  addTodo,
  clearAllTodos,
  populateTodos,
  fetchTodos,
};

export default actions;
export {
  ActionTypes,
  populateTodos,
  addTodo,
  clearAllTodos,
  updateTodo,
  fetchTodos,
};

type ActionsWithoutAdd = Omit<typeof actions, "addTodo">;
export type Actions =
  | ReturnType<ActionsWithoutAdd[keyof ActionsWithoutAdd]>
  | { type: ActionTypes.ADD_TODO; payload: TodoAdd };
