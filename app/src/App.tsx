import { useState } from "react";
import "./style.css";
//import * as deleteIcon from "./assets/deleteIcon.svg";
import DeleteIcon from "./DeleteIcon";
import AddIcon from "./AddIcon";

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

  const handleEditTodosClicked = () => {};

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
            </p>
            {editmode ? <DeleteIcon height="3em" width="3em" /> : ""}
          </div>
        );
      })}
      {editmode ? (
        <div className="todoListItem">
          <p className="todoText">Add a todo!</p>
          <AddIcon height="3em" width="3em" />
        </div>
      ) : (
        ""
      )}

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
