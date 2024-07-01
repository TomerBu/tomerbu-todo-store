import { createReduxStore, register } from "@wordpress/data";
import actions from "./actions";
import reducer from "./reducer";
import selectors from "./selectors";
import controls from "./controls";
import resolvers from "./resolvers";
export const store = createReduxStore("todos-store", {
    reducer,
    actions,
    selectors,
    controls,
    resolvers,
});
register(store);
export default store;
