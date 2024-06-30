import { State } from "../types";

const selectors = {
  getTodos: (state: State) => state.todos,
  getTodoById: (state: State, id: number) =>
    state.todos.find((todo) => todo.id === id),
};

export default selectors;
