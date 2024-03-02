const filterByType = (todoList, type) => {
  const currentType = type.toLowerCase();

  if (currentType === "all") return todoList;
  else {
    const filtered = todoList.filter((todo) => todo.type === currentType);
    return filtered;
  }
};

const filteredByCompleted = (todoList) => {
  const completedTodos = todoList.filter((todo) => todo.completed === true);
  return completedTodos;
};

const filterByText = (todoList, text) => {
  if (text !== "" && text !== " ") {
    const filtered = todoList.filter(
      (todo) => todo.text.includes(text) || todo.description.includes(text)
    );

    return filtered;
  }

  return todoList;
};

export { filterByType, filteredByCompleted, filterByText };
