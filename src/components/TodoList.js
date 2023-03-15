import "./TodoList.css";

const TodoList = (props) => {
  const todoCutHandler = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };

  const darkMode = props.darkMode;

  var mode = "light";

  if (darkMode) {
    mode = "dark";
  }

  return (
    <div className={`${mode}Main`}>
      {props.todos.length === 0 && (
        <div className={`${mode}The-empty-text`}>The List is Empty</div>
      )}
      <div className={`${mode}TheContainer`}>
        <ul style={{ listStyle: "none" }}>
          {props.todos
            .filter((todo) => {
              return props.search.toLowerCase() === ""
                ? todo
                : todo.value.toLowerCase().includes(props.search);
            })
            .map((todo) => (
              <li
                className={`${mode}List`}
                style={{ cursor: "pointer" }}
                // onClick={() => props.removeTodo(todo.id)}
                key={todo.id}
              >
                <div className={`${mode}Todo-item`}>
                  <div className={`${mode}Todo-item__description`}>
                    <h2 onClick={todoCutHandler}>{todo.value}</h2>
                    <div className={`${mode}Todo-newDateContainer`}>
                      <div className={`${mode}Todo-newDate`}>{todo.date}</div>|
                      <div className={`${mode}Todo-newTime`}>{todo.time}</div>
                    </div>
                  </div>
                  <button onClick={() => props.removeTodo(todo.id)}>🗑</button>
                </div>
              </li>
            ))}
        </ul>
        {props.todos.length > 0 && (
          <button className={`${mode}ClearBtn`} onClick={props.clearTodo}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
