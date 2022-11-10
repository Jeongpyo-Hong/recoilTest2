import React from "react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

const Todo = ({ text, category, id }) => {
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);

  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  // 작성한 Todo 카테고리 변경
  const onClick = (e) => {
    const {
      currentTarget: { name },
    } = e;
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };

  // 작성한 Todo 삭제
  const DeleteHandler = () => {
    setTodos((oldTodos) => {
      const targetIndex = todos.findIndex((todo) => todo.id === id);
      return [
        ...oldTodos.slice(0, targetIndex),
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };

  // Todo 수정하기
  const ChangeHandler = (e) => {
    setIsEdit(!isEdit);
  };

  // 수정한 Todo 저장하기
  const SaveHandler = () => {
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      const newTodos = { text: newText, category, id };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodos,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
    setIsEdit(!isEdit);
  };

  return (
    <>
      {!isEdit ? (
        <li>
          <span>{text}</span>
          {category !== "DOING" && (
            <button name="DOING" onClick={onClick}>
              Doing
            </button>
          )}
          {category !== "TODO" && (
            <button name="TODO" onClick={onClick}>
              To Do
            </button>
          )}
          {category !== "DONE" && (
            <button name="DONE" onClick={onClick}>
              Done
            </button>
          )}
          <button onClick={ChangeHandler}>Change</button>
          <button onClick={DeleteHandler}>Delete</button>
        </li>
      ) : (
        <li>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
          {category !== "DOING" && (
            <button name="DOING" onClick={onClick}>
              Doing
            </button>
          )}
          {category !== "TODO" && (
            <button name="TODO" onClick={onClick}>
              To Do
            </button>
          )}
          {category !== "DONE" && (
            <button name="DONE" onClick={onClick}>
              Done
            </button>
          )}
          <button onClick={SaveHandler}>Save</button>
        </li>
      )}
    </>
  );
};

export default Todo;
