import "./MainHeader.css";
import ClearButton from "../ClearButton";
import SearchTodo from "../SearchTodo";
import { useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";

const MainHeader = (props) => {
  const totalTodos = props.listOfTodos.length;
  const [data, setData] = useState("");
  const getData = (value) => {
    // console.log(value)
    setData(value);
  };

  useEffect(() => {
    props.getDataValue(data);
  });

  return (
    <div>
      <nav className={props.darkMode ? "darkNavbar" : "lightNavbar"}>
      <div className={props.darkMode ? "darkTodo" : "lightTodo"}>
      <h1>MY</h1>
      <h3>TODO</h3>
      </div>
        <ul className={props.darkMode ? "darkDesktop-list" : "lightDesktop-list"}>
          {totalTodos > 0 && (
            <li>
              <SearchTodo getDataValue={getData} darkMode={props.darkMode} />
            </li>
          )}
          {totalTodos > 0 && (
            <li>
              <ClearButton
                clearTodo={props.clearTodo}
                todoList={props.listOfTodos}
              />
            </li>
          )}
        </ul>
        <ul className={props.darkMode ? "darkMobile-list" : "lightMobile-list"}>
          {totalTodos > 0 && (
            <li>
              <SearchTodo getDataValue={getData} darkMode={props.darkMode} />
            </li>
          )}
          {totalTodos > 0 && (
            <li>
              <ClearButton
                clearTodo={props.clearTodo}
                todoList={props.listOfTodos}
              />
            </li>
          )}
        </ul>
        <div className="dswitch">
          <ToggleSwitch toggleMode={props.toggleMode} />
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
