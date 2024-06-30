import { createReduxStore, register } from "@wordpress/data";
import actions from "./actions";
import reducer from "./reducer";
import selectors from "./selectors";
export const store = createReduxStore("todos-store", {
    reducer,
    actions,
    selectors,
});
register(store);
export default store;
