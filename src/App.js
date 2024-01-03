import React from "react";
import ItemList from "./item";


const App = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;