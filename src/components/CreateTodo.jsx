import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

const CreateTodo = () => {
  // useSetRecoilState는 데이터를 변경해야 할 때 사용한다.
  const setTodos = useSetRecoilState(todoState);

  // useRecoilValue로 category 값을 가져온다.
  // TodoList.jsx에서 카테고리 value 값을 변경한 것이 저장되어 있다.
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = ({ todo }) => {
    setTodos((oldTodos) => [
      { text: todo, category, id: Date.now() },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo", {
          required: "Please write a todo",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
