import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todo",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TODO",
});

// selector는 atom을 가져와서 변형할 수 있음
// get function이 있어야 atom을 받을 수 있음
export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
