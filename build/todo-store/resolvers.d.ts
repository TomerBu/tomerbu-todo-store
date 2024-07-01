import { Todo } from "../types";
import actions, { populateTodos } from "./actions";
export declare function getTodos(): Generator<ReturnType<typeof actions.fetchTodos>, ReturnType<typeof populateTodos> | void, Todo[]>;
export declare const resolvers: {
    getTodos: typeof getTodos;
};
export default resolvers;
declare module "@wordpress/data" {
    function dispatch(key: "core/notices"): {
        createErrorNotice: (message: string, options?: Record<string, any>) => void;
    };
}
