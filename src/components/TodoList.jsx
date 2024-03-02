import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { useMenuAnimation } from "../customHook/useMenuItems";
import { TodoItem, TodoCounter, TodoSearch } from "./";
import { getIcon } from "../utils/getIcons";
import { motion, AnimatePresence } from "framer-motion";
import {
  filterByText,
  filterByType,
  filteredByCompleted,
} from "../utils/filterBy";
import { useDebouncedCallback } from "../customHook/useDebounceCallback";
import Lottie from "lottie-react";
import noAssets from "../assets/noAssets.json";

const tabs = [
  { icon: "👾", label: "All" },
  { icon: "🏠", label: "Home" },
  { icon: "🗒️", label: "Study" },
  { icon: "🖥️", label: "Work" },
];

// export default function TodoList({ children }) {
export default function TodoList({
  defaultTodos,
  updateCompleted,
  search,
  setSearch,
  removeById
}) {
  const [open, setOpen] = useState(false);
  const onOpen = useDebouncedCallback(() => {
    setOpen(true);
  }, 100);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const scope = useMenuAnimation(open);

  const filteredValues = useCallback(
    (todos, label, searchText) => {
      return filterByType(filterByText(todos, searchText), label);
    },
    [defaultTodos, selectedTab, search] // Dependency array
  );

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (open === false) onOpen();
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [selectedTab]);

  const displayedTodos = filteredValues(
    defaultTodos,
    selectedTab.label,
    search
  );

  return (
    <>
      <TodoCounter
        completed={filteredByCompleted(displayedTodos).length}
        total={displayedTodos.length}
      />
      <TodoSearch setSearch={setSearch} />

      <div className="todo-list-container" ref={scope}>
        <div className="todo-list-content">
          <div className="window">
            <main className="main">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab ? selectedTab.label : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedTab ? selectedTab.icon : "😋"}
                </motion.div>
              </AnimatePresence>
            </main>
            <nav className="navigation">
              <ul className="unordered-list">
                {tabs.map((item) => (
                  <li
                    key={item.label}
                    className={item === selectedTab ? "selected list" : "list"}
                    onClick={() => setSelectedTab(item)}
                  >
                    {`${item.icon} ${item.label}`}
                    {item === selectedTab ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul
            className="todo-list"
            style={{
              clipPath: "inset(10% 50% 90% 50% round 10px)",
            }}
          >
            {displayedTodos.length !== 0 ? (
              displayedTodos.map((todo) => (
                <TodoItem
                  key={todo.id + todo.text}
                  id={todo.id}
                  type={getIcon(todo)}
                  todoText={todo.text}
                  todoDescription={todo.description}
                  completed={todo.completed}
                  updateCompleted={updateCompleted}
                  removeById={removeById}
                />
              ))
            ) : (
              <ul className="todo-list">
                <li className="todo-item no-elements">
                  <p>Non Todos for this section</p>
                  <div style={{ width: "200px" }}>
                    <Lottie animationData={noAssets} />
                  </div>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

TodoList.propTypes = {
  defaultTodos: PropTypes.array,
};
