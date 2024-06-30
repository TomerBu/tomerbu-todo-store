export type Todo = {
  id: number;
  text: string;
};

export type State = {
  todos: Todo[];
};

export type { Actions } from "./todo-store/actions";

