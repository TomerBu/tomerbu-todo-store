var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_TODO"] = "ADD_TODO";
    ActionTypes["CLEAR_ALL_TODOS"] = "CLEAR_ALL_TODOS";
})(ActionTypes || (ActionTypes = {}));
const addTodo = (payload) => ({ type: ActionTypes.ADD_TODO, payload });
const clearAllTodos = () => ({ type: ActionTypes.CLEAR_ALL_TODOS });
const actions = {
    addTodo,
    clearAllTodos,
};
export default actions;
export { ActionTypes };
