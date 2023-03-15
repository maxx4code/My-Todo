import "./TodoForm.css";

import { useRef, useState } from "react";

const TodoForm = (props) => {
  const todoInputRef = useRef();
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    const enteredTodoValue = todoInputRef.current.value;
    props.onAddTodo(enteredTodoValue);

    setEnteredTodo("");
  };

  const darkMode = props.darkMode;

  var mode = "light";

  if (darkMode) {
    mode = "dark";
  }

  return (
    <div className={`${mode}Form-container`}>
      <form onSubmit={todoSubmitHandler}>
        <div className={`${mode}Form`}>
          <label htmlFor="todoname"></label>
          <input
            ref={todoInputRef}
            type="text"
            id="todoname"
            onChange={todoInputChangeHandler}
            value={enteredTodo}
            placeholder="Enter Todo"
          />
          <button
            className={`${mode}Add`}
            style={{ cursor: "pointer" }}
            disabled={!enteredTodo}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
