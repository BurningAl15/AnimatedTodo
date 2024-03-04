import { motion } from "framer-motion";
import { MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";

export default function TodoItemSkeleton({
  type,
  todoText,
  todoDescription,
  completed,
}) {
  return (
    <>
      <motion.li
        whileHover={{ scale: 1.1 }}
        className={`todo-item`}
        style={{
          backgroundColor: completed ? type.bgColorCompleted : type.bgColor,
        }}
      >
        <div className="todo-type">
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            type="button"
            className="todo-favorite"
          >
            <MdFavorite className="todo-skeleton-icon" size={40} />
          </motion.button>
          <p className="todo-icon">
            <p className="todo-skeleton-icon todo-skeleton-icon-size">
              {type.icon}
            </p>
          </p>
        </div>
        <div className="todo-favorite-container">
          <div className="todo-content">
            <p className="todo-title todo-icon-skeleton-l">{todoText}</p>
            <p className="todo-description todo-icon-skeleton-m">
              {todoDescription}
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="close todo-skeleton-icon"
        >
          x
        </motion.button>
      </motion.li>
    </>
  );
}

TodoItemSkeleton.propTypes={
    type: PropTypes.object,
    todoText: PropTypes.string,
    todoDescription: PropTypes.string,
    completed: PropTypes.bool,
}