export declare const store: import("@wordpress/data/build-types/types").StoreDescriptor<import("@wordpress/data/build-types/types").ReduxStoreConfig<unknown, {
    addTodo: (payload: import("..").Todo) => {
        readonly type: import("./actions").ActionTypes.ADD_TODO;
        readonly payload: import("..").Todo;
    };
    clearAllTodos: () => {
        readonly type: import("./actions").ActionTypes.CLEAR_ALL_TODOS;
    };
}, {
    getTodos: (state: import("..").State) => import("..").Todo[];
    getTodoById: (state: import("..").State, id: number) => import("..").Todo | undefined;
}>>;
export default store;
