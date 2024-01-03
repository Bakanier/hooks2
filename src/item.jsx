import React, { useCallback, useMemo } from 'react';

const ItemList = ({ items }) => {
  const handleItemClick = useCallback((index) => {
    console.log(`Item clicked: ${index}`);
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) => item % 2 === 0);
  }, [items]);

  return (
    <div>
      <h2>Filtered Item List (четные числа)</h2>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;