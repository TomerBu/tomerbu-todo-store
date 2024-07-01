import { State } from "../types";

const selectors = {
  getTodos: (state: State) => state.todos,
  getTodoCount: (state: State) => state.todos.length,
  getCompletedTodos: (state: State) =>
    state.todos.filter((todo) => todo.completed),
  getPendingTodos: (state: State) =>
    state.todos.filter((todo) => !todo.completed),
  getTodoById: (state: State, id: number) =>
    state.todos.find((todo) => todo.id === id),
};

export default selectors;
