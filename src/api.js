export const addForm = () => {
  return fetch("http://localhost:3001/todos").then((res) => {
    res.json();
  });
};
