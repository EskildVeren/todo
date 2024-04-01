import { useState } from "react";
import "./style.css";
//import * as deleteIcon from "./assets/deleteIcon.svg";
import DeleteIcon from "./DeleteIcon";
import AddIcon from "./AddIcon";

type todoDay = {
  date: string;
  items: string[];
};

const todoData: todoDay = {
  date: "today",
  items: ["Vask klær", "Ring farmor", "Fullfør inlevering", "Mat katten"],
};

function App() {
  const [strikedItems, setStrikedItems] = useState([""]);
  const [editmode, setEditmode] = useState(false);
  const [todos, setTodos] = useState(todoData.items);

  const handleAddTodo = () => {
    setTodos([...todos, "wooo"]);
  };

  const handleDeleteTodo = (todo: string) => {
    //const newTodos = todos;
    setTodos(todos.filter((item) => item != todo));
  };

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

      {todos.map((todo, index) => {
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
            {editmode ? (
              <DeleteIcon
                height="3em"
                width="3em"
                className="clickable"
                deleteFunction={() => handleDeleteTodo(todo)}
                todoName={todo}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
      {editmode ? (
        <div className="todoListItem clickable" onClick={() => handleAddTodo()}>
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
