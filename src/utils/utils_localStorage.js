const initializeTodos = (todos) => {
  let savedTodos = [];
  if (localStorage.getItem("todos") === null) {
    savedTodos = localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    savedTodos = JSON.parse(localStorage.getItem("todos"));
  }

  return savedTodos;
};

const saveTodos = (newTodos) => {
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

const cleanTodos = () => {
  localStorage.removeItem("todos");
};

export { initializeTodos, saveTodos, cleanTodos };
