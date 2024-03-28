import { useState } from "react";
import "./style.css";

type todoDay = {
  date: string;
  items: string[];
};

const todos: todoDay = {
  date: "today",
  items: ["Vask klær", "Ring farmor", "Fullfør inlevering", "Mat katten"],
};

function App() {
  const [strikedItems, setStrikedItems] = useState([""]);

  const strikeItem = (todo: string) => {
    if (strikedItems.includes(todo)) {
      setStrikedItems(strikedItems.filter((item) => item != todo));
    } else {
      setStrikedItems([...strikedItems, todo]);
    }
  };

  return (
    <>
      <h1>Todo Today</h1>

      {todos.items.map((todo, index) => {
        return (
          <p
            key={index}
            onClick={() => strikeItem(todo)}
            className={strikedItems.includes(todo) ? "striked" : ""}
          >
            {todo}
          </p>
        );
      })}
    </>
  );
}

export default App;
