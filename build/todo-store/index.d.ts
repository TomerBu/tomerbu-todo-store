export declare const store: import("@wordpress/data/build-types/types").StoreDescriptor<import("@wordpress/data/build-types/types").ReduxStoreConfig<unknown, {
    updateTodo: (payload: import("../types").TodoUpdate) => {
        readonly type: import("./actions").ActionTypes.UPDATE_TODO;
        readonly payload: import("../types").TodoUpdate;
    };
    addTodo: (payload: import("../types").TodoAdd) => {
        readonly type: import("./actions").ActionTypes.ADD_TODO;
        readonly payload: import("../types").TodoAdd;
    };
    clearAllTodos: () => {
        readonly type: import("./actions").ActionTypes.CLEAR_ALL_TODOS;
    };
    populateTodos: (payload: import("..").Todo[]) => {
        readonly type: import("./actions").ActionTypes.POPULATE_TODOS;
        readonly payload: import("..").Todo[];
    };
    fetchTodos: () => {
        readonly type: import("./actions").ActionTypes.FETCH_TODOS;
    };
}, {
    getTodos: (state: import("..").State) => import("..").Todo[];
    getTodoById: (state: import("..").State, id: number) => import("..").Todo | undefined;
}>>;
export default store;
