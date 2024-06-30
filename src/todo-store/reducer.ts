import { Actions, State } from "../types";
import { ActionTypes } from "./actions";

const initialState: State = { todos: [] };

const reducer = (state = initialState, action: Actions): State => {
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
