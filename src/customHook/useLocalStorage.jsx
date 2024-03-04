import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue = []) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setError(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [item]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem, loading, error];
};

export { useLocalStorage };
