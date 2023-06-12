import { useEffect, useReducer } from "react";
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { getTodoApi } from "../../api/client";
import { todoReducer, actions } from "./TodoReducer";

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    getTodoApi()
      .then((res) => {
        dispatch({ type: actions.INIT, initData: res.data })
      })
      .catch((err) => {
        throw new Error(err);
      })
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      <TodoInput dispatch={dispatch} />
      <ul>
        {todos.map(item =>
          <TodoItem
            key={item.id}
            contents={item}
            dispatch={dispatch} />
        )}
      </ul>
    </>
  )
}

export default TodoList;