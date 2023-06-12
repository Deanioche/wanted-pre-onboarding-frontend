import { useCallback, useState } from "react";
import { deleteTodoApi, updateTodoApi } from "../../api/client";
import { actions } from "./TodoReducer";
import styled from "styled-components";

function TodoItem({ contents, dispatch }) {
  const [toggle, setToggle] = useState(false);
  const [todoData, setTodoData] = useState(contents);

  const modifyInput = () => {
    if (todoData.todo === "")
      return;
    handleUpdate(todoData);
    setToggle(false);
  }

  const handleUpdate = useCallback((data) => {
    updateTodoApi(contents.id, data)
      .then((res) => {
        dispatch({
          type: actions.EDIT,
          todoData: res.data
        })
      })
      .catch((err) => {
        throw new Error(err);
      })
  }, [dispatch, contents.id]);

  const handleDelete = useCallback(() => {
    deleteTodoApi(contents.id)
      .then((res) => {
        dispatch({
          type: actions.DELETE,
          id: contents.id
        })
      })
      .catch((err) => {
        throw new Error(err);
      })
  }, [dispatch, contents.id]);

  const handleCheckbox = () => {
    setTodoData({
      ...todoData,
      isCompleted: !todoData.isCompleted,
    })
    handleUpdate({
      ...todoData,
      isCompleted: !todoData.isCompleted,
    })
  }

  const handleCancel = () => {
    setTodoData(contents)
    setToggle(false);
  }

  const handleModify = (e) => {
    setTodoData({
      ...todoData, 
      todo: e.target.value
    })
  }


  return (
    <li>
      {!toggle ? (
        <>
          <label>
            <input
              type="checkbox"
              defaultChecked={todoData.isCompleted}
              onClick={handleCheckbox}
            />
            <StyledSpan>{todoData.todo}</StyledSpan>
          </label>
          <button
            data-testid="modify-button"
            onClick={() => setToggle(true)}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={handleDelete}
          >
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            data-testid="modify-input"
            defaultValue={todoData.todo}
            onChange={handleModify}
          />
          <button
            data-testid="submit-button"
            onClick={modifyInput}
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={handleCancel}
          >
            취소
          </button>
        </>
      )}
    </li>
  )
}

const StyledSpan = styled.span`
  display: inline-block;
  margin: 0 5px 0 5px;
`;

export default TodoItem;