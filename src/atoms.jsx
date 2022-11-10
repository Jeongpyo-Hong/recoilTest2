import { atom, selector } from "recoil";

// 작성한 TODO를 저장하기 위한 atom이다.
export const todoState = atom({
  key: "todo",
  default: [],
});

// TODO를 카테고리별로 분류하기 위한 atom이다.
export const categoryState = atom({
  key: "category",
  default: "TODO",
});

// selector는 해당 atom 값을 가져와서 변형할 때 사용한다.
// 'get' function이 있어야 atom을 받을 수 있다.
export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
