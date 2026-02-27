import { useState, useReducer } from "react";

import style from "./TodoApp.module.css";

const initialValue = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

const TodoApp = () => {
  const [text, setText] = useState("");
  const [state, depatcher] = useReducer(reducer, initialValue);

  const handdleAdd = () => {
    if (text.trim() !== "") {
      const newTodo = {
        id: crypto.randomUUID(),
        title: text,
        completed: false,
      };

      depatcher({ type: "add", payload: newTodo });
      setText("");
    } else {
    }
  };

  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <div className={style.formTodo}>
        <input
          type="text"
          value={text}
          name=""
          id=""
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Todo"
        />
        <button onClick={handdleAdd}>Add</button>
      </div>
      <div>
        <ol className={style.listForm}>
          {state.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed==true}
                onChange={() => depatcher({ type: "toggle", payload: todo.id })}
              />
              <span
                className={todo.completed == true ? style.completed : ""}
                onClick={() => depatcher({ type: "toggle", payload: todo.id })}
              >
                {todo.title}
              </span>
              <button
                onClick={() => depatcher({ type: "delete", payload: todo.id })}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoApp;
