import { Todo } from "../types";
declare const controls: {
    FETCH_TODOS(): Promise<Todo[]>;
};
export default controls;
