import { Actions, State } from "../types";
import { ActionTypes } from "./actions";

const initialState: State = { todos: [] };

const idGenerator = function* () {
  let id = 500;
  while (true) {
    yield id++;
  }
};
const idf = idGenerator();

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.ADD_TODO /**/:
      return {
        todos: [
          ...state.todos,
          { ...action.payload, id: idf.next().value, completed: false },
        ],
      };
    case ActionTypes.CLEAR_ALL_TODOS:
      return { todos: [] };
    case ActionTypes.POPULATE_TODOS:
      return { todos: [...state.todos, ...action.payload] };
    case ActionTypes.UPDATE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
