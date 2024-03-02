import { useEffect, useRef, useState } from "react";

const useDebounce = (value = null, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};

export { useDebounce };
