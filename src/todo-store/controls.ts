// controls.ts
import { Todo } from "../types";
import { ActionTypes } from "./actions";

const performFetchTodos = (): Promise<Todo[]> =>
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((response) =>
      response.ok
        ? response
        : Promise.reject(new Error("Failed to fetch todos."))
    )
    .then((response) => response.json())
    .then((todos) => todos as Todo[]);

const controls = {
  [ActionTypes.FETCH_TODOS]() {
    return performFetchTodos();
  },
};

export default controls;
