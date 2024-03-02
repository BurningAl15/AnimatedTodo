import { useState } from "react";

export default function TodoSearch({ setSearch }) {
  const [localSearch, setLocalSearch] = useState("");

  return (
    <input
      className="todo-search"
      placeholder="Algo"
      value={localSearch}
      onChange={(e) => {
        setLocalSearch(e.target.value);
        setSearch(e.target.value);
      }}
    />
  );
}
