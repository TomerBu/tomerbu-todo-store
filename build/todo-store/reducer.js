import { ActionTypes } from "./actions";
const initialState = { todos: [] };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO /**/:
            return { todos: [...state.todos, action.payload] };
        case ActionTypes.CLEAR_ALL_TODOS:
            return { todos: [] };
        default:
            return state;
    }
};
export default reducer;
