// controls.ts
import { Todo, TodoAdd } from "../types";
import { ActionTypes, createTodo, patchCompleted } from "./actions";

const performFetchTodos = (): Promise<Todo[]> =>
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((response) =>
      response.ok
        ? response
        : Promise.reject(new Error("Failed to fetch todos."))
    )
    .then((response) => response.json())
    .then((todos) => todos as Todo[]);

const performAddTodo = (todo: TodoAdd): Promise<Todo> =>
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((response) => {
      return response.ok
        ? response
        : Promise.reject(new Error("Failed to add todo."));
    })
    .then((response) => response.json())
    .then((todo) => todo as Todo);

const performPatchCompleted = (id: number, completed: boolean): Promise<Todo> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  })
    .then((response) => {
      return response.ok
        ? response
        : Promise.reject(new Error("Failed to patch todo."));
    })
    .then((response) => response.json())
    .then((todo) => todo as Todo);

const controls = {
  [ActionTypes.PATCH_COMPLETED](action: ReturnType<typeof patchCompleted>) {
    return performPatchCompleted(action.payload.id, action.payload.completed);
  },
  [ActionTypes.CREATE_TODO](action: ReturnType<typeof createTodo>) {
    return performAddTodo(action.payload);
  },
  [ActionTypes.FETCH_TODOS]() {
    return performFetchTodos();
  },
};

export default controls;
