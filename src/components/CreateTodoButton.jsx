import { motion } from "framer-motion";

export default function CreateTodoButton({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      className="create-todo"
      onClick={()=>onClick()}
    >
      Añadir
    </motion.button>
  );
}
