import "./App.css";
import { useState } from "react";
import { TodoList } from "./components/";
// import uniqueId from "lodash/uniqueId";
import { useLocalStorage } from "./customHook/useLocalStorage";

const defaultTodos = [
  {
    id: "0001",
    type: "home",
    text: "First Item First Item First Item First Item First Item First Item First Item",
    description: "This is the first item in our list.",
    completed: false,
  },
  {
    id: "0002",
    type: "study",
    text: "Second Item",
    description: "This is the second item in our list.",
    completed: true,
  },
  {
    id: "0003",
    type: "work",
    text: "Third Item",
    description: "This is the third item in our list.",
    completed: false,
  },
  {
    id: "0004",
    type: "work",
    text: "Third Item",
    description: "This is the third item in our list.",
    completed: false,
  },
  {
    id: "0005",
    type: "work",
    text: "Third Item",
    description: "This is the third item in our list.",
    completed: false,
  },
];

function App() {
  const [todos, saveTodos, loading, error] = useLocalStorage(
    "todos",
    defaultTodos
  );
  const [search, setSearch] = useState("");

  // const createNewTodo = (newTodo) => {
  //   // const _uniqueId = uniqueId("todo-");
  //   // newTodo.id = _uniqueId;
  //   const updatedTodos = [...todos, newTodo];
  //   saveTodos(updatedTodos);
  // };

  const updateCompleted = (id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    saveTodos(updatedTodos);
  };

  const removeById = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    saveTodos(updatedTodos);
  };

  const openPortal = () => {};

  return (
    <>
      <TodoList
        defaultTodos={todos}
        updateCompleted={updateCompleted}
        search={search}
        setSearch={setSearch}
        removeById={removeById}
        loading={loading}
        error={error}
        openPortal={openPortal}
      />

    </>
  );
}

export default App;
