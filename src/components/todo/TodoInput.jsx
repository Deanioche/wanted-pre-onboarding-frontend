import { useRef } from "react";
import { postTodoApi } from "../../api/client";

function TodoInput({ dispatch }) {
  const newTodoRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = newTodoRef.current.value.trim();
    if (!newTodo) {
      newTodoRef.current.value = '';
      return;
    }

    postTodoApi(newTodo)
      .then((res) => {
        dispatch({
          type: 'ADD',
          todoData: res.data
        })
      })
      .catch((err) => {
        throw new Error(err);
      });
    newTodoRef.current.value = '';
  };

  return (
    <form>
      <input
        data-testid="new-todo-input"
        ref={newTodoRef}
      />
      <button
        data-testid="new-todo-add-button"
        onClick={handleAddTodo}
      >
        추가
      </button>
    </form>
  );
}

export default TodoInput;