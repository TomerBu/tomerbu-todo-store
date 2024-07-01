import { Todo } from "../types";
import { createTodo } from "./actions";
declare const controls: {
    CREATE_TODO(action: ReturnType<typeof createTodo>): Promise<Todo>;
    FETCH_TODOS(): Promise<Todo[]>;
};
export default controls;
