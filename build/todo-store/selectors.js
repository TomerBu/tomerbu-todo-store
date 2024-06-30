const selectors = {
    getTodos: (state) => state.todos,
    getTodoById: (state, id) => state.todos.find((todo) => todo.id === id),
};
export default selectors;
