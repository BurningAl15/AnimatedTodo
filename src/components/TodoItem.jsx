import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function TodoItem({
  id,
  type,
  todoText,
  todoDescription,
  completed,
  updateCompleted,
  removeById,
}) {
  return (
    <>
      <motion.li
        whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
        className={`todo-item ${completed ? "completed" : ""}`}
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
            onClick={() => {
              updateCompleted(id);
            }}
          >
            {completed ? (
              <MdFavorite size={40} color={"rgb(224, 56, 56)"} />
            ) : (
              <MdFavoriteBorder size={35} />
            )}
          </motion.button>
          <p className="todo-icon">{type.icon}</p>
        </div>
        <div className="todo-favorite-container">
          <div className="todo-content">
            <p className="todo-title">{todoText}</p>
            <p className="todo-description">{todoDescription}</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="close"
          onClick={() => removeById(id)}
        >
          x
        </motion.button>
      </motion.li>
    </>
  );
}

TodoItem.propTypes = {
  type: PropTypes.object,
  todoText: PropTypes.string,
  todoDescription: PropTypes.string,
  completed: PropTypes.bool,
};
