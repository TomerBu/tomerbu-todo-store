import { ActionTypes } from "./actions";
const performFetchTodos = () => fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then((response) => response.ok
    ? response
    : Promise.reject(new Error("Failed to fetch todos.")))
    .then((response) => response.json())
    .then((todos) => todos);
const performAddTodo = (todo) => fetch("https://jsonplaceholder.typicode.com/todos", {
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
    .then((todo) => todo);
const controls = {
    [ActionTypes.CREATE_TODO](action) {
        return performAddTodo(action.payload);
    },
    [ActionTypes.FETCH_TODOS]() {
        return performFetchTodos();
    },
};
export default controls;
