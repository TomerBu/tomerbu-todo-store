import { ActionTypes } from "./actions";
const initialState = { todos: [] };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO /**/:
            return {
                ...state,
                todos: [...state.todos, { ...action.payload }],
            };
        case ActionTypes.CLEAR_ALL_TODOS:
            return { todos: [] };
        case ActionTypes.POPULATE_TODOS:
            return { todos: [...state.todos, ...action.payload] };
        case ActionTypes.UPDATE_TODO:
            return {
                todos: state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, ...action.payload } : todo),
            };
        default:
            return state;
    }
};
export default reducer;
