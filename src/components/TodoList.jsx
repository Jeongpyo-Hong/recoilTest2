import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  // useRecoilValue로 atom 값 그대로를 가져온다.
  const todos = useRecoilValue(todoSelector);

  // useRecoilState는 useState 사용한다고 생각하면 이해가 쉽다.
  const [category, setCategory] = useRecoilState(categoryState);

  // selcet태그의 onInput 속성을 활용하여 value값 가져온다.
  const onInput = (e) => {
    setCategory(e.currentTarget.value);
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateTodo />
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;

// ▼ useForm 연습 ▼
// const TodoList = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError", { message: "Server offline" });
//   };
//   console.log("errors", errors);

//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexFlow: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "email is required",
//             pattern: {
//               value: /^[A-Za-z0-9]+@naver.com$/,
//               message: "이메일 형식에 맞게 입력하세요.",
//             },
//           })}
//           placeholder="email"
//         />
//         <span>{errors.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "write here",
//             validate: {
//               noNico: (value) =>
//                 value.includes("nico") ? "no nicos allowed" : true,
//               noNick: (value) =>
//                 value.includes("nick") ? "no nicos allowed" : true,
//             },
//           })}
//           placeholder="firstName"
//         />
//         <span>{errors.firstName?.message}</span>
//         <input
//           {...register("lastName", { required: "write here" })}
//           placeholder="lastName"
//         />
//         <span>{errors.lastName?.message}</span>
//         <input
//           {...register("userName", { required: "write here", minLength: 10 })}
//           placeholder="userName"
//         />
//         <span>{errors.userName?.message}</span>
//         <input
//           {...register("password", { required: "write here", minLength: 5 })}
//           placeholder="password"
//         />
//         <span>{errors.password?.message}</span>
//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short",
//             },
//           })}
//           placeholder="password1"
//         />
//         <span>{errors.password1?.message}</span>
//         <button>Add</button>
//         {/* <span>{errors.extraError?.message}</span> */}
//       </form>
//     </div>
//   );
// };

// export default TodoList;
