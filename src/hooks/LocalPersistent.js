import { useState, useEffect } from 'react';

function PersistentHook(defaultValue, key) {
  const [array, setArray] = useState(() => {
    const stickyValues = localStorage.getItem(key);

    return stickyValues !== null ? JSON.parse(stickyValues) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(array));
  }, [key, array]);
  return [array, setArray];
}

export default PersistentHook;
