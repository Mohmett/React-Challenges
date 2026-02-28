import { useState, useReducer } from "react";


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

const TodoAppwithTailwind = () => {
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
    
    <div className="bg-gray-200 flex flex-col gap-5 items-center my-50 mx-80 p-10 rounded-lg" >
      <h1 className="text-2xl font-bold">Todo App</h1>
      <div className="flex items-center gap-2 " >
        <input className="bg-white text-center py-3  px-5 rounded-sm" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Todo"
        />
        <button className="bg-blue-700 text-white py-3  px-5 rounded-sm hover:bg-blue-600" onClick={handdleAdd}>Add</button>
      </div>
      <div>
        <ol className="flex flex-col gap-2 justify-around ">
          {state.map((todo) => (
            <li key={todo.id} className="flex gap-3 items-center bg-white p-5 rounded-sm">
              {/* checked={todo.completed}
                onChange={() => depatcher({ type: "toggle", payload: todo.id })}
                {todo.completed == true ? style.completed : ""}
                */}
              <input type="checkbox"/>
              <span
                className=""
                onClick={() => depatcher({ type: "toggle", payload: todo.id })}
              >
                {todo.title}
              </span>
              <button className="text-red-700 cursor-pointer hover:text-red-600"
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

export default TodoAppwithTailwind;
