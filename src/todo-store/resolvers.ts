import { dispatch } from "@wordpress/data";
import { Todo } from "../types";
import actions, { populateTodos } from "./actions";

// Explicitly define the return type of the generator function
export function* getTodos(): Generator<
  // the return type of the yield expression:
  ReturnType<typeof actions.fetchTodos>,
  // the return type of function itself:
  ReturnType<typeof populateTodos> | void,
  // the type of the value that the generator function accepts from the next() method:
  Todo[]
> {
  try {
    const todos = yield actions.fetchTodos();
    return populateTodos(todos);
  } catch (error) {
    const message = isError(error) ? error.message : "Error fetching todos.";
    return dispatch("core/notices").createErrorNotice(message);
  }
}

export const resolvers = {
  getTodos,
};

export default resolvers;

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

declare module "@wordpress/data" {
  function dispatch(key: "core/notices"): {
    createErrorNotice: (message: string, options?: Record<string, any>) => void;
  };
}
