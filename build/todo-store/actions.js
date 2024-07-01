var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_TODO"] = "ADD_TODO";
    ActionTypes["CREATE_TODO"] = "CREATE_TODO";
    ActionTypes["CLEAR_ALL_TODOS"] = "CLEAR_ALL_TODOS";
    ActionTypes["POPULATE_TODOS"] = "POPULATE_TODOS";
    ActionTypes["FETCH_TODOS"] = "FETCH_TODOS";
    ActionTypes["UPDATE_TODO"] = "UPDATE_TODO";
})(ActionTypes || (ActionTypes = {}));
const addTodo = function* (payload) {
    const newTodo = yield createTodo(payload);
    return { type: ActionTypes.ADD_TODO, payload: newTodo };
};
const clearAllTodos = () => ({ type: ActionTypes.CLEAR_ALL_TODOS });
export const createTodo = (todo) => ({
    type: ActionTypes.CREATE_TODO,
    payload: todo,
});
const updateTodo = (payload) => ({ type: ActionTypes.UPDATE_TODO, payload });
const populateTodos = (payload) => ({ type: ActionTypes.POPULATE_TODOS, payload });
const fetchTodos = () => ({ type: ActionTypes.FETCH_TODOS });
let actions = {
    updateTodo,
    addTodo,
    clearAllTodos,
    populateTodos,
    fetchTodos,
};
export default actions;
export { ActionTypes, populateTodos, addTodo, clearAllTodos, updateTodo, fetchTodos, };
