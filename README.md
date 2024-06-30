# Tomerbu Todo Store

A shared Redux store for managing todos, designed to be used with WordPress blocks.

## Installation

```bash
npm install tomerbu-todo-store
```

### Usage

```js
import { useDispatch, useSelect } from "@wordpress/data";

const todos = useSelect((select) => select.getTodos(), []);
const useTodoDispatch = useDispatch("todos-store");

useTodoDispatch().addTodo({
  id: Date.now(),
  text: "New Todo",
});
```
