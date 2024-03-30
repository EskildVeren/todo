import { useState } from "react";
import "./style.css";
//import * as deleteIcon from "./assets/deleteIcon.svg";
import DeleteIcon from "./DeleteIcon";

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
  const [editmode, setEditmode] = useState(false);

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
          <div key={index} className="todoListItem">
            <p
              onClick={() => strikeItem(todo)}
              className={
                strikedItems.includes(todo) ? "todoText striked" : "todoText"
              }
            >
              {todo}
              <DeleteIcon width="20px" height="20px" />
            </p>
          </div>
        );
      })}

      {editmode ? <p>Edit</p> : <></>}

      <div className="bottomFill">
        <div
          className="enterEditModeDiv"
          onClick={() => setEditmode(!editmode)}
        >
          <p className="enterEditModeText">Edit todos</p>
        </div>
      </div>
    </>
  );
}

export default App;
