import { useState, useEffect } from "react";

function PersistentHook(key, value) {
  const [array, setArray] = useState(() => {
    const stickyValues = localStorage.getItem(key);
    return stickyValues !== null ? JSON.parse(stickyValues) : value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(array));
  }, [key, array]);
  return [array, setArray];
}

export default PersistentHook;
