import PropTypes from "prop-types";

export default function TodoCounter({ completed, total }) {
  return (
    <div>
      <h1>
        Completaste {completed} de {total} tareas
      </h1>
    </div>
  );
}

TodoCounter.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
