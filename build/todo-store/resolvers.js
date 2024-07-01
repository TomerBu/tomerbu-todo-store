import { dispatch } from "@wordpress/data";
import actions, { populateTodos } from "./actions";
// Explicitly define the return type of the generator function
export function* getTodos() {
    try {
        const todos = yield actions.fetchTodos();
        return populateTodos(todos);
    }
    catch (error) {
        const message = isError(error) ? error.message : "Error fetching todos.";
        return dispatch("core/notices").createErrorNotice(message);
    }
}
export const resolvers = {
    getTodos,
};
export default resolvers;
function isError(error) {
    return error instanceof Error;
}
