import { State } from "../types";
declare const selectors: {
    getTodos: (state: State) => import("../types").Todo[];
    getTodoById: (state: State, id: number) => import("../types").Todo | undefined;
};
export default selectors;
