import { useState } from "react";
import Layout from "./components/Layout/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const [data, setData] = useState("");

  const dataFlay = (value) => {
    setData(value);
  };

  // console.log("this is app", data)

  const toggleMode = () => {
    if (darkMode === false) {
      setDarkMode(true);
      document.body.style.backgroundColor = "#3f3f3f";
    } else {
      setDarkMode(false);
      document.body.style.backgroundColor = "lightgrey";
    }
  };

  const addTodoHandler = (todo) => {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setTodosList((prevTodosList) => {
      return [
        ...prevTodosList,
        {
          value: todo,
          id: prevTodosList.length + 1,
          time: time,
          date: today.toLocaleDateString(),
        },
      ];
    });
  };

  const removeTodoHandler = (id) => {
    setTodosList((todos) => todos.filter((value) => value.id !== id));
  };

  const todoClearHandler = () => {
    setTodosList([]);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Layout
        clearTodo={todoClearHandler}
        todos={todosList}
        getDataValue={dataFlay}
        dMode={darkMode}
        toggleMode={toggleMode}
      >
        <TodoForm onAddTodo={addTodoHandler} darkMode={darkMode} />
        <TodoList
          todos={todosList}
          removeTodo={removeTodoHandler}
          clearTodo={todoClearHandler}
          search={data}
          darkMode={darkMode}
        />
      </Layout>
    </div>
  );
}

export default App;
