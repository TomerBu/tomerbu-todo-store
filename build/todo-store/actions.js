var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_TODO"] = "ADD_TODO";
    ActionTypes["CLEAR_ALL_TODOS"] = "CLEAR_ALL_TODOS";
    ActionTypes["POPULATE_TODOS"] = "POPULATE_TODOS";
    ActionTypes["FETCH_TODOS"] = "FETCH_TODOS";
    ActionTypes["UPDATE_TODO"] = "UPDATE_TODO";
})(ActionTypes || (ActionTypes = {}));
const addTodo = (payload) => ({ type: ActionTypes.ADD_TODO, payload });
const clearAllTodos = () => ({ type: ActionTypes.CLEAR_ALL_TODOS });
const updateTodo = (payload) => ({ type: ActionTypes.UPDATE_TODO, payload });
const populateTodos = (payload) => ({ type: ActionTypes.POPULATE_TODOS, payload });
const fetchTodos = () => ({ type: ActionTypes.FETCH_TODOS });
const actions = {
    updateTodo,
    addTodo,
    clearAllTodos,
    populateTodos,
    fetchTodos,
};
export default actions;
export { ActionTypes, populateTodos, addTodo, clearAllTodos };
